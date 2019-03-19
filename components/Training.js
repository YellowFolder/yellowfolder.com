import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import trainingSessions from '../lib/trainingSchedule';

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
			padding-bottom: 4rem;
			max-width: 1200px;

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
			width: 100%;
			max-width: ${props => props.theme.maxWidth};

			table.list {
				width: 100%;
				border-collapse: collapse;
				text-align: left;
				overflow: hidden;

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
					<table className='list'>
						<tbody>
						{ trainingSessions.map(s => {
							return (
								<tr key={s.registrationLink}>
									<td>{s.title}</td>
									<td>{s.day}</td>
									<td>{s.time}</td>
									<td>
										<Link href={s.registrationLink}>
											<a target="_blank" rel="noopener noreferrer">
												<button>
												<span>Register</span>
												</button>
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
