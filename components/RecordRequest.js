import Router from 'next/router';
import qs from 'qs';
import React from 'react';
import unirest from 'unirest';
import StyledForm from './styles/FormStyles';

class RecordRequest extends React.Component {
	state = {
		district: '',
		name: '',
		email: '',
		phone: '',
		recordSeries: 'None',
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

	onFormFieldChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	// Create a ticket within freshdesk
	// For more documentation, check here: https://developers.freshdesk.com/api/#create_ticket
	onSubmit = async e => {
		e.preventDefault();
		let description = {
			'Target Alias or Maiden Name': this.state.alias,
			'Target Name': this.state.targetName,
			'Target Date of Birth': this.state.targetDOB,
			'Target Campus': this.state.targetCampus,
			'Target Withdrawal/Graduation Date': this.state.targetLeaveDate,
			'Target Active or Archive': this.state.targetStatus,
			'Target ID Number': this.state.targetID,
			'Target Date of Termination': this.state.targetTerminationDate,
			'Additional Information': this.state.extraInfo,
		};

		const fields = {
			email: this.state.email,
			name: this.state.name,
			phone: this.state.phone,
			subject: `Record Request for ${this.state.district}`,
			type: 'Record Retrieval',
			status: 2, // "open" (new)
			priority: 2, // medium
			responder_id: 48011471036, // christine roblez
			group_id: 48000495294, // customer support
			source: 2, // web portal
			custom_fields: {
				cf_record_series1: this.state.recordSeries,
				cf_district: this.state.district,
				cf_billable: false,
				cf_hours_spent: null,
			},
			description: qs.stringify(description, { encode: false, delimiter: '\n<br/><br/>\n' }),
		};

		let url = `https://yellowfolder.freshdesk.com/api/v2/tickets`;
		let resp = await unirest
			.post(url)
			.auth({
				user: process.env.NEXT_PUBLIC_FRESHDESK_KEY_PROD,
				sendImmediately: true,
			})
			.type('json')
			.send(fields);

		let data = resp.body;

		if (resp.status === 201) {
			return Router.push('/request-success');
		} else {
			return console.error(resp.headers);
		}
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
							<label htmlFor="name">
								Your Name
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
								<option value="None">None</option>
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
