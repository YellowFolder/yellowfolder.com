import Link from 'next/link';
import React, { Component } from 'react';
import { AboutPage, PageHeader, TeamContainer } from './styles/AboutStyles';

export class About extends Component {
	render() {
		return (
			<AboutPage>
				{/* fix background header image */}
				<PageHeader>
					<div id="header-bg">
						<div className="header-text">
							<div className="page-intro">
								<h1>Educators, serving educators.</h1>
								<p>
									As former educators ourselves, we know how complicated filing can be. With a
									little help from our developers and a lot of help from our years in the field,
									we've perfected record storage for the K-12 market.
								</p>
							</div>
							<h3 className="team-greeting">Come meet the team.</h3>
						</div>
					</div>
				</PageHeader>

				<TeamContainer>
					<div className="member-row">
						<div className="member" id="first">
							<div className="person">
								<img
									src="/static/images/about-folder-member-1-min.svg"
									alt="YellowFolder team member Tessa Tyler"
								/>
							</div>
						</div>
						<div className="member" id="second">
							<div className="person">
								<img
									src="/static/images/about-folder-member-2.svg"
									alt="YellowFolder team member Gina Lunsford"
								/>
							</div>
						</div>
					</div>
					<div id="grey-bg" />
					<div id="file-cabinet">
						<img src="/static/images/file-cabinet-update.svg" alt="file cabinet" />
					</div>
					<div id="monitor">
						<img
							src="/static/images/monitor-min.svg"
							alt="YellowFolder team member Candice Earnest"
						/>
					</div>
					<div id="text-bottom">
						<span>
							<h3>We'd love to meet you face to face.</h3>
							<p>
								<Link href="/schedule-a-yellow-folder-demo">
									<a>Click here</a>
								</Link>{' '}
								to sign up for a complimentary live demonstration of our innovative,
								industry-leading software.
							</p>
						</span>
						<p>
							We use our education experience to provide every district user with the best customer
							service, consultation and training offered.&nbsp; Every user is on a different comfort
							level with technology, just like students in the classroom, so we give as much
							individual attention needed per user to ensure they understand how to utilize
							YellowFolder.&nbsp; We have incorporated our knowledge of districts and their records
							to perfect our implementation process, making it simple and easy to use in your
							district.
						</p>
					</div>
					<div id="mid-break" />
					<div id="btm-break">
						<div id="btm-bg" />
					</div>
				</TeamContainer>
			</AboutPage>
		);
	}
}

export default About;
