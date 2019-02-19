import React, { Component } from 'react';
import Link from 'next/link';
import {
	ServicesPage,
	PageHeaderContainer,
	PageBodyContainer,
	ServiceOptions,
	CardRow,
	Card,
	ServicesPostscript,
	ServicesVideo,
	ActionWrapper,
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
						<div className="postscript-backdrop" />
						<div className="service-figures">
							<div className="figure">
								<img src="/static/images/services-icon__student.png" alt="" />
								<p>Student</p>
							</div>
							<div className="figure">
								<img src="/static/images/services-icon__sped.png" alt="" />
								<p>Special Education</p>
							</div>
							<div className="figure">
								<img src="/static/images/services-icon__hr.png" alt="" />
								<p>Faculty</p>
							</div>
							<div className="figure">
								<img src="/static/images/services-icon__admin.png" alt="" />
								<p>Administrative</p>
							</div>
						</div>
						<div className="postscript-copy">
							<h2>All of your files, for all of your needs.</h2>
							<p>
								We understand how unique each area of of your records are so we provide full
								functionality down to the individual file level.
							</p>
						</div>
					</ServicesPostscript>
					<ServicesVideo>
						<div className="video-container">
							<video id="services-video" poster="/static/images/video-wallpaper.png" controls>
								<source type="video/mp4" src="/static/video/yf-intro.mp4" />
								<source type="video/ogg" src="/static/video/yf-intro.ogg" />
								<source type="video/ogv" src="/static/video/yf-intro.ogv" />
								<source type="video/webm" src="/static/video/yf-intro.webm" />
								<p>
									Sorry, your browser doesn't support HTML5 video so this video cannot be displayed.
								</p>
							</video>
						</div>
					</ServicesVideo>
					<ActionWrapper>
						<div className="cta">
							<Link href="https://info.yellowfolder.com/schedule-a-yellow-folder-demo">
								<a>See YellowFolder in Action</a>
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
