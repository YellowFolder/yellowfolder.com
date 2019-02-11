import styled from 'styled-components';

const Container = styled.section`
	background: white;
	background: transparent url("static/images/pattern-bg.svg") no-repeat left top;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;

	.text {
		h1 {
			font-size: 7rem;
			line-height: 120%;
			color: ${props => props.theme.grey};
			font-family: 'Clear Sans Bold';
			font-weight: bold;
			padding: 0;
		}
	}

`;

export default Container;
