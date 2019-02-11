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
	width: 100%;
	/* height: calc(100vh - 90px); */
	height: 600px;
	/* max-height: 550px; */
	padding: 0;
	margin: 0;
`;

const SectionCopy = styled.div`
	order: 1;
	flex: 1 1 auto;
	padding-left: 5.8rem;
	/* margin-top: 146px; */
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
	order: 2;
	display: flex;
	width: 100%;
	height: auto;
	img {
		width: 100%;
		height: auto;
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
