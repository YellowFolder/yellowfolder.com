import axios from 'axios';
import Router from 'next/router';
import qs from 'qs';
import React, { Component } from 'react';
import StyledForm from './styles/FormStyles';

const baseURL = 'https://webto.salesforce.com';
const formRoute = '/servlet/servlet.WebToCase';

const mappedFields = {
	district: '00N2I00000DLpvY',
	name: '00N2I00000DLpvT',
	email: '00N2I00000DWnY3',
	phone: '00N2I00000DWnY8',
	recordSeries: '00NF0000008rQ8F',
	targetName: '00N2I00000DLpgJ',
	targetAlias: '00N2I00000DLpgO',
	targetDOB: '00N2I00000DLpgT',
	targetCampus: '00N2I00000DLpgY',
	targetLeaveDate: '00N2I00000DLpgd',
	targetStatus: '00N2I00000DLpgi',
	targetID: '00N2I00000DLpgn',
	targetTerminationDate: '00N2I00000DLpgs',
	extraInfo: '00N2I00000DLpgx',
};

const defaultFormValues = {
	orgid: '00DF0000000507Z',
	retURL: 'http://www.yellowfolder.com/request-success.html',
	recordType: '012F0000000yHfU',
	subject: 'Record Request Web Form',
	priority: 'P2 - Normal',
	submit: 'Submit',
};

class RecordRequest extends Component {
	state = {
		district: '',
		name: '',
		email: '',
		phone: '',
		recordSeries: '',
		targetName: '',
		targetAlias: '',
		targetDOB: '',
		targetCampus: '',
		targetLeaveDate: '',
		targetStatus: '',
		targetID: '',
		targetTerminationDate: '',
		extraInfo: '',
	};

	componentDidMount() {
		const s = document.createElement('script');
		s.src = 'https://www.google.com/recaptcha/api.js';
		document.getElementById('recaptcha-container').appendChild(s);

		const resp = document.createElement('script');
		resp.innerHTML = `function timestamp() {var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);`;

		document.getElementById('recaptcha-response').appendChild(resp);
	}

	onFormFieldChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const mappedState = { ...defaultFormValues };
		for (const s in this.state) {
			mappedState[mappedFields[s]] = this.state[s];
		}
		console.log(mappedState);

		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': '*',
			Accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
		};

		const config = {
			method: 'post',
			baseURL,
			url: formRoute,
			headers,
			data: qs.stringify(mappedState),
			withCredentials: true,
			params: {
				encoding: 'UTF-8',
			},
		};

		return axios(config).then(resp => {
			console.log('got response!');
			console.log(resp);
			Router.push('/request-success');
		});
	};

	render() {
		const {
			district,
			name,
			email,
			phone,
			recordSeries,
			targetName,
			targetAlias,
			targetDOB,
			targetCampus,
			targetLeaveDate,
			targetStatus,
			targetID,
			targetTerminationDate,
			extraInfo,
		} = this.state;

		return (
			<StyledForm>
				<div className="form--header">
					<h1>Record Request Form</h1>
					<p>Please complete the form below and our team will begin searching for your records.</p>
				</div>
				<div className="form--body">
					<form onSubmit={this.onSubmit}>
						{' '}
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="district">
								District
								<span>*</span>
							</label>
							<input
								required
								type="text"
								aria-label="District"
								aria-required="true"
								id="district"
								name="district"
								autoComplete="organization"
								value={district}
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="name">Your Name</label>
							<input
								required
								aria-required="true"
								type="text"
								aria-label="Name"
								id="name"
								name="name"
								autoComplete="name"
								value={name}
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="email">
								Your Email<span>*</span>
							</label>
							<input
								required
								type="email"
								aria-label="Your Email"
								aria-required="true"
								id="email"
								name="email"
								autoComplete="email"
								value={email}
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="phone">
								Your Phone<span>*</span>
							</label>
							<input
								required
								type="tel"
								aria-label="Your Phone"
								aria-required="true"
								autoComplete="tel"
								id="phone"
								name="phone"
								value={phone}
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
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
								value={recordSeries}
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
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
							<label htmlFor="targetName">Target Name</label>
							<input
								required
								id="targetName"
								name="targetName"
								aria-required="true"
								title="Target Name"
								aria-label="Target Name"
								value={targetName}
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="targetAlias">Target Alias or Maiden Name</label>
							<input
								id="targetAlias"
								name="targetAlias"
								aria-label="Target Alias or Maiden Name"
								title="Target Alias or Maiden Name"
								value={targetAlias}
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="targetDOB">Target Date of Birth</label>
							<input
								required
								type="date"
								pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
								id="targetDOB"
								name="targetDOB"
								value={targetDOB}
								title="Target Date of Birth"
								aria-label="Target Date of Birth"
								aria-required="true"
								maxLength="10"
								size="20"
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="targetCampus">Target Campus</label>
							<input
								required
								type="text"
								id="targetCampus"
								name="targetCampus"
								value={targetCampus}
								title="Target Campus"
								aria-label="Target Campus"
								aria-required="true"
								maxLength="255"
								size="20"
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="targetLeaveDate">Target Withdrawal/Graduation Date</label>
							<input
								required
								type="date"
								pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
								id="targetLeaveDate"
								name="targetLeaveDate"
								value={targetLeaveDate}
								title="Target Withdrawal/Graduation Date"
								aria-label="Target Withdrawal/Graduation Date"
								aria-required="true"
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
								maxLength="10"
								size="20"
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="targetStatus">Target Active or Archive</label>
							<select
								required
								id="targetStatus"
								name="targetStatus"
								title="Target Active or Archive"
								aria-label="Target Active or Archive"
								aria-required="true"
								value={targetStatus}
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							>
								<option value="" disabled>
									Please Select
								</option>
								<option value="active">Active</option>
								<option value="archive">Archive</option>
							</select>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="targetID">Target ID Number</label>
							<input
								required
								id="targetID"
								name="targetID"
								value={targetID}
								title="Target ID Number"
								aria-label="Target ID Number"
								aria-required="true"
								maxLength="20"
								size="20"
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="targetTerminationDate">Target Date of Termination</label>
							<input
								required
								type="date"
								pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
								id="targetTerminationDate"
								name="targetTerminationDate"
								value={targetTerminationDate}
								title="Target Date of Termination"
								aria-label="Target Date of Termination"
								aria-required="true"
								maxLength="10"
								size="20"
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--field-wrapper form--field-item">
							<label htmlFor="extraInfo">Additional Information</label>
							<textarea
								type="text"
								wrap="soft"
								rows="4"
								id="extraInfo"
								name="extraInfo"
								value={extraInfo}
								title="Additional Information"
								aria-label="Additional Information"
								onBlur={this.onFormFieldChange}
								onChange={this.onFormFieldChange}
							/>
						</div>
						<div className="form--submit-wrapper">
							<div id="recaptcha-container" />
							<div
								className="g-recaptcha"
								data-sitekey="6LeUcI0UAAAAAGygzbJtp3JUVb_CeshJvINKIdpP"
							></div>
							<div id="recaptcha-response" />
							<input
								type="hidden"
								name="captcha_settings"
								value='{"keyname":"reCaptchaKeyPair","fallback":"true","orgId":"00DF0000000507Z","ts":""}'
							></input>
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
