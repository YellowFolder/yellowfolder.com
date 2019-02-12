import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	.bar {
		display: grid;
		background-color: ${props => props.theme.gray};
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		height: 80px;
	}
	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto;
		height: 10px;
		background-color: ${props => props.theme.yellow};
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
			height: auto;
			max-height: 51px;
		}
	}
`;

const Header = () => (
	<StyledHeader>
		<div className="bar">
			<Logo>
				<Link href="/">
					<a>
						<img src='/static/images/header-logo.svg' alt='YellowFolder' />
					</a>
				</Link>
			</Logo>
			<Nav />
		</div>
		<div className="sub-bar"></div>
	</StyledHeader>
);

export default Header;
