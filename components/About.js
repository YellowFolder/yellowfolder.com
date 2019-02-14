import React, { Component } from 'react';
import { AboutPage, PageHeader, TeamContainer, MemberRow, Member } from './styles/AboutStyles';

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
					<MemberRow>
						<Member />
						<Member />
					</MemberRow>
				</TeamContainer>
			</AboutPage>
		);
	}
}

export default About;
