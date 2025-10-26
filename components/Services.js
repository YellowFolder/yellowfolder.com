import Link from 'next/link';
import React, { Component } from 'react';
import {
	ActionWrapper,
	Card,
	CardRow,
	PageBodyContainer,
	PageHeaderContainer,
	ServiceOptions,
	ServicesPage,
	ServicesPostscript,
	ServicesVideo,
} from './styles/ServicesStyles';

class Services extends Component {
	render() {
		return (
			<ServicesPage>
				<PageHeaderContainer>
					<div className="header-text">
						<h1>Solutions that move at a million files per hour.</h1>
						<p>
							We are experts in streamlining your district's internal operations
							while simultaneously securing each document within a private,
							HIPAA and FERPA compliant database.
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
							<img
								className="transition-bracket"
								src="/static/images/bracket.svg"
								alt="Transition bracket connecting services to record types"
							/>
						</div>
					</ServiceOptions>
					<ServicesPostscript>
						<div className="postscript-backdrop" />
						<div className="service-figures">
							<div className="figure">
								<img
									src="/static/images/services-icon__student.png"
									alt="Student records icon - backpack and books"
								/>
								<p>Student</p>
							</div>
							<div className="figure">
								<img
									src="/static/images/services-icon__sped.png"
									alt="Special Education records icon - accessibility symbol"
								/>
								<p>Special Education</p>
							</div>
							<div className="figure">
								<img
									src="/static/images/services-icon__hr.png"
									alt="Faculty records icon - identification badge"
								/>
								<p>Faculty</p>
							</div>
							<div className="figure">
								<img
									src="/static/images/services-icon__admin.png"
									alt="Administrative records icon - organizational chart"
								/>
								<p>Administrative</p>
							</div>
						</div>
						<div className="postscript-copy">
							<h2>All of your files, for all of your needs.</h2>
							<p>
								We understand how unique each area of of your records are so we
								provide full functionality down to the individual file level.
							</p>
						</div>
					</ServicesPostscript>
					<ServicesVideo>
						<div className="video-container">
							<iframe
								width="100%"
								height="434px"
								src="https://www.youtube-nocookie.com/embed/gBqr0GX9mhQ?rel=0&modestbranding=1"
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								title="YellowFolder Services Overview"
							></iframe>
						</div>
					</ServicesVideo>
					<ActionWrapper>
						<div className="cta">
							<Link href="/schedule-a-yellow-folder-demo">
								See YellowFolder in Action
							</Link>
						</div>
						<div className="cta-backdrop" />
					</ActionWrapper>
				</PageBodyContainer>
			</ServicesPage>
		);
	}
}

export default Services;
