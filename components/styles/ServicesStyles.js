import styled from 'styled-components';

const ServicesPage = styled.div`
	background: white;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, auto);
	padding: 0;
	margin: 90px 0 0 0;
	width: 100vw;
	height: 100%;
`;

const PageHeaderContainer = styled.div`
	grid-column: span 12;
	grid-row: 1 / 4;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0;
	position: relative;
	z-index: 500;
	background: transparent url(/static/images/pattern-bg-2.svg);
	background-position-x: 0;
	background-position-y: -25vh;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	.header-text {
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-start;
		justify-content: flex-start;
		width: 70%;
		max-width: ${props => props.theme.maxWidth};
		margin: 7.5% 0 12.5% 4.5rem;

		h1,
		p {
			padding: 1rem 0;
		}

		h1 {
			color: ${props => props.theme.grey};
			line-height: calc(66px + (78 - 66) * ((100vw - 1000px) / (1800 - 1000)));
			font-size: calc(70px + (88 - 70) * ((100vw - 1000px) / (1800 - 1000)));
			font-family: ${props => props.theme.boldFont};
			margin: 0;
		}
		p {
			color: ${props => props.theme.grey};
			line-height: calc(21px + (20 - 21) * ((100vw - 1000px) / (1800 - 1000)));
			font-size: calc(18px + (20 - 18) * ((100vw - 1000px) / (1800 - 1000)));
			margin: 0;
			width: 80%;
			align-self: flex-start;
		}
	}
`;

const PageBodyContainer = styled.div`
	grid-column: span 12;
	grid-row: 5 / 12;
	padding: 0;
	margin: 0;
	background: white;
	display: grid;
	grid-template-columns: repeat(6, minmax(auto, 1fr));
	grid-template-rows: repeat(12, 1fr);
	z-index: 1000;
`;

const ServiceOptions = styled.div`
	grid-column: span 6;
	grid-row: 1 / 4;
	max-height: 550px;
	margin: 0;
	padding: 0;
	z-index: 10;
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: 36px 432px 94px minmax(100px, 1fr);
	.options-backdrop {
		grid-column: 1 / 3;
		grid-row: 2 / 4;
		background: ${props => props.theme.grey};
		margin: 0;
		padding: 0;
	}
	.postscript-transition {
		width: 100%;
		grid-column: span 12;
		grid-row: 4 / 5;
		max-width: 1200px;
		align-self: flex-end;
		justify-self: center;
	}
`;

const CardRow = styled.div`
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	display: grid;
	justify-self: center;
	grid-template-columns: auto 1fr 1fr 1fr 1fr auto;
	grid-template-rows: repeat(3, auto);
	grid-template-areas:
		'. card card card card .'
		'. card card card card .'
		'. card card card card .';
`;

const Card = styled.div`
	width: 260px;
	height: 480px;
	background-color: ${props => props.theme.yellow};
	border-radius: 20px;
	z-index: 1000;
	margin: 0px 14px 0;
	padding: 0;
	grid-area: card;
	grid-column: span 2;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	h2 {
		color: ${props => props.theme.white};
		font-size: 48px;
		line-height: 100%;
	}
`;

const ServicesPostscript = styled.div`
	grid-column: span 6;
	grid-row: 5 / 8;
	padding: 0;
	margin: 0;
	background: transparent;
	display: grid;
	grid-template-columns: auto 1fr 1fr 1fr 1fr auto;
	grid-template-rows: auto 100px 1fr 100px 1fr auto;
	/* grid-template-rows: 222px 200px 404px; */

	.service-figures {
		grid-column: 1 / 6;
		grid-row: 2 / 4;
		max-width: 1200px;
		justify-self: center;
		z-index: 1000;

		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;

		.figure {
			grid-column: span 1;
			border: 1px solid black;
			height: 200px;
			width: 200px;
			margin: 0 14px;
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			justify-self: center;
		}
	}

	.postscript-backdrop {
		grid-column: 1 / 6;
		grid-row: 3 / 6;
		background-image: url(/static/images/papers-bg.svg);
		background-color: ${props => props.theme.yellow};
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		margin: 0;
		padding: 0;
		width: 100%;
		height: auto;
		z-index: 0;
	}
`;

export {
	ServicesPage,
	PageHeaderContainer,
	PageBodyContainer,
	ServiceOptions,
	CardRow,
	Card,
	ServicesPostscript,
};
