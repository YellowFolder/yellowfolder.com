import React, { useState } from 'react';
import styled from 'styled-components';
import { size } from './styles/device';

const ACCESS_KEY_PROD = 'e20b50ff-c9c2-4198-b148-b2ebd61763f3';

const StyledContact = styled.div`
	width: 100%;
	height: auto;
	margin: 0 auto;
	padding: 60px 6.25% 0px 3.125%;
	max-width: ${props => props.theme.maxWidth};
	background: ${props => props.theme.white};
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr auto;
	grid-gap: 40px;
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
			a {
				color: ${props => props.theme.gray};
				&[href^='mailto:']:hover {
					text-decoration: underline;
				}
			}
			h3 {
				font-family: ${props => props.theme.boldFont};
				font-size: 1.4rem;
				margin: 0;
				padding: 0;
			}
			p {
				font-size: 1.2rem;
				line-height: 14px;
				margin: 0.25rem 0 0;
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
						background-color: #fff;
					}
				}
				textarea,
				input {
					&:not(:empty):valid,
					&:not(:empty):optional {
					}
				}
				select {
					height: 4rem;
				}
				textarea {
					height: 100px;
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
			.form--submit-wrapper {
				.form--submit-btn {
					background-color: ${props => props.theme.yellow};
					border-color: ${props => props.theme.yellow};
					font-family: ${props => props.theme.boldFont};
					font-weight: 700;
					color: #fff;
					text-align: center;
					line-height: 12px;
					font-size: 1.4rem;
					padding: 12px 24px;
					margin: 0;
					border-radius: 3px;
					border-style: solid;
					border-width: 1px;
					cursor: pointer;
					outline: none;
					&:active {
						outline: none;
					}
				}
			}
		}
	}
	.is-hidden {
		display: none !important;
	}
	.box {
		background-color: #fff;
		border-radius: 6px;
		box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
		color: #4a4a4a;
		display: block;
		padding: 1.25rem;
	}
	.notification {
		background-color: #f5f5f5;
		border-radius: 4px;
		padding: 1.25rem 2.5rem 1.25rem 1.5rem;
		position: relative;
		padding: 1rem;
		transform: translateY(-20%);
		opacity: 0;
		transition: all 0.5s;
		&.title {
			color: currentColor;
		}
		&.is-success {
			background-color: #209cee;
			color: #fff;
			transform: translateY(0);
			opacity: 1;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin: 2rem auto;
		}
		&.is-danger {
			background-color: #ff3860;
			color: #fff;
		}
	}
	@media (max-width: ${size.navMenu}) {
		grid-template-areas: 'header header header' 'form form form' 'sidebar sidebar sidebar';
		grid-gap: 15px 0;
		.contact-form {
			&--header {
				width: 80%;
				margin: 0 auto;
				h1 {
					/* line-height: calc(64px + (64 - 58) * ((100vw - 800px) / (1000 - 400))); */
					line-height: 120%;
					font-size: calc(60px + (72 - 60) * ((100vw - 800px) / (1000 - 400)));
					margin: 0 0 2rem 0;
				}
			}
			&--form {
				form {
					width: 100%;
					margin: 0 auto;
					align-items: center;
					.form {
						&--field-item {
							align-items: flex-start;
							align-self: flex-start;
						}
						&--field-wrapper {
							width: 80%;
							margin: 0 auto;
						}
						&--disclaimer {
							align-self: center;
							max-width: none;
							width: 80%;
						}
						&--submit-wrapper {
							display: flex;
							align-items: center;
							width: 100%;
							justify-content: center;
							padding: 4rem 0 0 0;
							.form--submit-btn {
								width: 80%;
								font-size: 2.2rem;
								padding: 16px 24px;
								margin: 0 auto;
								border-radius: 6px;
							}
						}
					}
				}
			}
			&--sidebar {
				flex-flow: column nowrap;
				align-items: center;
				flex-flow: column nowrap;
				.sidebar-contact-info {
					align-items: center;
					text-align: center;
					:nth-child(3) {
						padding-bottom: 4rem;
					}
				}
			}
		}
	}
	@media (max-width: 550px) {
		.contact-form {
			&--header {
				h1 {
					font-size: calc(56px + (72 - 56) * ((100vw - 800px) / (1000 - 400)));
				}
			}
		}
	}
	@media (max-width: ${size.mobileL}) {
		.contact-form {
			&--header {
				width: 96%;
				h1 {
					font-size: calc(46px + (58 - 42) * ((100vw - 400px) / (1000 - 300)));
					line-height: 120%;
					margin: 0;
				}
			}
			&--form {
				form {
					.form {
						&--field-item {
							width: 96%;
							align-items: flex-start;
							align-self: flex-start;
						}
						&--field-wrapper {
						}
						&--disclaimer {
							margin: 0 2% 3px;
						}
						&--submit-wrapper {
						}
					}
					.form-field--wrapper {
						width: 96%;
					}
				}
			}
			&--sidebar {
				padding-top: 4rem;
				border-bottom: 5px solid ${props => props.theme.grey};
				.sidebar-contact-info {
					flex-flow: column nowrap;
					h3,
					p {
						text-align: center;
					}
				}
			}
		}
	}
	@media (max-width: ${size.mobileM}) {
		padding-top: 30px;
		.contact-form {
			&--header {
				h1 {
					font-size: calc(42px + (58 - 42) * ((100vw - 400px) / (1000 - 300)));
				}
			}
		}
	}
`;

const ContactForm = () => {
	const [contact, setContact] = useState({
		email: '',
		'$First Name': '',
		'$Last Name': '',
		$State: 'select',
		'$How can we help?': 'select',
		message: '',
		honeypot: '',
		subject: 'Contact Form Submission',
		accessKey: '427e0763-715a-488d-b159-140d5a32ca6f',
	});

	const [response, setResponse] = useState({
		type: '',
		message: '',
	});

	const onFormFieldChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await fetch('https://api.staticforms.xyz/submit', {
				method: 'POST',
				body: JSON.stringify(contact),
				headers: { 'Content-Type': 'application/json' },
			});

			const json = await res.json();

			if (json.success) {
				setResponse({
					type: 'success',
					message: 'Your email has been successfully delivered. Thank you for reaching out to us.',
				});
			} else {
				setResponse({
					type: 'error',
					message: json.message,
				});
			}
		} catch (e) {
			console.log('An error occurred ', e);
			setResponse({
				type: 'error',
				message: 'An error occured while submitting the form. Please try again.',
			});
		}
	};

	return (
		<StyledContact>
			<div className="contact-form--header">
				<h1>Got a question? Get in touch.</h1>
			</div>
			<aside className="contact-form--sidebar">
				<div className="sidebar-contact-info">
					<h3>YellowFolder</h3>
					<p>
						1617 W Crosby Rd., Ste 100 <br />
						Carrollton, TX 75006
					</p>
				</div>
				<div className="sidebar-contact-info">
					<h3>Sales</h3>
					<p>
						<span itemProp="telephone">
							<a href="tel:+1-844-935-5684">(844) 935-5684</a>
						</span>
						<br />
						<a href="mailto:sales@yellowfolder.com" itemProp="email">
							sales@yellowfolder.com
						</a>
					</p>
				</div>
				<div className="sidebar-contact-info">
					<h3>Support</h3>
					<p>
						<span itemProp="telephone">
							<a href="tel:+1-844-935-5699">(844) 935-5699</a>
						</span>
						<br />
						<a href="mailto:support@yellowfolder.com" itemProp="email">
							support@yellowfolder.com
						</a>
					</p>
				</div>
			</aside>
			<div className="contact-form--form">
				<form
					action="https://api.staticforms.xyz/submit"
					method="post"
					id="staticform"
					onSubmit={handleSubmit}
				>
					<input type="hidden" name="subject" value="Contact Form" />{' '}
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="email">
							Email
							<span>*</span>
						</label>
						<input
							required
							id="email"
							type="email"
							name="email"
							autoComplete="email"
							onChange={onFormFieldChange}
						/>
					</div>
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="firstName">First Name</label>
						<input
							id="firstName"
							type="text"
							autoComplete="given-name"
							name="$First Name"
							onChange={onFormFieldChange}
						/>
					</div>
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="lastName">Last Name</label>
						<input
							id="lastName"
							name="$Last Name"
							type="text"
							autoComplete="family-name"
							onChange={onFormFieldChange}
						/>
					</div>
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="state">
							State<span>*</span>
						</label>
						<select required id="state" name="$State" onChange={onFormFieldChange}>
							<option value="select" disabled>
								Please Select
							</option>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>
					</div>
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="purpose">
							How can we help?<span>*</span>
						</label>
						<select required id="purpose" name="$How can we help?" onChange={onFormFieldChange}>
							<option value="select" disabled>
								Please Select
							</option>
							<option value="I am interested in using YellowFolder at my school">
								I am interested in using YellowFolder at my school
							</option>
							<option value="I recieved an email or call and am interested to learn more">
								I recieved an email or call and am interested to learn more
							</option>
							<option value="I am a current customer and need assistance">
								I am a current customer and need assistance
							</option>
							<option value="I am interested in working for YellowFolder">
								I am interested in working for YellowFolder
							</option>
							<option value="I would like to partner with YellowFolder">
								I would like to partner with YellowFolder
							</option>
							<option value="Something else">Something else</option>
						</select>
					</div>
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="message">Message</label>
						<textarea id="message" name="message" onChange={onFormFieldChange} />
					</div>
					<div className="field" style={{ display: 'none' }}>
						<label className="label">Title</label>
						<div className="control">
							<input
								type="text"
								name="honeypot"
								style={{ display: 'none' }}
								onChange={onFormFieldChange}
							/>
						</div>
					</div>
					<div className="form--disclaimer form--field-item">
						<p>
							YellowFolder needs the contact information you provide to contact you about our
							products and services. You may unsubscribe from these communications at any time. For
							information on how to unsubscribe, as well as our privacy practices and commitment to
							protecting your privacy, please review our Privacy Policy.
						</p>
					</div>
					<div className="control form--submit-wrapper">
						<button className="form--submit-btn" type="submit">
							Submit
						</button>
					</div>
				</form>
				<div
					className={
						response.type === 'success' ? 'title box notification is-success' : 'is-hidden'
					}
				>
					<p>{response.message}</p>
				</div>
				<div
					className={response.type === 'error' ? 'title box notification is-danger' : 'is-hidden'}
				>
					<p>{response.message}</p>
				</div>
			</div>
		</StyledContact>
	);
};

export default ContactForm;
