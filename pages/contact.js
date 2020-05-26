import React from 'react';
import unirest from 'unirest';
import Contact from '../components/Contact';

export async function getStaticProps() {
	const FRESHDESK_KEY = process.env.FRESHDESK_KEY_TEST;
	const FRESHDESK_BASE_URL = process.env.FRESHDESK_BASE_URL;
	let url = `${FRESHDESK_BASE_URL}/api/v2/tickets`;

	let resp = await unirest.get(url).auth({
		user: FRESHDESK_KEY,
		sendImmediately: true,
	});

	let ticketList = resp.body;
	let tickets = {};

	await ticketList.map(ticket => {
		let ticketId = ticket.id;
		return (tickets[ticket.id] = { ...ticket });
	});

	console.log(tickets);

	return {
		props: {
			tickets: {
				...tickets,
			},
		},
	};
}

const ContactPage = () => <Contact />;

export default ContactPage;
