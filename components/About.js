import React, { Component } from 'react';
import styled from 'styled-components';

const AboutPage = styled.div`
	background: white;
	background: transparent url(static/images/about-pattern-background.svg);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100vh;
	max-height: 575px;
	max-width: ${props => props.theme.maxWidth};
`;

const PageCopy = styled.div`
	display: flex;
	flex-flow: column nowrap;
	padding-left: 5.8rem;
	justify-self: flex-start;
	justify-content: space-evenly;
	width: 70%;
	margin-top: -8rem;

	div {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-flow: column nowrap;
		justify-self: flex-start;

		h1 {
			font-size: 5rem;
			line-height: 120%;
			color: ${props => props.theme.grey};
			font-family: ${props => props.theme.boldFont};
			font-weight: bold;
			padding: 0;
			margin: 0;
		}
		p {
			font-size: 26px;
			line-height: 100%;
			color: ${props => props.theme.grey};
			letter-spacing: -0.5px;
			padding: 0;
			margin: 0;
		}
	}

	h3 {
		color: ${props => props.theme.yellow};
		font-size: 40px;
		margin: 0;
		padding: 0;
		font-family: ${props => props.theme.boldFont};
	}
`;

export class About extends Component {
	render() {
		return (
			<AboutPage>
				<PageCopy>
					<div>
						<h1>Educators, serving educators.</h1>
						<p>
							As former educators ourselves, we know how complicated filing can be. With a little
							help from our developers and a lot of help from our years in the field, we've
							perfected record storage for the K-12 market.
						</p>
					</div>
					<h3>Come meet the team.</h3>
				</PageCopy>
			</AboutPage>
		);
	}
}

export default About;
