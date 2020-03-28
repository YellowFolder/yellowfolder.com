import styled from 'styled-components';
import { query, size } from './device';

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

		@media (max-width: ${size.laptop}) {
			width: 85%;
			margin: 7.5% 0 7.5% 4.5rem;
			h1 {
				line-height: calc(72px + (78 - 72) * ((100vw - 1000px) / (1800 - 1000)));
				font-size: calc(72px + (82 - 72) * ((100vw - 1000px) / (1800 - 1000)));
			}
			p {
				width: 102%;
			}
		}
	}
	@media ${query.laptop} {
		background-position: center;
	}
	@media (max-width: ${size.mobileL}) {
		background-position-x: 33%;
		background-position-y: 33%;
		background-size: 1440px;
		.header-text {
			width: 90%;
			margin: 4.5rem auto;
			h1 {
				font-size: calc(60px + (72 - 60) * ((100vw - 500px) / (1000 - 800)));
				line-height: calc(60px + (78 - 60) * ((100vw - 500px) / (1000 - 300)));
				padding: 0 0 2rem;
			}
			p {
				font-size: calc(20px + (22 - 20) * ((100vw - 500px) / (1000 - 350)));
				line-height: 120%;
				padding: 2rem 0 1rem;
			}
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

		@media (max-width: 850px) and (min-width: ${size.tablet}) {
			margin-bottom: 25px;
		}
	}

	@media (max-width: ${size.laptop}) {
		max-height: none;
		grid-template-rows: 36px 1000px 94px;
		.options-backdrop {
			grid-row: 2 / 3;
		}
		.postscript-transition {
			grid-row: 3;
			max-width: 920px;
			padding: 0 28px;
		}
	}

	@media (max-width: ${size.tablet}) {
		max-height: none;
		grid-template-rows: 36px 1fr 36px;
		grid-template-columns: 1fr;
		.options-backdrop {
			grid-auto-rows: auto;
			grid-row: 2 / 4;
		}
		.postscript-transition {
			display: none;
			min-width: 720px;
		}
	}
`;

const CardRow = styled.div`
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	display: grid;
	grid-gap: 0 28px;
	justify-self: center;
	grid-template-columns: repeat(4, minmax(220px, 250px));
	grid-template-rows: repeat(3, auto);
	justify-content: center;
	@media ${query.laptop} {
		max-width: 1024px;
		grid-template-columns: repeat(4, minmax(220px, 250px));
		grid-gap: 0 28px;
	}
	@media (max-width: ${size.laptop}) {
		grid-row: 1 / 3;
		grid-gap: 28px;
		grid-template-columns: repeat(2, minmax(240px, 320px));
	}
	@media (max-width: ${size.tablet}) {
		grid-template-columns: 1fr;
	}
`;

const Card = styled.div`
	height: 480px;
	background-color: ${props => props.theme.yellow};
	border-radius: 20px;
	z-index: 1000;
	margin: 0;
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
		margin: 0 auto;
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
	@media (max-width: ${size.laptop}) {
		grid-row: span 1;
		padding: 0;
		.option-list {
			width: 90%;
			padding: 2rem 0;
		}
	}
	@media (max-width: ${size.mobileL}) {
		padding: 0;
		height: 460px;
	}
`;

const ServicesPostscript = styled.div`
	grid-column: 1 / 12;
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

	@media (max-width: ${size.laptop}) {
		margin: 0;
		grid-template-rows: 0px 90px 120px 200px 75px;
		.service-figures {
			margin: 0;
			grid-gap: 0 20px;
			max-width: none;
			width: 100%;
			.figure {
				img {
					max-height: 150px;
					max-width: 150px;
				}
				p {
					font-size: 2.1rem;
				}
			}
		}
		}
		.postscript-copy {
			p {
				width: 100%;
			}
		}
	}

	@media (max-width: ${size.tablet}) {
		background: ${props => props.theme.yellow};
		grid-template-rows: initial;
		.postscript-backdrop {
			grid-row: 1 / 8;
		}
		.service-figures {
			grid-gap: 28px;
			width: initial;
			max-width: initial;
			grid-template-rows: 1fr 1fr;
			padding: 2rem 0;
			.figure {
				grid-column: span 6;
				margin: 0;
				img {
					max-height: initial;
					max-width: 225px;
					object-fit: cover;
				}
			}
		}
		.postscript-copy {
			padding: 21px 0.5rem 42px;
			grid-column: 2 / 11;
			h2,
			p {
				padding: 0.5rem 0;
			}
			h2 {
				font-size: 5.2rem;
				line-height: 100%;
			}
			p {
				font-size: 2.1rem;
				line-height: 100%;
				width: 90%;
			}
		}
	}
	@media (max-width: ${size.mobileL}) {
		.service-figures {
			grid-template-columns: 1fr;
			.figure {
				grid-column: span 1;
			}
		}
		.postscript-copy {
			grid-column: 1 / 12;
			padding: 21px 0 62px;
			h2,
			p {
				padding: 0.75rem 0;
			}
			h2 {
				font-size: 4.2rem;
			}
			p {
				font-size: 2.4rem;
			}
		}
	}
`;

const ServicesVideo = styled.div`
	grid-row: 7/9;
	grid-column: 2/6;
	background: transparent;
	width: 100%;
	margin: -150px 0 50px 0;

	.video-container {
		width: 100%;
		height: 100%;
		position: relative;
		padding: 25px 0;

		iframe {
		}
	}

	.video-container {
		#services-video {
			width: 100%;
			height: auto;
			z-index: 1000;
			&:hover {
				cursor: pointer;
			}
		}
	}
	@media (max-width: ${size.laptop}) {
		margin: -75px 0 25px;
	}
	@media (max-width: 850px) {
		grid-column: 1/-1;
		padding: 0 2rem;
	}
	@media (max-width: ${size.tablet}) {
		margin: -25px 0 25px;
	}
	@media (max-width: ${size.mobileL}) {
		margin: 0 0 40px;
		padding: 0 0.5rem;
	}
`;

const ActionWrapper = styled.div`
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
	@media (max-width: ${size.mobileL}) {
		.cta {
			width: 82.5%;
			height: 120px;
			a {
				padding: 29px 6.5px;
				font-size: 2.4rem;
			}
		}
		.cta-backdrop {
			background-position-y: 55%;
			background-position-x: 0;
			background-size: 1125px;
		}
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
