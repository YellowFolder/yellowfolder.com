import React, { useState } from 'react';
import styled from 'styled-components';
import { size } from './styles/device';

const ACCESS_KEY_PROD = 'e20b50ff-c9c2-4198-b148-b2ebd61763f3';
const ACCESS_KEY_DEV = '427e0763-715a-488d-b159-140d5a32ca6f';

const StyledDemo = styled.div`
	width: 100%;
	height: auto;
	margin: 0 auto;
	padding: 0;
	background: ${props => props.theme.white};
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;

	.demo--header {
		width: 100% !important;
		margin: 60px auto 0;
		padding: 25px;
		background-color: ${props => props.theme.lightgrey};
		color: ${props => props.theme.grey};

		.header-copy {
			width: 80%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			h1 {
				margin: 0 auto;
				font-size: 5.4rem;
				line-height: 5.4rem;
			}
		}
	}

	.demo--container {
		max-width: ${props => props.theme.maxWidth};
		height: auto;
		width: 80%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-flow: column nowrap;
		.body {
			flex: 2 0 auto;
			/* background: red; */
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			flex-flow: column nowrap;
			margin: 0 auto;

			img {
				padding: 50px 0 25px;
				width: 80%;
				margin: 0 auto;
				justify-self: center;
			}

			.video-container {
				width: 100%;
				height: 100%;
				position: relative;
				padding: 25px 0;

				iframe {
					/* position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%; */
				}
			}
		}
		.demo-form--form {
			width: 100%;
			height: 100%;
			flex: 1 0 auto;
			display: flex;
			flex-flow: row nowrap;
			align-items: flex-start;
			justify-content: center;
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
						font-weight: bold;
						/* text-transform: capitalize; */
						span {
							color: red;
						}
					}
					ul {
						list-style: none;
						margin: 0;
						padding: 0;
						li {
							label {
								text-transform: none;
								input {
									width: auto;
								}
							}
							span {
								color: currentColor;
								margin-left: 4px;
								font-weight: bold;
							}
						}
					}
					select,
					input,
					textarea {
						width: 100%;
						max-width: 640px;
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
					max-width: 640px;
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
	}

	@media (max-width: ${size.navMenu}) {
		.contact-form {
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
		}
	}
	@media (max-width: ${size.mobileL}) {
		.demo-form {
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
		}
	}
	@media (max-width: ${size.mobileM}) {
		padding-top: 30px;
	}
`;

const Demo = () => {
	const [contact, setContact] = useState({
		email: '',
		'$First Name': '',
		'$Last Name': '',
		$District: '',
		$State: 'select',
		honeypot: '',
		subject: 'Demo Request Form Submission',
		'$Document Storage Issue': '',
		'$Document Storage Budget': '',
		accessKey: ACCESS_KEY_DEV,
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
		<StyledDemo>
			<div className="demo--header">
				<div className="header-copy">
					<h1>See YellowFolder in Action — Schedule a Demo</h1>
				</div>
			</div>

			<div className="demo--container">
				<div className="body">
					<div className="demo-image">
						<img src="/static/images/demo.webp" />
					</div>
					<div className="body-copy">
						<h3>Learn how to easily store and manage files without the hassle of paper</h3>
						<div>
							<p>
								Paper records are the traditional K-12 solution,
								<span>
									but paper takes time, money, and effort from more important things on everyone’s
									plate.
								</span>{' '}
								YellowFolder’s cloud-based filing system will make your record management life
								easier, more streamlined, and far less stressful.
							</p>
							<p>
								By scheduling a free demo, we will walk through exactly how we can change all of
								your current document management processes for the better. We’ll even go into detail
								about how the platform can apply to your specific department, district, or general
								situation.
							</p>
							<p>You can learn more about YellowFolder by watching the video below:</p>
						</div>
					</div>
					<div className="video-container">
						<iframe
							width="100%"
							height="434px"
							src="https://www.youtube.com/embed/gBqr0GX9mhQ"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
				<div className="demo-form--form">
					<form
						action="https://api.staticforms.xyz/submit"
						method="post"
						id="staticform"
						onSubmit={handleSubmit}
					>
						<input type="hidden" name="subject" value="Demo Request Form" />{' '}
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
							<label htmlFor="district">
								District or School Name<span>*</span>
							</label>
							<input required id="district" name="$District" onChange={onFormFieldChange} />
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="state">
								State<span>*</span>
							</label>
							<select
								required
								id="state"
								defaultValue={contact['$State'] || 'select'}
								name="$State"
								onChange={onFormFieldChange}
							>
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
							<label htmlFor="documentIssue">
								Is there a document storage issue in your district/school?
							</label>
							<div className="control">
								<ul role="checkbox">
									<li>
										<label className="radio-abel">
											<input
												type="radio"
												value="Yes"
												name="$Document Storage Issue"
												onChange={onFormFieldChange}
											/>
											<span>Yes</span>
										</label>
									</li>
									<li>
										<label className="radio-abel">
											<input type="radio" value="No" name="$Document Storage Issue" />
											<span>No</span>
										</label>
									</li>
								</ul>
							</div>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="documentIssue">
								Has a document storage solution been budgeted for?
							</label>
							<div className="control">
								<ul role="checkbox">
									<li>
										<label className="radio-label">
											<input
												type="radio"
												value="Yes"
												name="$Document Storage Budget"
												onChange={onFormFieldChange}
											/>
											<span>Yes</span>
										</label>
									</li>
									<li>
										<label className="radio-label">
											<input type="radio" value="No" name="$Document Storage Budget" />
											<span>No</span>
										</label>
									</li>
								</ul>
							</div>
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
								products and services. You may unsubscribe from these communications at any time.
								For information on how to unsubscribe, as well as our privacy practices and
								commitment to protecting your privacy, please review our Privacy Policy.
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
			</div>
		</StyledDemo>
	);
};

export default Demo;
