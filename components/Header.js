import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

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

const Header = () => (
	<>
		<StyledHeader role="banner">
			<div className="bar">
				<Logo>
					<Link href="/">
						<a>
							<img src="/static/images/header-logo.svg" alt="YellowFolder" />
						</a>
					</Link>
				</Logo>
				<Nav />
			</div>
		</StyledHeader>
		<SubBar />
	</>
);

export default Header;
