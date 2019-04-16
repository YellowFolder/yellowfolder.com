import React, { Component } from 'react';
import StyledForm from './styles/FormStyles';

class RecordRequest extends Component {
	state = {
		email: '',
		firstName: '',
		lastName: '',
		state: 'select',
		purpose: 'select',
		message: '',
	};

	onFormFieldChange = e => {
		console.log(e.target);
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	onSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		const { email, firstName, lastName, state, purpose, message } = this.state;

		return (
			<StyledForm>
				<div className="form--header">
					<h1>Record Request Form</h1>
					<p>Please complete the form below and our team will begin searching for your records.</p>
				</div>
				<aside className="form--sidebar">
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
				<div className="form--body">
					<form>
						{' '}
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="email">
								Email
								<span>*</span>
							</label>
							<input
								required
								id="email"
								type="email"
								autoComplete="email"
								value={email}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="firstName">First Name</label>
							<input
								id="firstName"
								type="text"
								autoComplete="given-name"
								value={firstName}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="lastName">Last Name</label>
							<input
								id="lastName"
								type="text"
								autoComplete="family-name"
								value={lastName}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="state">
								State<span>*</span>
							</label>
							<select
								required
								id="state"
								name="state"
								value={state}
								onChange={this.onFormFieldChange}
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
							<label htmlFor="purpose">
								How can we help?<span>*</span>
							</label>
							<select
								required
								id="purpose"
								name="purpose"
								value={purpose}
								onChange={this.onFormFieldChange}
							>
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
							<textarea
								id="message"
								name="message"
								value={message}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--disclaimer form--field-item">
							<p>
								YellowFolder needs the contact information you provide to contact you about our
								products and services. You may unsubscribe from these communications at any time.
								For information on how to unsubscribe, as well as our privacy practices and
								commitment to protecting your privacy, please review our Privacy Policy.
							</p>
						</div>
						<div className="form--submit-wrapper">
							<button className="form--submit-btn" type="submit" onClick={this.onSubmit}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</StyledForm>
		);
	}
}

export default RecordRequest;
