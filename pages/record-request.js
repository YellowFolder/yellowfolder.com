import React from 'react';
import RecordRequest from '../components/RecordRequest';

class RecordRequestPage extends React.Component {
	static async getInitialProps(ctx) {
		const FRESHDESK_KEY = await process.env.FRESHDESK_KEY_PROD;
		const FRESHDESK_BASE_URL = await process.env.FRESHDESK_BASE_URL;

		return {
			props: {
				FRESHDESK_TOKEN: FRESHDESK_KEY,
				FRESHDESK_BASE_URL: FRESHDESK_BASE_URL,
			},
		};
	}

	render() {
		return <RecordRequest {...this.props}></RecordRequest>;
	}
}

export default RecordRequestPage;
