import React, { Component } from 'react';
import { Masthead, SectionCopy, MastheadImage, InfoRow, InfoRowContent } from './styles/HomeStyles';

export class Home extends Component {
	render() {
		return (
			<main role="main">
				<Masthead>
					<SectionCopy>
						<h1>Files at your fingertips</h1>
						<p>We specialize in securely managing education records online.</p>
					</SectionCopy>
					<MastheadImage>
						<img src='/static/images/header-splash-woman.png' alt="Claudia Mullins, Director of Student Services" />
					</MastheadImage>
				</Masthead>
				<InfoRow>
					<InfoRowContent>
						<img className="row-image" src='/static/images/young-girl.png' alt="Young girl" />
						<div className="row-text">
							<div className="row-left">
								<p>We're educators with one focus, simplifying your records.</p>
							</div>
							<div className="row-right">
								<p>Our solutions are specifically designed for:</p>
								<ul>
									<li>Student Records</li>
									<li>Special Education Records</li>
									<li>Employee Records</li>
									<li>Administrative Records</li>
								</ul>
							</div>
						</div>
					</InfoRowContent>
				</InfoRow>
			</main>
		)
	}
}

export default Home;
