// Rate limiting: Simple in-memory store (use Redis in production)
const rateLimit = new Map();

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 10;

function checkRateLimit(ip) {
	const now = Date.now();
	const userRequests = rateLimit.get(ip) || [];

	// Remove old requests outside the time window
	const recentRequests = userRequests.filter(
		time => now - time < RATE_LIMIT_WINDOW
	);

	if (recentRequests.length >= MAX_REQUESTS) {
		return false;
	}

	recentRequests.push(now);
	rateLimit.set(ip, recentRequests);
	return true;
}

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	// Rate limiting
	const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
	if (!checkRateLimit(ip)) {
		console.log(`[RecordRequest] Rate limit exceeded for IP: ${ip}`);
		return res.status(429).json({
			error: 'Too many requests. Please try again later.',
			message:
				'You have submitted too many requests. Please wait an hour before trying again.',
		});
	}

	// Extract and validate data
	const {
		district,
		name,
		email,
		phone,
		recordSeries,
		targetName,
		targetAlias,
		targetDOB,
		targetCampus,
		targetLeaveDate,
		targetStatus,
		targetID,
		targetTerminationDate,
		extraInfo,
		recaptchaToken,
		submissionTime,
	} = req.body;

	// Timing validation - reject submissions that are too fast (< 3 seconds)
	if (submissionTime && submissionTime < 3000) {
		console.log(
			`[RecordRequest] Submission too fast (${submissionTime}ms) for IP: ${ip}`
		);
		return res.status(400).json({
			error: 'Submission too fast',
			message: 'Please take your time to fill out the form.',
		});
	}

	// reCAPTCHA verification
	if (!recaptchaToken) {
		return res.status(400).json({
			error: 'Missing reCAPTCHA',
			message: 'Please complete the reCAPTCHA verification.',
		});
	}

	try {
		const verifyURL = 'https://www.google.com/recaptcha/api/siteverify';
		const recaptchaResponse = await fetch(verifyURL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
		});

		const recaptchaData = await recaptchaResponse.json();

		if (!recaptchaData.success) {
			console.log(
				`[RecordRequest] reCAPTCHA verification failed for IP: ${ip}`,
				recaptchaData
			);
			return res.status(400).json({
				error: 'reCAPTCHA verification failed',
				message: 'Please complete the reCAPTCHA verification and try again.',
			});
		}

		// Optional: Check score for reCAPTCHA v3 (if you upgrade)
		// if (recaptchaData.score < 0.5) {
		//   return res.status(400).json({ error: 'Suspicious activity detected' });
		// }
	} catch (error) {
		console.error('[RecordRequest] reCAPTCHA verification error:', error);
		return res.status(500).json({
			error: 'Verification error',
			message: 'Failed to verify reCAPTCHA. Please try again.',
		});
	}

	// Validation
	if (!email || !name || !district || !phone) {
		return res.status(400).json({
			error: 'Missing required fields',
			message:
				'Please fill in all required fields: email, name, district, and phone.',
		});
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({
			error: 'Invalid email format',
			message: 'Please provide a valid email address.',
		});
	}

	// Sanitize inputs (prevent XSS)
	const sanitize = str => String(str || '').replace(/[<>]/g, '');

	const sanitizedData = {
		district: sanitize(district),
		name: sanitize(name),
		email: sanitize(email),
		phone: sanitize(phone),
		recordSeries: sanitize(recordSeries),
		targetName: sanitize(targetName),
		targetAlias: sanitize(targetAlias),
		targetDOB: sanitize(targetDOB),
		targetCampus: sanitize(targetCampus),
		targetLeaveDate: sanitize(targetLeaveDate),
		targetStatus: sanitize(targetStatus),
		targetID: sanitize(targetID),
		targetTerminationDate: sanitize(targetTerminationDate),
		extraInfo: sanitize(extraInfo),
	};

	// Build description
	const description = [
		`Target Alias or Maiden Name: ${sanitizedData.targetAlias}`,
		`Target Name: ${sanitizedData.targetName}`,
		`Target Date of Birth: ${sanitizedData.targetDOB}`,
		`Target Campus: ${sanitizedData.targetCampus}`,
		`Target Withdrawal/Graduation Date: ${sanitizedData.targetLeaveDate}`,
		`Target Active or Archive: ${sanitizedData.targetStatus}`,
		`Target ID Number: ${sanitizedData.targetID}`,
		`Target Date of Termination: ${sanitizedData.targetTerminationDate}`,
		`Additional Information: ${sanitizedData.extraInfo}`,
	].join('\n<br/><br/>\n');

	// Prepare Freshdesk ticket data
	const freshdeskData = {
		email: sanitizedData.email,
		name: sanitizedData.name,
		phone: sanitizedData.phone,
		subject: `Record Request for ${sanitizedData.district}`,
		type: 'Record Retrieval',
		status: 2, // "open" (new)
		priority: 2, // medium
		responder_id: 48011471036, // christine roblez
		group_id: 48000495294, // customer support
		source: 2, // web portal
		custom_fields: {
			cf_record_series1: sanitizedData.recordSeries || 'None',
			cf_district: sanitizedData.district,
			cf_billable: false,
			cf_hours_spent: null,
		},
		description: description,
	};

	try {
		// Make server-side request to Freshdesk
		const freshdeskUrl = `${process.env.FRESHDESK_BASE_URL}/api/v2/tickets`;
		const auth = Buffer.from(process.env.FRESHDESK_KEY_PROD + ':X').toString(
			'base64'
		);

		const response = await fetch(freshdeskUrl, {
			method: 'POST',
			headers: {
				Authorization: `Basic ${auth}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(freshdeskData),
		});

		const data = await response.json();

		if (!response.ok) {
			console.error(
				'[RecordRequest] Freshdesk API error:',
				response.status,
				data
			);
			return res.status(response.status).json({
				error: 'Failed to submit record request',
				message:
					'An error occurred while processing your request. Please try again or contact us directly.',
			});
		}

		console.log(`[RecordRequest] Ticket created successfully: ${data.id}`);
		return res.status(200).json({
			success: true,
			message:
				'Your record request has been successfully submitted. We will begin searching for your records.',
		});
	} catch (error) {
		console.error('[RecordRequest] Error submitting to Freshdesk:', error);
		return res.status(500).json({
			error: 'Internal server error',
			message:
				'An error occurred while submitting the form. Please try again later.',
		});
	}
}
