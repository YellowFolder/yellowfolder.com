import React, { Component } from 'react';
import {
	Masthead,
	SectionCopy,
	MastheadImage,
	InfoRow,
	InfoRowContent,
	ContentRow,
	ContentContainer,
	CabinetToCloud,
	ContactOptions,
	OptionsContent } from './styles/HomeStyles';

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

				<ContentRow>
					<ContentContainer>
						<CabinetToCloud>
							<h1>Cabinet to Cloud <span className="superscript">&trade;</span></h1>
							<p>At YellowFolder we believe your records need to be quickly and easily accessed. Our intuitive, simple to use filing system achieves just that and offers the safety and security compliance required in the education industry. We assist you in taking all your files from paper or digital formats to your own personal, searchable cloud database. Eliminating valuable time spent filing, searching and sharing records, misplacing or entirely losing files altogether. Reclaim valuable space underutilized by filing cabinets, and money spent on paper, ink and copiers.</p>
						</CabinetToCloud>
					</ContentContainer>
				</ContentRow>

				<OptionsContent>
					<ContactOptions>
						<div className="cabinet-to-cloud">
							<img src='/static/images/cabinet-to-cloud.png' alt="Cabinet to Cloud" />
						</div>
						<div className="options">
							<div className="cards">
								<div className="card"></div>
								<div className="card"></div>
								<div className="card"></div>
								<div className="card"></div>
							</div>
						</div>
					</ContactOptions>
				</OptionsContent>
			</main>
		)
	}
}

export default Home;
