import React, { Component } from 'react';
import styled from 'styled-components';
// import HomeStyles from './styles/HomeStyles';

const Masthead = styled.section`
	background: white;
	background-image: url(static/images/pattern-bg.svg);
	background-position: left top;
  background-size: 100% 95%;
  background-repeat: no-repeat;
	display: flex;
	padding: 0;
	margin: 0;
	/* height: calc(100vh - 90px); */
	width: 100%;
	/* width: 100vw; */
	/* height: 800px; */
	min-height: 600px;
	height: auto;
	/* max-width: 1200px; */
`;

const SectionCopy = styled.div`
	order: 1;
	flex: 1 1 auto;
	padding-left: 5.8rem;
	justify-self: flex-start;
	align-self: center;
	width: 100%;
	h1 {
		font-size: 8rem;
		line-height: 120%;
		color: ${props => props.theme.grey};
		font-family: 'Clear Sans Bold';
		font-weight: bold;
		padding: 0;
		margin: 0;
		letter-spacing: 1px;
	}
	p {
    font-size: 26px;
    line-height: 120%;
    color: #5B6670;
    /* font-weight: 600; */
    font-family: 'Clear Sans';
    letter-spacing: -0.5px;
    padding: 0;
    margin: 17px 0 0 0;
	}
`;

const MastheadImage = styled.div`
	display: flex;
	order: 2;
	flex: 1 1 auto;
	width: 100%;
	height: auto;
	padding-top: 2.4rem;
	img {
		/* width: 100%; */
		/* height: auto; */
	}
`;

export class Home extends Component {
	render() {
		return (
			<Masthead>
				<SectionCopy>
					<h1>Files at your <br /> fingertips</h1>
					<p>We specialize in securely managing <br /> education records online.</p>
				</SectionCopy>
				<MastheadImage>
					<img src='/static/images/header-splash-woman.png' alt="Claudia Mullins, Director of Student Services" />
				</MastheadImage>
			</Masthead>
		)
	}
}

export default Home;
