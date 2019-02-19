import React, { Component } from 'react';
import {
	ServicesPage,
	PageHeaderContainer,
	PageBodyContainer,
	ServiceOptions,
	CardRow,
	Card,
	ServicesPostscript,
} from './styles/ServicesStyles';

export class Services extends Component {
	render() {
		return (
			<ServicesPage>
				<PageHeaderContainer>
					<div className="header-text">
						<h1>Solutions that move at a million files per hour.</h1>
						<p>
							We are experts in streamlining your district's internal operations while
							simultaneously securing each document within a private, HIPAA and FERPA compliant
							database.
						</p>
					</div>
				</PageHeaderContainer>
				<PageBodyContainer>
					<ServiceOptions>
						<CardRow>
							<Card>
								<h2>Storing</h2>
								<ul className="option-list">
									<li>Unlimited storage</li>
									<li>Hard copy conversion</li>
									<li>Digital record transfer</li>
									<li>Print to YellowFolder</li>
									<li>Document matriculation</li>
									<li>Simplified digital filing cabinet</li>
									<li>Accurate auto-filing in a few clicks</li>
									<li>File recovery</li>
									<li>HIPAA & FERPA compliant</li>
								</ul>
							</Card>
							<Card>
								<h2>Retrieving</h2>
								<ul className="option-list">
									<li>Detailed searchable database</li>
									<li>Encrypted sharing</li>
									<li>Personalized cloud access</li>
									<li>Simple interface navigation</li>
									<li>Compatible with all devices</li>
									<li>Adjustable restrictions</li>
									<li>Secure account protection</li>
									<li>Granular sharing permissions</li>
									<li>Locate files in seconds</li>
								</ul>
							</Card>
							<Card>
								<h2>Managing</h2>
								<ul className="option-list">
									<li>YellowFolder admin control</li>
									<li>Advanced user management</li>
									<li>Device approvals</li>
									<li>Document history</li>
									<li>Enable authentication</li>
									<li>Unlimited users</li>
									<li>Admin audit log</li>
									<li>Matriculation of records</li>
									<li>Ability to pass state audits in hours, not days</li>
									<li>24/7 phone support</li>
								</ul>
							</Card>
							<Card>
								<h2>Supporting</h2>
								<ul className="option-list">
									<li>Personal educator assigned to your district</li>
									<li>Unlimited individualized training</li>
									<li>Customized implementation</li>
									<li>Consultative services</li>
									<li>Voice for system updates</li>
									<li>Variety of methods for assistance</li>
									<li>Paperless planning and implementation</li>
									<li>User group meetings for networking</li>
								</ul>
							</Card>
						</CardRow>
						<div className="options-backdrop" />
						<div className="postscript-transition">
							<img className="transition-bracket" src="/static/images/bracket.svg" alt="" />
						</div>
					</ServiceOptions>
					<ServicesPostscript>
						<div className="service-figures">
							<div className="figure">
								Students
							</div>
							<div className="figure">
								Special Education
							</div>
							<div className="figure">
								Faculty
							</div>
							<div className="figure">
								Administrative
							</div>
						</div>
						<div className="postscript-backdrop">
							<div className="postscript-copy">
								<h2>COPY COPY COPY</h2>
							</div>
						</div>
					</ServicesPostscript>
				</PageBodyContainer>
			</ServicesPage>
		);
	}
}

export default Services;
