import unirest from 'unirest';

// export default (req, res) => {
// 	res.setHeader('Content-Type', 'text/html; charset=utf-8');
// 	res.statusCode = 200;
// 	res.end(JSON.stringify({ name: 'YellowFolder' }));
// };

import unirest from 'unirest';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	try {
		const fields = req.body;

		let resp = await unirest
			.post(`${process.env.FRESHDESK_BASE_URL}/api/v2/tickets`)
			.auth({
				user: process.env.FRESHDESK_KEY_PROD,
				sendImmediately: true,
			})
			.type('json')
			.send(fields);

		if (resp.error) {
			console.error('Freshdesk API error:', resp.error);
			return res.status(resp.status || 500).json({
				error: true,
				message: resp.message || 'An error occurred with the Freshdesk API',
			});
		}

		return res.status(200).json(resp.body);
	} catch (error) {
		console.error('Server error:', error);
		return res.status(500).json({
			error: true,
			message: error.message || 'An internal server error occurred',
		});
	}
}
