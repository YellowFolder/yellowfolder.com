import React, { Component } from 'react';
import { AboutPage, PageHeader, TeamContainer } from './styles/AboutStyles';

export class About extends Component {
	render() {
		return (
			<AboutPage>
				<PageHeader>
					<div className="page-intro">
						<h1>Educators, serving educators.</h1>
						<p>
							As former educators ourselves, we know how complicated filing can be. With a little
							help from our developers and a lot of help from our years in the field, we've
							perfected record storage for the K-12 market.
						</p>
					</div>
					<h3 className="team-greeting">Come meet the team.</h3>
				</PageHeader>
				<TeamContainer>
					<div className="member-row" id="top">
						<div className="member" id="first">
							<div className="folder">
								<img src="/static/images/about-folder-member-1.svg" alt="folder background" />
							</div>
							<div className="person">
								<img src="/static/images/about-tessa.jpg" alt="Tessa" />
							</div>
							<div className="bio">
								<img src="/static/images/about-bio-tessa.png" alt="Tessa's bio" />
							</div>
						</div>
						<div className="member" id="second">
							<div className="folder">
								<img src="/static/images/about-folder-member-2.svg" alt="folder background" />
							</div>
							<div className="person">
								<img src="/static/images/about-gina.jpg" alt="Gina" />
							</div>
							<div className="bio">
								<img src="/static/images/about-bio-gina.png" alt="Gina's bio" />
							</div>
						</div>
					</div>
					<div id="grey-bg" />
					<div id="file-cabinet">
						<img src="/static/images/file-cabinet.svg" alt="file cabinet" />
					</div>
					<div id="monitor">
						<img src="/static/images/monitor.svg" alt="monitor" />
					</div>
					<div id="printer">
						<img src="/static/images/printer.svg" alt="printer" />
					</div>
					<div id="folder-bottom" />
					<div id="text-bottom">
						<h3>We'd love to meet you face to face.</h3>
						<p />
					</div>
					<div id="bottom-break" />
				</TeamContainer>
			</AboutPage>
		);
	}
}

export default About;
