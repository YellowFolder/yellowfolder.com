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
								<h2>Card</h2>
							</Card>
							<Card>
								<h2>Card</h2>
							</Card>
							<Card>
								<h2>Card</h2>
							</Card>
							<Card>
								<h2>Card</h2>
							</Card>
						</CardRow>
						<div className="options-backdrop" />
						<div className="postscript-transition">
							<img className="transition-bracket" src="/static/images/bracket.svg" alt="" />
						</div>
					</ServiceOptions>
					<ServicesPostscript>
						<div className="service-figures">
							<div className="figure">FIGURE</div>
							<div className="figure">FIGURE</div>
							<div className="figure">FIGURE</div>
							<div className="figure">FIGURE</div>
						</div>
						<div className="postscript-backdrop">COPY COPY COPY</div>
					</ServicesPostscript>
				</PageBodyContainer>
			</ServicesPage>
		);
	}
}

export default Services;
