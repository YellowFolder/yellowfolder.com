import React from 'react';
import Contact from '../components/Contact';

export async function getStaticProps() {
	const FRESHDESK_KEY = process.env.FRESHDESK_KEY_TEST;
	const FRESHDESK_BASE_URL = process.env.FRESHDESK_BASE_URL;
	let url = `${FRESHDESK_BASE_URL}/api/v2/tickets`;

	return {
		props: {
			tickets: {},
		},
	};
}

const ContactPage = () => <Contact />;

export default ContactPage;
