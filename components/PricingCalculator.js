/* eslint-disable jsx-a11y/no-onchange */
import React, { useState } from 'react';
import './PricingCalculator.css';

const PricingForm = props => {
	const [calculator, setCalculator] = useState({
		email: '',
		numberOfStudents: '',
		yesrsOfRecords: '',
		convertedRecords: '',
		recordSeries: 'None',
		district: null,
		inquiryType: 'select',
		subject: 'Calculator Form Submission',
		message: '',
	});

	const [response, setResponse] = useState({
		type: '',
		message: '',
	});

	const onFormFieldChange = e => {
		setCalculator({ ...calculator, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
	};

	return (
		<div className="StyledPricing">
			<div className="calculator-form--header">
				<h2>
					Going paperless (and converting your existing files) is far less
					expensive than you think. In fact, your school system will spend less
					implementing the YellowFolder system than you will spend on paper for
					the converted files. Enter your information below to see the cost
					Record Series.
				</h2>
			</div>
			<aside className="calculator-form--sidebar">
				<div className="sidebar-calculator-info">
					<h3>YellowFolder</h3>
					<p>
						1551 E. Lincoln Ave., Ste 100 <br />
						Madison Heights, MI 48071
					</p>
				</div>
				<div className="sidebar-calculator-info">
					<h3>Sales</h3>
					<p>
						<span itemProp="telephone">
							<a href="tel:+1-844-935-5694">(844) 935-5694</a>
						</span>
						<br />
						<a href="mailto:sales@yellowfolder.com" itemProp="email">
							sales@yellowfolder.com
						</a>
					</p>
				</div>
				<div className="sidebar-calculator-info">
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
			<div className="calculator-form--form">
				<form onSubmit={handleSubmit}>
					<input type="hidden" name="subject" value="Calculator Form" />{' '}
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="email">
							Record Series:
							<br />
							<span style={{ fontSize: '0.8em', color: '#333' }}>
								YellowFolder operates on four separate types of school records{' '}
								<br />
								(Student Records, Special Education Records, Human Resource
								Records, and Administrative Records).{' '}
							</span>
						</label>
						<select
							required
							id="recordSeries"
							defaultValue={calculator.$State || 'select'}
							name="recordSeries"
							onChange={onFormFieldChange}
						>
							<option value="select" disabled>
								Please Select
							</option>
							<option value="ST">Student</option>
							<option value="SE">Special Education</option>
							<option value="ER">Employee</option>
							<option value="AR">Administrative</option>
						</select>
					</div>
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="numberOfStudents">
							Number of Students:
							<br />
							<span style={{ fontSize: '0.8em', color: '#333' }}>
								YellowFolder charges a flat per Student rate for unlimited,
								online access to Student Records on the YellowFolder system.
							</span>
						</label>
						<input
							id="numberOfStudents"
							type="number"
							autoComplete="given-name"
							name="numberOfStudents"
							onChange={onFormFieldChange}
						/>
					</div>
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="yesrsOfRecords">
							Years of Archived Records :
							<br />
							<span style={{ fontSize: '0.8em', color: '#333' }}>
								YellowFolder can pick up your active and archived records for
								immediate conversion and upload to the YellowFolder system. We
								use standard file sizes to calculate how many boxes need
								conversion services. Actual results may differ.
							</span>
						</label>
						<input
							id="yesrsOfRecords"
							name="yesrsOfRecords"
							type="number"
							autoComplete="family-name"
							onChange={onFormFieldChange}
						/>
					</div>
					<div className="form--field-wrapper form--field-item">
						<label htmlFor="convertedRecords">
							Converted Records :
							<br />
							<span style={{ fontSize: '0.8em', color: '#333' }}>
								Let us know which records you would like picked up and
								converted. You can convert all your active and archive records,
								none at all, or something in between.
							</span>
						</label>
						<select
							required
							id="convertedRecords"
							defaultValue={calculator.$State || 'select'}
							name="convertedRecords"
							onChange={onFormFieldChange}
						>
							<option value="select" disabled>
								Please Select
							</option>
							<option value="AL">Active</option>
							<option value="AK">Archive</option>
							<option value="AZ">Active & Archive</option>
						</select>
					</div>
					<div className="control form--submit-wrapper">
						<button className="form--submit-btn" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PricingForm;
