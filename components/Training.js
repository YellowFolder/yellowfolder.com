import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import trainingSessions from '../lib/trainingSchedule';
import { size } from './styles/device';

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

						&:before {
							position: absolute;
							left: 10px;
							display: block;
							text-transform: capitalize;
							font-family: ${props => props.theme.boldFont};
							content: attr(aria-label) ": ";
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

export class Training extends Component {
	render() {
		return (
			<StyledTraining>
				<div className='training-list--header'>
					<h2>Weekly Training Session Offerings</h2>
					<p>Signing up for our training webinars is easy! Just pick the subject, day and time. Click the register button, and you'll be taken to our registration form.</p>
				</div>
				<div className='training-list--body'>
					<div className='list-intro'>
						<p>Not a YellowFolder customer yet, but considering joining the Paperless Revolution? Register for this session and learn why YellowFolder is Education's Online File Cabinet.</p>
					</div>
					<table className='list'>
						<tbody>
						<tr id='intro-course'>
							<td aria-label="Course">Why YellowFolder?</td>
							<td aria-label="Day">Tuesday</td>
							<td aria-label="Time">12:30 - 1:00 pm</td>
							<td id="registrationLink" aria-label="Register">
								<Link href='https://register.gotowebinar.com/rt/3879402874948216322'>
									<a target="_blank" rel="noopener noreferrer">
										<button>Register</button>
									</a>
								</Link>
							</td>
						</tr>
						<tr id='rowgap'><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
						{ trainingSessions.map(s => {
							return (
								<tr key={s.registrationLink}>
									<td aria-label="Course">{s.title}</td>
									<td aria-label="Day">{s.day}</td>
									<td aria-label="Time">{s.time}</td>
									<td id='registrationLink' aria-label="Register">
										<Link href={s.registrationLink}>
											<a target="_blank" rel="noopener noreferrer">
												<button>Register</button>
											</a>
										</Link>
									</td>
								</tr>
							);
						})}
						</tbody>
					</table>
				</div>
			</StyledTraining>
		)
	}
}

export default Training
