import styled from 'styled-components';

const ServicesPage = styled.div`
	background: white;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, auto);
	grid-auto-rows: auto;
	padding: 0;
	margin: 0 auto;
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
		width: 80%;
		max-width: ${props => props.theme.maxWidth};
		margin: 7.5% 0 12.5% 4.5rem;

		h1,
		p {
			padding: 1rem 0;
		}

		h1 {
			color: ${props => props.theme.grey};
			line-height: calc(66px + (78 - 66) * ((100vw - 1000px) / (1800 - 1000)));
			font-size: calc(66px + (82 - 66) * ((100vw - 1000px) / (1800 - 1000)));
			font-family: ${props => props.theme.boldFont};
			margin: 0;
		}
		p {
			color: ${props => props.theme.grey};
			line-height: calc(21px + (20 - 21) * ((100vw - 1000px) / (1800 - 1000)));
			font-size: calc(18px + (20 - 18) * ((100vw - 1000px) / (1800 - 1000)));
			margin: 0;
			width: 95%;
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
	/* grid-template-rows: repeat(10, minmax(auto, 1fr)); */
	z-index: 1000;
	justify-items: center;
`;

const ServiceOptions = styled.div`
	grid-column: 1 / -1;
	width: 100%;
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
		width: 100%;
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
	max-width: 1200px;
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	display: grid;
	justify-self: center;
	grid-template-columns: repeat(4, auto);
	grid-template-rows: repeat(3, auto);
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
	grid-column: span 1;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: flex-start;
	h2 {
		color: ${props => props.theme.white};
		font-size: 4.2rem;
		line-height: 100%;
		align-self: center;
		margin: 5rem 0 1rem;
		padding: 0;
	}
	.option-list {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-flow: column nowrap;
		list-style: none;
		margin: 0;
		padding: 2rem 1rem 0;
		li {
			font-weight: 400;
			color: ${props => props.theme.grey};
			font-size: 1.6rem;
			width: 100%;
			padding: 10px 0 0 16px;
			text-indent: -16px;
			&::before {
				content: url(/static/images/checkmark.svg);
				padding: 0;
				margin: 0 4px 0 -4px;
				color: white;
				vertical-align: middle;
			}
		}
	}
`;

const ServicesPostscript = styled.div`
	grid-column: 1 / 12;
	/* grid-row: 4 / 7; */
	padding: 0;
	margin: 45px 0 0 0;
	background: transparent;
	display: grid;
	grid-template-columns: repeat(12, auto);
	grid-template-rows: 45px 90px 180px 180px 150px;
	grid-auto-flow: row;
	grid-auto-rows: auto;
	justify-items: center;

	.postscript-backdrop {
		grid-column: 1 / 12;
		grid-row: 3 / 6;
		background-image: url(/static/images/papers-bg.svg);
		background-color: ${props => props.theme.yellow};
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		margin: 0;
		padding: 0;
		width: 100vw;
	}

	.service-figures {
		grid-column: 1 / 12;
		grid-row: 2 / 4;
		max-width: 1200px;
		z-index: 1000;
		margin: -25px 0 0 0;

		display: grid;
		grid-template-columns: repeat(12, auto);
		grid-gap: 0 40px;

		.figure {
			grid-column: span 3;
			height: 100%;
			width: 100%;
			margin: 0 14px;
			padding: 0;
			text-transform: capitalize;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-self: center;
			img {
				max-height: 200px;
				max-width: 225px;
				/* width: 100%; */
				height: auto;
				object-fit: fill;
			}
			p {
				font-size: 2.3rem;
				font-family: ${props => props.theme.boldFont};
				line-height: 28px;
				color: ${props => props.theme.grey};
				text-align: center;
				margin: 0;
				padding: 0;
			}
		}
	}

	.postscript-copy {
		grid-column: 3 / 10;
		grid-row: 4;
		max-width: 1200px;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: flex-start;
		text-align: center;
		color: ${props => props.theme.white};
		background: transparent;
		z-index: 500;
		h2,
		p {
			text-shadow: ${props => props.theme.textShadow};
			margin: 0;
			padding: 0.25rem 0;
		}
		h2 {
			font-size: 4.2rem;
			line-height: 50px;
			font-family: ${props => props.theme.boldFont};
		}
		p {
			font-size: 2rem;
			line-height: 24px;
			font-weight: 400;
			width: 90%;
		}
	}
`;

const ServicesVideo = styled.div`
	/* grid-row: 7/10; */
	grid-row: 7/9;
	grid-column: 1/12;
	background: white;
	z-index: 1000;
	max-width: 1200px;
	/* margin: -150px 0 0 0; */
	margin: -150px 0 50px 0;
	padding: 0;

	.video-container {
		#services-video {
			width: 100%;
			height: auto;
			&:hover {
				cursor: pointer;
			}
		}
	}
`;

const ActionWrapper = styled.div`
	/* grid-row: 10/10; */
	grid-row: 9/9;
	grid-column: 1/12;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 190px;

	.cta {
		background: ${props => props.theme.yellow};
		width: 490px;
		height: 94px;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		&:hover {
			cursor: pointer;
		}
		a {
			padding: 29px 0;
			margin-top: -4px;
			font-family: ${props => props.theme.boldFont};
			font-size: 2.5rem;
			line-height: 30px;
			color: ${props => props.theme.white};
			text-align: center;
		}
	}
	.cta-backdrop {
		background: ${props => props.theme.grey} url(/static/images/pattern-bg.svg) no-repeat left
			center;
		background-size: 1165px 758px;
		margin-top: -48px;
		width: 100%;
		height: 100%;
		z-index: 100;
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
	ServicesVideo,
	ActionWrapper,
};
