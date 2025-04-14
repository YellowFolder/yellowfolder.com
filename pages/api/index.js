export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	try {
		const fields = req.body;

		const response = await fetch(
			`${process.env.FRESHDESK_BASE_URL}/api/v2/tickets`,
			{
				method: 'POST',
				headers: {
					Authorization: `Basic ${Buffer.from(
						process.env.FRESHDESK_KEY_PROD
					).toString('base64')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(fields),
			}
		);

		if (!response.ok) {
			const errorData = await response.json();
			console.error('Freshdesk API error:', errorData);
			return res.status(response.status).json({
				error: true,
				message:
					errorData.message || 'An error occurred with the Freshdesk API',
			});
		}

		const data = await response.json();
		return res.status(200).json(data);
	} catch (error) {
		console.error('Server error:', error);
		return res.status(500).json({
			error: true,
			message: error.message || 'An internal server error occurred',
		});
	}
}
