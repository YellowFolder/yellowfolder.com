import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { size } from './styles/device';

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9000;
	.bar {
		display: grid;
		background-color: ${props => props.theme.gray};
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		height: 80px;

		@media (max-width: 759px) {
			grid-template-columns: none;
			grid-auto-columns: auto;
		}
	}
`;

const Logo = styled.div`
	margin-left: 26px;
	position: relative;
	max-width: 166px;
	display: flex;
	align-items: center;
	justify-content: center;
	a {
		padding: 0;
		img {
			width: 100%;
			max-width: 100%;
			height: auto;
			max-height: 51px;
		}
	}
`;

const SubBar = styled.div`
	height: 10px;
	margin-top: 80px;
	background-color: ${props => props.theme.yellow};
	z-index: 0;
	width: 100% !important;
	position: relative;
`;

const Banner = styled.div`
	position: fixed;
	width: 127px;
	background: transparent;
	top: 80px;
	right: 11px;
	z-index: 9000;

	img {
		display: block;
		margin-top: -20px;
		z-index: 9999;
	}

	@media (max-width: ${size.navMenu}) {
		display: none;
	}
`;

export class Header extends Component {
	render() {
		return (
			<>
				<StyledHeader role="banner">
					<div className="bar">
						<Logo>
							<Link href="/">
								<img
									src="/static/images/header-logo.svg"
									alt="YellowFolder"
									itemProp="logo"
								/>
							</Link>
						</Logo>
						<Nav />
					</div>
				</StyledHeader>
				{this.props.activeRoute === '/' && (
					<Banner>
						<Link href="/privacy-policy">
							<img
								src="/static/images/privacy-banner.svg"
								alt="Student Privacy Pledge Official Signatory"
							/>
						</Link>{' '}
					</Banner>
				)}
				<SubBar />
			</>
		);
	}
}

export default Header;
