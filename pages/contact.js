import React from 'react';
import unirest from 'unirest';
import Contact from '../components/Contact';

const FRESHDESK_BASE_URL = 'https://brockboren.freshdesk.com';
const FRESHDESK_PATH = `/api/v2/tickets/`;
const FRESHDESK_KEY = process.env.FRESHDESK_KEY;

export async function getStaticProps() {
	let url = `${FRESHDESK_BASE_URL}${FRESHDESK_PATH}`;
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
			...tickets,
		},
	};
}

const ContactPage = () => <Contact />;

export default ContactPage;
