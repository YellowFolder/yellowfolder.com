import qs from 'qs';

// Simple in-memory rate limiting (use Redis in production)
const requestCounts = new Map();

function checkRateLimit(ip) {
	const now = Date.now();
	const windowMs = 60 * 60 * 1000; // 1 hour
	const maxRequests = 10;

	if (!requestCounts.has(ip)) {
		requestCounts.set(ip, []);
	}

	const requests = requestCounts.get(ip).filter(time => now - time < windowMs);

	if (requests.length >= maxRequests) {
		return false;
	}

	requests.push(now);
	requestCounts.set(ip, requests);
	return true;
}

export default async function handler(req, res) {
	// Only allow POST
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	// Rate limiting
	const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
	if (!checkRateLimit(ip)) {
		return res
			.status(429)
			.json({ error: 'Too many requests. Please try again later.' });
	}

	// Validate required fields
	const {
		email,
		name,
		district,
		recordSeries,
		trainingSession,
		trainingDate1,
		trainingDate2,
		trainingDate3,
		honeypot,
		recaptchaToken,
		submissionTime,
	} = req.body;

	// Honeypot validation - if filled, it's a bot
	if (honeypot && honeypot.trim() !== '') {
		console.log(`[Training] Honeypot triggered for IP: ${ip}`);
		return res.status(400).json({
			error: 'Invalid submission',
			message: 'Your submission could not be processed.',
		});
	}

	// Timing validation - reject submissions that are too fast (< 3 seconds)
	if (submissionTime && submissionTime < 3000) {
		console.log(
			`[Training] Submission too fast (${submissionTime}ms) for IP: ${ip}`
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
				`[Training] reCAPTCHA verification failed for IP: ${ip}`,
				recaptchaData
			);
			return res.status(400).json({
				error: 'reCAPTCHA verification failed',
				message: 'Please complete the reCAPTCHA verification and try again.',
			});
		}
	} catch (error) {
		console.error('[Training] reCAPTCHA verification error:', error);
		return res.status(500).json({
			error: 'Verification error',
			message: 'Failed to verify reCAPTCHA. Please try again.',
		});
	}

	if (!email || !name || !district || !recordSeries || !trainingSession) {
		return res.status(400).json({ error: 'Missing required fields' });
	}

	// Validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({ error: 'Invalid email format' });
	}

	// Sanitize inputs (basic XSS prevention)
	const sanitize = str => String(str).replace(/[<>]/g, '');

	try {
		// Build description
		const description = {
			'Training Session': `${sanitize(trainingSession)}\n`,
			'Training Date 1': `${new Date(trainingDate1).toLocaleString('en-US')}\n`,
			'Training Date 2': `${new Date(trainingDate2).toLocaleString('en-US')}\n`,
			'Training Date 3': `${new Date(trainingDate3).toLocaleString('en-US')}\n`,
		};

		// Build ticket fields
		const fields = {
			email: sanitize(email),
			name: sanitize(name),
			type: 'PNE Training Recommended',
			subject: `Training Requested by ${sanitize(name)} at ${sanitize(
				district
			)} - ${sanitize(trainingSession)}`,
			priority: 2,
			status: 2,
			source: 2,
			group_id: 48000495297,
			responder_id: null,
			email_config_id: 48000068881,
			custom_fields: {
				cf_district: sanitize(district),
				cf_billable: false,
				cf_record_series1: sanitize(recordSeries),
				cf_hours_spent: null,
			},
			description: qs.stringify(description, {
				encode: false,
				delimiter: '\n<br/><br/>\n',
			}),
		};

		// Call Freshdesk API (server-side only, API key never exposed to client)
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
			body: JSON.stringify(fields),
		});

		const data = await response.json();

		if (!response.ok) {
			console.error('Freshdesk API error:', data);
			return res.status(response.status).json({
				error: true,
				message: data.message || 'An error occurred with the support system',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Your training request has been submitted successfully.',
			ticketId: data.id,
		});
	} catch (error) {
		console.error('Server error:', error);
		return res.status(500).json({
			error: true,
			message: 'An internal server error occurred. Please try again later.',
		});
	}
}
