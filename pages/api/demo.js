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
		console.log(`[Demo] Rate limit exceeded for IP: ${ip}`);
		return res.status(429).json({
			error: 'Too many requests. Please try again later.',
			message:
				'You have submitted too many requests. Please wait an hour before trying again.',
		});
	}

	// Extract and validate data
	const {
		email,
		firstName,
		lastName,
		howdidyouhear,
		state,
		district,
		inquiryType,
		documentStorageIssue,
		documentStorageBudget,
		honeypot,
		recaptchaToken,
		submissionTime,
	} = req.body;

	// Honeypot validation - if filled, it's a bot
	if (honeypot && honeypot.trim() !== '') {
		console.log(`[Demo] Honeypot triggered for IP: ${ip}`);
		return res.status(400).json({
			error: 'Invalid submission',
			message: 'Your submission could not be processed.',
		});
	}

	// Timing validation - reject submissions that are too fast (< 3 seconds)
	if (submissionTime && submissionTime < 3000) {
		console.log(
			`[Demo] Submission too fast (${submissionTime}ms) for IP: ${ip}`
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
				`[Demo] reCAPTCHA verification failed for IP: ${ip}`,
				recaptchaData
			);
			return res.status(400).json({
				error: 'reCAPTCHA verification failed',
				message: 'Please complete the reCAPTCHA verification and try again.',
			});
		}
	} catch (error) {
		console.error('[Demo] reCAPTCHA verification error:', error);
		return res.status(500).json({
			error: 'Verification error',
			message: 'Failed to verify reCAPTCHA. Please try again.',
		});
	}

	// Validation
	if (!email || !state || !district || !inquiryType) {
		return res.status(400).json({
			error: 'Missing required fields',
			message:
				'Please fill in all required fields: email, state, district, and main priority.',
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
		email: sanitize(email),
		firstName: sanitize(firstName),
		lastName: sanitize(lastName),
		howdidyouhear: sanitize(howdidyouhear),
		state: sanitize(state),
		district: sanitize(district),
		inquiryType: sanitize(inquiryType),
		documentStorageIssue: sanitize(documentStorageIssue),
		documentStorageBudget: sanitize(documentStorageBudget),
	};

	// Build description
	const description = [
		`State: ${sanitizedData.state}`,
		`Main priority for the district: ${sanitizedData.inquiryType}`,
		`Is there a document storage solution in your district/school? ${sanitizedData.documentStorageIssue}`,
		`Has a document storage solution been budgeted for? ${sanitizedData.documentStorageBudget}`,
		`How did you hear about YellowFolder (conference, other district, etc.)? ${sanitizedData.howdidyouhear}`,
	].join('\n<br/><br/>\n');

	// Prepare Freshdesk ticket data
	const freshdeskData = {
		email: sanitizedData.email,
		name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
		type: 'Sales Inquiries',
		subject: `Demo Request from ${sanitizedData.firstName} ${sanitizedData.lastName} at ${sanitizedData.district}`,
		priority: 1,
		status: 2,
		source: 2,
		group_id: 48000495297,
		responder_id: null,
		email_config_id: 48000068881,
		custom_fields: {
			cf_district: sanitizedData.district,
			cf_billable: false,
			cf_record_series1: 'None',
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
			console.error('[Demo] Freshdesk API error:', response.status, data);
			return res.status(response.status).json({
				error: 'Failed to submit demo request',
				message:
					'An error occurred while processing your request. Please try again or contact us directly.',
			});
		}

		console.log(`[Demo] Ticket created successfully: ${data.id}`);
		return res.status(200).json({
			success: true,
			message:
				'Your demo request has been successfully submitted. Thank you for reaching out to us.',
		});
	} catch (error) {
		console.error('[Demo] Error submitting to Freshdesk:', error);
		return res.status(500).json({
			error: 'Internal server error',
			message:
				'An error occurred while submitting the form. Please try again later.',
		});
	}
}
