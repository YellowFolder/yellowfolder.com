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
	OptionsContent,
} from './styles/HomeStyles';

class Home extends Component {
	render() {
		return (
			<main role="main">
				<Masthead>
					<SectionCopy>
						<h1>Files at your fingertips.</h1>
						<p>We specialize in securely managing education records online.</p>
					</SectionCopy>
					<MastheadImage>
						<img
							src="/static/images/header-splash-woman.png"
							alt="Claudia Mullins, Director of Student Services"
						/>
						<div className="quote">
							<div id="top">
								<p>
									"As an educator, I understand issues unique to education and am happy to support
									you."
								</p>
							</div>
							<div id="btm">
								<h5 id="name">Claudia Mullins</h5>
								<p id="title">Director of Student Services</p>
								<p id="time">23 years</p>
							</div>
						</div>
					</MastheadImage>
				</Masthead>

				<InfoRow>
					<InfoRowContent>
						<img className="row-image" src="/static/images/young-girl.png" alt="Young girl" />
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
							<h1>
								Cabinet to Cloud<span className="superscript">&trade;</span>
							</h1>
							<p>
								At YellowFolder we believe your records need to be quickly and easily accessed. Our
								intuitive, simple to use filing system achieves just that and offers the safety and
								security compliance required in the education industry. We assist you in taking all
								your files from paper or digital formats to your own personal, searchable cloud
								database. Eliminating valuable time spent filing, searching and sharing records,
								misplacing or entirely losing files altogether. Reclaim valuable space underutilized
								by filing cabinets, and money spent on paper, ink and copiers.
							</p>
						</CabinetToCloud>
					</ContentContainer>
				</ContentRow>

				<OptionsContent>
					<ContactOptions>
						<div className="cabinet-to-cloud">
							<img src="/static/images/cabinet-to-cloud.png" alt="Cabinet to Cloud" />
						</div>
						<div className="options">
							<div className="cards">
								<div className="card">
									<div className="card-content">
										<img src="/static/images/banner-icon__demo.svg" alt="Watch Demo" />
										<div className="card-text">
											<h2>Watch the Demo</h2>
											<p>
												This video will give you a basic overview of our system. We’ll show you how
												easy uploading your records is and how you benefit. Click the icon to see
												how much simpler managing your records should be.
											</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-content">
										<img src="/static/images/banner-icon__pricing.png" alt="Pricing" />
										<div className="card-text">
											<h2>Pricing</h2>
											<p>
												By switching to electronic storage, districts can save significant amounts
												of money currently spent on printing, file cabinets, and physical storage.
												YellowFolder offers transparent, all-in-one pricing making it easy and
												affordable to go paperless.
											</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-content">
										<img
											src="/static/images/banner-icon__training.png"
											alt="Participate in a Live Training"
										/>
										<div className="card-text">
											<h2>Participate in a Live Training</h2>
											<p>
												Find a date and time that fits your schedule and be a part of a training
												session. You can ask questions, see the software, and get a feel for how
												everything works. Click the icon to sign up for a time that works best for
												you.
											</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-content">
										<img src="/static/images/banner-icon__cabinet.svg" alt="Paperless in a Week" />
										<div className="card-text">
											<h2>Paperless in a Week</h2>
											<p>
												Our system enables you to take your district completely cloud-based in less
												than a week. We will show you how to scan, upload and categorize your
												records and provide ongoing training and support to assure your success.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</ContactOptions>
				</OptionsContent>
			</main>
		);
	}
}

export default Home;
