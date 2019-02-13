import styled from 'styled-components';

const NavStyles = styled.nav`
	margin: 0;
	padding: 0;
	display: flex;
	justify-self: end;
	font-size: 1.4rem;
	a,
	button {
		padding: 1rem 3rem;
		display: flex;
		align-items: center;
		position: relative;
		text-transform: lowercase;
		font-size: 1.4rem;
		background: none;
		border: 0;
		cursor: pointer;
		color: ${props => props.theme.white};
		font-weight: 700;
		font-family: 'Clear Sans Bold';
		text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2), 0px 0px 8px rgba(0, 0, 0, 0.2);
		&:last-child {
			color: ${props => props.theme.yellow};
		}
		@media (max-width: 700px) {
			font-size: 10px;
			padding: 0 10px;
		}
		&:hover,
		&:focus {
			cursor: pointer;
			outline: none;
			color: ${props => props.theme.yellow};
		}
	}
	@media (max-width: 1300px) {
		width: 100%;
		justify-content: flex-end;
		font-size: 1.4rem;
	}
`;

export default NavStyles;
