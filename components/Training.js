import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
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
					tr#rowgap {
						display: none;
					}
					td {
						position: relative;
						display: block;
						padding-left: 110px;
						border: none;
						font-size: 1.7rem;
						text-align: right;
						&:nth-child(1),
						&:nth-child(2) {
							width: initial;
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
					tr {
						padding: 10px 0;
						display: block;
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

const baseURL = 'https://sfapi.formstack.io';
const formRoute = '/FormEngine/EngineFrame/UploadFile';

const mappedFields = {
	fullName: 'Case.Requestor_Name__c',
	email: 'Case.Requestor_Email__c',
	district: 'Case.Requestor_District__c',
	recordSeries: 'Case.Record_Series__c',
	trainingDate1: 'Case.Training_Date_Time_1__c',
	trainingDate2: 'Case.Training_Date_Time_2__c',
	trainingDate3: 'Case.Training_Date_Time_3__c',
	trainingSession: 'Case.Training_Session__c',
};

const defaultFormValues = {
	'Case.Origin': 'Web',
	'Case.RecordTypeId': '012F0000000yHfAIAU',
	'inputCase.RecordTypeId': 'Training',
	'Case.Subject': 'Training Session Requested',
	formName: 'Training',
};

const Training = () => {
	const [contact, setContact] = useState({
		fullName: '',
		email: '',
		district: '',
		recordSeries: '',
		trainingDate1: '',
		trainingDate2: '',
		trainingDate3: '',
		trainingSession: '',
		honeypot: '',
		subject: 'Training Form Submission',
	});

	const [startDate1, setStartDate1] = useState(new Date());
	const [startDate2, setStartDate2] = useState(new Date());
	const [startDate3, setStartDate3] = useState(new Date());

	const onFormFieldChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const mappedState = { ...defaultFormValues };
		for (const c in contact) {
			mappedState[mappedFields[c]] = contact[c];
		}
		console.log(`mappedState `, mappedState);

		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
		};

		const config = {
			method: 'post',
			baseURL,
			url: formRoute,
			headers,
			data: qs.stringify(mappedState),
			params: {
				encoding: 'UTF-8',
			},
		};

		return axios(config).then(resp => {
			console.log('got response!');
			console.log(resp);
		});
	};

	const handleClick = e => {
		e.preventDefault();
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	return (
		<StyledTraining>
			<div className="training-list--header">
				<h2>Weekly Training Session Offerings</h2>
				<p>
					Signing up for our weekly training webinars just got easier and more convenient for you.
					Simply determine which topic you need additional training on and click the link to provide
					us with the most convenient times for us to schedule a session with you. Most webinar
					trainings only last around 15 minutes, however the OVERALL section can take up to 45
					minutes.
				</p>
			</div>
			<div className="training-list--body">
				<div className="courses">
					{trainingSessions.map(section => {
						return (
							<div key={section.section} className="section">
								<h3>{section.section}</h3>
								{section.description && <p className="description">{section.description}</p>}
								<table className="list">
									<tbody>
										{section.classes.map(i => {
											return (
												<tr key={i.title}>
													<td aria-label="Course">{i.title}</td>
													<td id="registrationLink" aria-label="Register">
														<button name="trainingSession" value={i.title} onClick={handleClick}>
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
				<div className="form--header">
					<h3>Register for Training</h3>
				</div>
				<div className="form--body">
					<form onSubmit={handleSubmit} encType="multipart/form-data">
						{' '}
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="fullName">
								Full Name
								<span>*</span>
							</label>
							<input
								required
								aria-required="true"
								type="text"
								aria-label="Full Name"
								id="fullName"
								name="fullName"
								autoComplete="name"
								value={contact.fullName}
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
							<label htmlFor="recordSeries">Record Series</label>
							<select
								required
								id="recordSeries"
								name="recordSeries"
								aria-label="Record Series"
								aria-required="true"
								title="Record Series"
								value={contact.recordSeries}
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							>
								<option value="" disabled>
									Please Select
								</option>
								<option value="Student Records">Student Records</option>
								<option value="Special Education Records">Special Education Records</option>
								<option value="Human Resource Records">Human Resource Records</option>
								<option value="Administrative Records">Administrative Records</option>
							</select>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="trainingSession1">Training Date/Time 1</label>
							<DatePicker
								selected={startDate1}
								onChange={date => setStartDate1(date)}
								showTimeSelect
								timeCaption="time"
								timeIntervals={15}
								locale="en-US"
								dateFormat="MMMM d, yyyy h:mm a"
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="trainingSession2">Training Date/Time 2</label>
							<DatePicker
								selected={startDate2}
								onChange={date => setStartDate2(date)}
								showTimeSelect
								timeCaption="time"
								timeIntervals={15}
								locale="en-GB"
								dateFormat="MMMM d, yyyy h:mm a"
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="trainingSession3">Training Date/Time 3</label>
							<DatePicker
								selected={startDate3}
								onChange={date => setStartDate3(date)}
								showTimeSelect
								timeCaption="time"
								timeIntervals={15}
								locale="en-US"
								dateFormat="MMMM d, yyyy h:mm a"
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="recordSeries">Training Session</label>
							<select
								required
								id="trainingSession"
								name="trainingSession"
								aria-label="Training Session"
								aria-required="true"
								title="Training Session"
								value={contact.trainingSession}
								onBlur={onFormFieldChange}
								onChange={onFormFieldChange}
							>
								<option value="" disabled>
									Please Select
								</option>
								{trainingSessions.map(section => {
									return section.classes.map(item => {
										return <option value={item.title}>{item.title}</option>;
									});
								})}
							</select>
						</div>
						<div className="form--submit-wrapper">
							<button className="form--submit-btn" type="submit" onClick={handleSubmit}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</StyledForm>
		</StyledTraining>
	);
};

export default Training;
