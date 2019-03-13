import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
	width: 100%;
	height: auto;
	margin: 0 auto;
	padding: 60px 6.25% 30px 3.125%;
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
`;

class Contact extends Component {
	render() {
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
							(844) 935-5684 <br />
							sales@yellowfolder.com
						</p>
					</div>
					<div className="sidebar-contact-info">
						<h3>Support</h3>
						<p>
							(844) 935-5699 <br />
							support@yellowfolder.com
						</p>
					</div>
				</aside>
				<div className="contact-form--form">
					<form role="form">
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
								State<span>*</span>
							</label>
							<select required id="state" name="state">
								<option value disabled selected>
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
						<div className="form--field-wrapper">
							<label htmlFor="purpose">
								How can we help?<span>*</span>
							</label>
							<select required id="purpose" name="purpose">
								<option value disabled selected>
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
						<div className="form--field-wrapper">
							<label htmlFor="message">Message</label>
							<textarea id="message" name="message" />
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
