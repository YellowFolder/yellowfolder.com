import Router from 'next/router';
import qs from 'qs';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import unirest from 'unirest';
import trainingSessions from '../lib/trainingSchedule';
import { size } from './styles/device';

const StyledForm = styled.div`
	width: 100%;
	height: auto;
	margin: 0 auto;
	padding: 60px 6.25% 0px 3.125%;
	max-width: ${props => props.theme.maxWidth};
	background: ${props => props.theme.white};
	display: flex;
	align-items: center;
	justify-content: center;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr auto;
	grid-gap: 40px;
	grid-template-areas:
		'header header header'
		'form form form'
		'form form form';

	.form--header {
		grid-area: header;
		h3 {
			font-size: 3.4rem;
			line-height: 34px;
			font-family: ${props => props.theme.boldFont};
			font-weight: 700;
			margin: 1rem 0 0 0;
		}
		p {
			font-size: 2rem;
			line-height: 24px;
			color: ${props => props.theme.grey};
			font-weight: 400;
			padding: 0;
			margin: 0;
			@media (min-width: ${size.navMenu}) {
				padding-top: 1rem;
			}
		}
	}
	.form--body {
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
						/* border: 1px solid #7ce882; */
						/* background-color: #fff; */
					}
				}
				select {
					height: 4rem;
					text-transform: capitalize;
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
		grid-template-areas: 'header header header' 'form form form' 'form form form';
		grid-gap: 15px 0;
		.form {
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
			&--body {
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
	@media (max-width: 550px) {
		.form {
			&--header {
				h1 {
					font-size: calc(56px + (72 - 56) * ((100vw - 800px) / (1000 - 400)));
				}
			}
		}
	}
	@media (max-width: ${size.mobileL}) {
		.form {
			&--header {
				width: 96%;
				h1 {
					font-size: calc(46px + (58 - 42) * ((100vw - 400px) / (1000 - 300)));
					line-height: 120%;
					margin: 0;
				}
			}
			&--body {
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
		.form {
			&--header {
				h1 {
					font-size: calc(42px + (58 - 42) * ((100vw - 400px) / (1000 - 300)));
				}
			}
		}
	}
`;

const StyledTraining = styled.main`
	width: 100%;
	height: 100%;
	max-width: ${props => props.theme.maxWidth};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	padding-bottom: 50px;
	margin: 0 auto;

	.training-list {
		&--header {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-flow: column nowrap;
			padding-bottom: 2rem;
			max-width: 1200px;
			margin-left: 2.5%;

			h2 {
				font-family: ${props => props.theme.boldFont};
				font-size: 5.4rem;
				line-height: 100%;
				color: ${props => props.theme.grey};
				padding: 0;
				margin: 4rem 0 0rem;
				text-transform: capitalize;
			}
			p {
				font-size: 20px;
				line-height: 120%;
				padding: 0;
				color: ${props => props.theme.grey};
				width: 80%;
			}
		}
		&--body {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-flow: column nowrap;
			width: 100%;
			max-width: ${props => props.theme.maxWidth};
			padding: 0 2.5%;

			.list-intro {
				padding: 0;
				max-width: 1200px;
				width: 80%;
				margin: 0;
				align-self: flex-start;
				p {
					font-size: 20px;
					line-height: 120%;
					color: ${props => props.theme.grey};
				}
			}

			.courses {
				display: flex;
				flex-flow: column nowrap;
				width: 100%;
				align-items: flex-start;
				justify-content: flex-start;

				.section {
					width: 100%;
					h3 {
						font-size: 2.4rem;
						font-family: ${props => props.theme.boldFont};
						line-height: 2.4rem;
						padding: 15px 0 0;
					}
					.description {
						font-size: 2rem;
						padding: 0;
						margin: 0 0 10px;
						line-height: 1.42;
					}
					table {
						tr {
							td {
								:nth-child(1) {
									width: 75%;
								}
								:nth-child(2) {
									width: 25%;
								}
							}
						}
					}
				}
			}

			table.list {
				width: 100%;
				border-collapse: collapse;
				text-align: left;
				overflow: hidden;

				tr#rowgap td {
					padding: 2rem 0;
				}

				td {
					border: 2px solid ${props => props.theme.lightgrey};
					padding: 10px;
					border-left: none;
					border-right: none;
					text-transform: capitalize;
					:nth-child(3) {
						text-transform: uppercase;
					}

					button {
						padding: 4px 12px;
						background-color: ${props => props.theme.red};
						color: #fff;
						text-align: center;
						outline: none;
						border: none;
						font-size: 1.3rem;
						font-weight: 500;
						width: auto;
						&:active {
							outline: none;
							border: none;
						}
						&:hover {
							text-decoration: underline;
							cursor: pointer;
							color: ${props => props.theme.grey};
							background-color: ${props => props.theme.yellow};
						}
					}
				}
				tr:nth-of-type(odd) td {
					background-color: #f9f9f9;
				}
			}

			@media (max-width: 650px) {
				td#registrationLink:before {
					display: none;
				}
				table.list {
					display: block;
					tbody {
						display: block;
						tr {
							padding: 10px 0;
							display: block;
							&#rowgap {
								display: none;
							}
							td {
								position: relative;
								display: block;
								padding-left: 110px;
								border: none;
								font-size: 1.7rem;
								text-align: right;
								:nth-child(1),
								:nth-child(2) {
									width: 100% !important;
								}
								&:before {
									position: absolute;
									left: 10px;
									display: block;
									text-transform: capitalize;
									font-family: ${props => props.theme.boldFont};
									content: attr(aria-label) ': ';
								}
								&#registrationLink {
									a {
										button {
											margin-top: 6px;
											padding: 0.7rem 2rem;
											font-size: 1.7rem;
											border-radius: 3px;
										}
									}
								}
							}
						}
					}
				}
			}
		}

		@media (max-width: ${size.mobileL}) {
			&--header {
				padding-bottom: 2rem;
				h2 {
					font-size: calc(54px + (72 - 54) * ((100vw - 600px) / (1000 - 600)));
					line-height: 110%;
				}
				p {
					font-size: calc(20px + (22 - 20) * ((100vw - 500px) / (1000 - 350)));
					padding: 0;
					width: 100%;
				}
			}
			&--body {
				.list-intro {
					width: 100%;
				}
			}
		}
	}
`;

const convertDate = date => {
	let ten = i => {
		return (i < 10 ? '0' : '') + i;
	};
	let year = date.getFullYear();
	let month = ten(date.getMonth() + 1);
	let day = ten(date.getDate());
	let hour = ten(date.getHours());
	let minute = ten(date.getMinutes());
	return year + '-' + month + '-' + day + 'T' + hour + ':' + minute;
};

const Training = () => {
	const formRef = useRef(null);

	const scrollToBottom = () => {
		formRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	let now = convertDate(new Date());

	const [contact, setContact] = useState({
		email: '',
		name: '',
		district: '',
		type: 'PNE Training Recommended',
		recordSeries: 'None',
		trainingDate1: now,
		trainingDate2: now,
		trainingDate3: now,
		trainingSession: 'select',
		subject: 'Training Form Submission',
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

		let description = {
			'Training Session': `${contact.trainingSession}\n`,
			'Training Date 1': `${new Date(contact.trainingDate1).toLocaleString(
				'en-US'
			)}\n`,
			'Training Date 2': `${new Date(contact.trainingDate2).toLocaleString(
				'en-US'
			)}\n`,
			'Training Date 3': `${new Date(contact.trainingDate3).toLocaleString(
				'en-US'
			)}\n`,
		};

		const fields = {
			email: contact.email,
			name: contact.name,
			type: 'PNE Training Recommended',
			subject: `Training Requested by ${contact.name} at ${contact.district} - ${contact.trainingSession}`,
			priority: 2,
			status: 2,
			source: 2,
			group_id: 48000495297, // PNEs
			responder_id: null,
			email_config_id: 48000068881,
			custom_fields: {
				cf_district: `${contact.district}`,
				cf_billable: false,
				cf_record_series1: `${contact.recordSeries}`,
				cf_hours_spent: null,
			},
			description: qs.stringify(description, {
				encode: false,
				delimiter: '\n<br/><br/>\n',
			}),
		};

		try {
			const response = await fetch('/api/freshdesk/tickets', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(fields),
			});

			const data = await response.json();

			if (!response.ok) {
				setResponse({
					type: 'error',
					message: data.message || 'An error occurred',
				});
			} else {
				setResponse({
					type: 'success',
					message: 'Your request has been submitted.',
				});
				return Router.push('/request-success');
			}
		} catch (error) {
			setResponse({
				type: 'error',
				message: error.message,
			});
		}
	};

	const handleClick = e => {
		e.preventDefault();
		setContact({ ...contact, trainingSession: e.target.value });
		scrollToBottom();
	};

	return (
		<StyledTraining>
			<div className="training-list--header">
				<h2>Weekly Training Session Offerings</h2>
				<p>
					Signing up for our weekly training webinars just got easier and more
					convenient for you. Simply determine which topic you need additional
					training on and click the link to provide us with the most convenient
					times for us to schedule a session with you. Most webinar trainings
					only last around 15 minutes, however the OVERALL section can take up
					to 45 minutes.
				</p>
			</div>
			<div className="training-list--body">
				<div className="courses">
					{trainingSessions.map(section => {
						return (
							<div key={section.section} className="section">
								<h3>{section.section}</h3>
								{section.description && (
									<p className="description">{section.description}</p>
								)}
								<table className="list">
									<tbody>
										{section.classes.map(i => {
											return (
												<tr key={i.title}>
													<td aria-label="Course">{i.title}</td>
													<td id="registrationLink" aria-label="Register">
														<button
															name="trainingSession"
															value={i.title}
															onClick={handleClick}
														>
															Register
														</button>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						);
					})}
				</div>
			</div>
			<StyledForm>
				<div className="form--header" ref={formRef}>
					<h3>Register for Training</h3>
				</div>
				<div className="form--body">
					<form onSubmit={handleSubmit}>
						{' '}
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="name">
								Name
								<span>*</span>
							</label>
							<input
								required
								aria-required="true"
								type="text"
								aria-label="Name"
								id="name"
								name="name"
								autoComplete="name"
								value={contact.name}
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="email">
								Email
								<span>*</span>
							</label>
							<input
								required
								aria-required="true"
								type="email"
								aria-label="Email"
								id="email"
								name="email"
								autoComplete="email"
								value={contact.email}
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="district">
								District
								<span>*</span>
							</label>
							<input
								required
								aria-required="true"
								type="text"
								aria-label="Full Name"
								id="district"
								name="district"
								value={contact.district}
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="recordSeries">
								Record Series
								<span>*</span>
							</label>
							<select
								required
								id="recordSeries"
								name="recordSeries"
								aria-label="Record Series"
								aria-required="true"
								title="Record Series"
								defaultValue={contact.recordSeries || 'None'}
								value={contact.recordSeries}
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							>
								<option value="None" disabled>
									Please Select
								</option>
								<option value="Student Records">Student Records</option>
								<option value="Special Education Records">
									Special Education Records
								</option>
								<option value="Human Resource Records">
									Human Resource Records
								</option>
								<option value="Administrative Records">
									Administrative Records
								</option>
							</select>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="trainingDate1">Training Date/Time 1</label>
							<input
								type="datetime-local"
								id="trainingDate1"
								name="trainingDate1"
								value={contact.trainingDate1}
								title="Training Date/Time 1"
								aria-label="Training Date/Time 1"
								aria-required="true"
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="trainingDate2">Training Date/Time 2</label>
							<input
								type="datetime-local"
								id="trainingDate2"
								name="trainingDate2"
								value={contact.trainingDate2}
								title="Training Date/Time 2"
								aria-label="Training Date/Time 2"
								aria-required="true"
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="trainingDate3">Training Date/Time 3</label>
							<input
								type="datetime-local"
								id="trainingDate3"
								name="trainingDate3"
								value={contact.trainingDate3}
								title="Training Date/Time 3"
								aria-label="Training Date/Time 3"
								aria-required="true"
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="trainingSession">Training Session</label>
							<select
								required
								id="trainingSession"
								name="trainingSession"
								aria-label="Training Session"
								aria-required="true"
								title="Training Session"
								defaultValue={contact.trainingSession || 'select'}
								value={contact.trainingSession}
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							>
								<option value="" disabled>
									Please Select
								</option>
								{trainingSessions.map(section => {
									return section.classes.map((item, i) => {
										return (
											<option key={i} value={item.title}>
												{item.title}
											</option>
										);
									});
								})}
							</select>
						</div>
						<div className="form--submit-wrapper">
							<button
								className="form--submit-btn"
								type="submit"
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</StyledForm>
			<div
				className={
					response.type === 'error'
						? 'title box notification is-danger'
						: 'is-hidden'
				}
			>
				<p>{response.message}</p>
			</div>
		</StyledTraining>
	);
};

export default Training;
