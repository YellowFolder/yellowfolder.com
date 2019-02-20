import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
	width: 100%;
	height: auto;
	margin: 0 auto;
	padding: 0;
	max-width: ${props => props.theme.maxWidth};
	background: ${props => props.theme.white};
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr auto;
	grid-gap: 60px;
	grid-template-areas:
		'header header header'
		'sidebar form form'
		'sidebar form form';

	.contact-form--header {
		grid-area: header;
		h1 {
			font-size: 5.4rem;
			line-height: 54px;
			font-family: ${props => props.theme.boldFont};
			font-weight: 700;
			margin: 2rem 0 0 0;
		}
	}

	.contact-form--sidebar {
		grid-area: sidebar;
		border-right: 10px solid black;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-flow: column nowrap;
		flex: 1 0 min-content;
		.sidebar-contact-info {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-flow: column nowrap;
			width: 100%;
			margin: 0;
			padding: 1.5rem 0;
			h3 {
				font-family: ${props => props.theme.boldFont};
				font-size: 1.4rem;
				margin: 0;
				padding: 0;
			}
			p {
				font-size: 1.2rem;
				word-wrap: break-word;
				width: 50%;
				margin: 1rem 0 0;
				padding: 0;
			}
		}
	}
	.contact-form--form {
		grid-area: form;
		width: 100%;
		form {
			display: flex;
			flex-flow: column wrap;
			flex: 1 0 auto;
			align-items: flex-start;
			justify-content: center;
			.form--field-wrapper {
				display: flex;
				flex: 1 0 auto;
				flex-flow: column nowrap;
				width: 100%;
				padding: 10px 0;
				label {
					text-align: left;
					text-transform: capitalize;
					span {
						color: red;
						vertical-align: super;
					}
				}
				select,
				input,
				textarea {
					width: 100%;
					max-width: 500px;
					margin: 6px 0 0 0;
					padding: 9px 10px;
					font-size: 1.6rem;
					line-height: 22px;
					color: #33475b;
					background-color: #f5f8fa;
					border: 1px solid #cbd6e2;
					border-radius: 3px;
					&:focus {
						outline: none;
						border-color: rgba(82, 168, 236, 0.8);
					}
				}
				select {
					height: 4rem;
				}
			}
			.form--disclaimer {
				width: 100%;
				max-width: 500px;
				color: #33475b;
				margin-bottom: 3px;
				font-size: 14px;
				line-height: 24px;
			}
		}
	}
`;

class Contact extends Component {
	render() {
		return (
			<StyledContact>
				<div className="contact-form--header">
					<h1>Got a question? Ask us.</h1>
				</div>
				<aside className="contact-form--sidebar">
					<div className="sidebar-contact-info">
						<h3>YellowFolder</h3>
						<p>AddressAddressAddressAddressAddressAddress</p>
					</div>
					<div className="sidebar-contact-info">
						<h3>YellowFolder</h3>
						<p>AddressAddressAddressAddressAddressAddress</p>
					</div>
					<div className="sidebar-contact-info">
						<h3>YellowFolder</h3>
						<p>AddressAddressAddressAddressAddressAddress</p>
					</div>
				</aside>
				<div className="contact-form--form">
					<form>
						<div className="form--field-wrapper">
							<label htmlFor="email">
								Email
								<span>*</span>
							</label>
							<input required id="email" type="email" />
						</div>
						<div className="form--field-wrapper">
							<label htmlFor="first-name">First Name</label>
							<input required id="first-name" type="text" />
						</div>
						<div className="form--field-wrapper">
							<label htmlFor="last-name">Last Name</label>
							<input required id="last-name" type="text" />
						</div>
						<div className="form--field-wrapper">
							<label htmlFor="state">
								State
								<span>*</span>
							</label>
							<select required id="state" name="state">
								<option value disabled selected>
									Please Select
								</option>
								<option value="Texas">Texas</option>
							</select>
						</div>
						<div className="form--field-wrapper">
							<label htmlFor="message">Message</label>
							<textarea id="message" />
						</div>
						<div className="form--disclaimer">
							<p>
								YellowFolder needs the contact information you provide to contact you about our
								products and services. You may unsubscribe from these communications at any time.
								For information on how to unsubscribe, as well as our privacy practices and
								commitment to protecting your privacy, please review our Privacy Policy.
							</p>
						</div>
						<div className="form--submit-wrapper">
							<button className="form--submit-btn" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</StyledContact>
		);
	}
}

export default Contact;
