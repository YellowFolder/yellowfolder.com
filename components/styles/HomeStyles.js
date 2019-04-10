import styled from 'styled-components';

const ContentRow = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	background: ${props => props.background || 'white'};
`;

const ContentContainer = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	display: flex;
	height: 100%;
	padding: ${props => props.padding || 0};
`;

const Masthead = styled.section`
	background: white;
	background-image: url(static/images/pattern-bg.svg);
	background-position: left top;
	background-size: contain;
	background-repeat: no-repeat;
	display: flex;
	flex-flow: row nowrap;
	margin: 0 auto;
	padding: 3rem 0 0;
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	height: auto;
	z-index: 1000;
	max-height: 650px;
`;

const SectionCopy = styled.div`
	order: 1;
	flex: 1 2 auto;
	justify-self: flex-start;
	align-self: center;
	width: auto;
	margin: 0 0 5vmin 4.5rem;
	z-index: 100;
	h1 {
		font-size: 7.5rem;
		line-height: 100%;
		font-family: ${props => props.theme.boldFont};
		padding: 0;
		margin: 0;

		@media screen and (max-width: 1200px) {
			/* font-size: calc([minimum font size]px + ([maximum font size] - [minimum font size]) * ((100vw - [minimum viewport width]px) / ([maximum viewport width] - [minimum viewport width]))); */
			font-size: calc(75px + (92 - 75) * ((100vw - 1000px) / (1800 - 1000)));
			word-spacing: calc(2px + (8 - 2) * ((100vw - 1000px) / (1800 - 1000)));
		}
		@media screen and (max-width: 650px) {
			font-size: calc(50px + (68 - 50) * ((100vw - 1000px) / (1800 - 1000)));
		}
		@media (max-width: 500px) {
			font-size: calc(48px + (68 - 48) * ((100vw - 1000px) / (1800 - 1000)));
		}
	}
	p {
		font-size: 26px;
		line-height: 100%;
		padding: 0;
		margin: 17px 0 0 0;
	}
	@media screen and (max-width: 1000px) {
		margin: 0 0 4.5rem 4.5rem;
		flex: 1 3 auto;
		width: 100%;
		h1 {
			font-size: calc(60px + (78 - 60) * ((100vw - 1000px) / (1800 - 1000)));
		}
		p {
			margin-top: 2rem;
			line-height: 120%;
			font-size: 1.9rem;
		}
	}
	@media screen and (max-width: 680px) {
		h1 {
			word-spacing: -2px;
			font-size: calc(52px + (72 - 52) * ((100vw - 1000px) / (1800 - 1000)));
		}
		p {
			margin: 1.5rem 0 0;
			padding-right: 2rem;
		}
	}
	@media (max-width: 508px) {
		margin: 0 0 2.5rem 1.5rem;
		flex: 1 2 auto;
		p {
			padding-right: 2.5rem;
			line-height: 100%;
			font-size: 1.75rem;
		}
	}
`;

const MastheadImage = styled.div`
	order: 2;
	flex: 1 2 auto;
	height: auto;
	width: 100%;
	position: relative;
	z-index: 2000;
	margin-bottom: -3px;
	img {
		height: auto;
		width: 100%;
	}
	@media screen and (max-width: 1000px) {
		margin-left: -6.5rem;
		margin-right: -2.5rem;
	}
`;

const InfoRow = styled(ContentRow)`
	height: calc(100vh / 2);
	max-height: 270px;
	background: ${props => props.theme.yellow} url(/static/images/papers-bg.svg) no-repeat center;
	background-size: 1720px;
`;

const InfoRowContent = styled(ContentContainer)`
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	width: 100%;
	padding: 0 1rem;
	z-index: 0;
	position: relative;

	.row-image {
		align-self: flex-start;
		height: 100%;
	}

	.row-text {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 100%;

		.row-left,
		.row-right {
			font-family: ${props => props.theme.boldFont};
			font-size: 2.7rem;
			color: ${props => props.theme.white};
			text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2), 0px 0px 12px rgba(0, 0, 0, 0.2);
			line-height: 120%;
		}

		.row-left {
			width: 45%;
			order: 1;
			margin: 0 2.5% 0 0;
		}

		.row-right {
			width: 45%;
			order: 2;
			margin: 0 0 0 2.5%;

			ul,
			p {
				margin: 0;
			}

			ul li {
				font-family: ${props => props.theme.defaultFont};
				font-size: 2.2rem;
				line-height: 100%;
				padding: 3px 0;
				margin-left: -1rem;
			}
		}
	}

	@media (max-width: 760px) {
		padding: 0;

		.row-text {
			flex-flow: column nowrap;
			align-items: flex-end;

			.row-left,
			.row-right {
				margin: 0 2.5% 0 0;
				width: 57.5%;
			}
			.row-left {
				p {
					font-size: 2.4rem;
					margin: 0;
					padding: 0;
				}
			}
			.row-right {
				p {
					font-size: 2.48rem;
				}
				ul {
					li {
						font-size: 2rem;
						padding: 3px 0;
					}
				}
			}
		}
	}

	@media (max-width: 620px) {
		.row-image {
			align-self: center;
			width: 100%;
			height: 100%;
			width: 100%;
			object-fit: contain;
		}
		.row-text {
			align-items: center;
			justify-content: space-around;
			width: 60%;
			margin: 0 auto;

			.row-left,
			.row-right {
				margin: 0;
				width: 100%;
				padding: 0;
				p {
					font-size: 2.2rem;
				}
			}
			.row-right {
				ul {
					li {
						font-size: 2rem;
					}
				}
			}
		}
	}
	@media (max-width: 540px) {
		.row-text {
			justify-content: space-evenly;
			width: 80%;
		}
	}
`;

const CabinetToCloud = styled(ContentContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: column nowrap;
	width: 60%;
	h1 {
		font-family: ${props => props.theme.boldFont};
		font-size: 4.8rem;
		line-height: 58px;
		color: ${props => props.theme.yellow};

		span {
			vertical-align: super;
			font-size: 66%;
			line-height: 0px;
		}
	}

	p {
		line-height: 21px;
		text-align: center;
		width: 85%;
		margin: 0;
	}
	@media screen and (max-width: 1000px) {
		width: 80%;
		p {
			width: 80%;
		}
	}
	@media screen and (max-width: 540px) {
		width: 80%;
		p {
			line-height: 24px;
			width: 100%;
		}
	}
	@media screen and (max-width: 500px) {
		width: 100%;
		h1 {
			font-size: 4rem;
		}
		p {
			line-height: 24px;
			width: 80%;
		}
	}
`;

const OptionsContent = styled(ContentRow)`
	background: ${props => props.theme.grey} url(/static/images/pattern-bg-2.svg) no-repeat;
	background-position: right;
	background-size: cover;
	z-index: 15;
	margin-top: 180px;
	@media screen and (min-width: 1000px) {
		background-position: right top;
	}
	@media screen and (max-width: 1000px) {
		background-position: right;
		background-position-y: 50px;
	}
	@media screen and (max-width: 540px) {
		margin-top: 100px;
		background-position: right;
		background-position-y: -100px;
	}
	@media screen and (max-width: 480px) {
		margin-top: 90px;
	}
`;

const ContactOptions = styled.div`
	display: grid;
	grid-gap: 0px;
	grid-template-columns: repeat(12, [col] 100px);
	grid-template-rows: repeat(3, [row] 240px);
	background-color: white;
	position: relative;
	align-items: center;
	justify-content: center;
	background: transparent;

	div {
		z-index: 10;
	}

	.cabinet-to-cloud {
		position: absolute;
		top: -154px;
		grid-column: col / span 12;
		grid-row: row / span 1;
		z-index: 20;
		align-self: flex-start;
		justify-self: center;
		background-color: transparent;

		img {
			width: 100%;
			height: auto;
		}
	}

	.options {
		grid-column: col / span 12;
		grid-row: row 2;
		max-width: ${props => props.theme.maxWidth};
		margin: 0 auto;

		.cards {
			margin-top: 200px;
			display: grid;
			grid-gap: 2vmin;
			grid-template-columns: repeat(4, minmax(220px, 1fr));
			max-width: ${props => props.theme.maxWidth};
			justify-items: center;

			.card {
				width: 220px;
				padding: 20px;
				background-color: ${props => props.theme.yellow};
				height: 392px;
				border-radius: 15px;
				.card-content {
					display: flex;
					align-items: center;
					justify-content: space-evenly;
					flex-flow: column nowrap;
					color: ${props => props.theme.grey};
					margin-top: 2rem;
					img {
						padding: 0;
						height: 100px;
						width: auto;
						max-width: 100%;
						object-fit: scale-down;
					}
					.card-text {
						margin-top: 2rem;
					}
					h2 {
						text-align: center;
						width: 100%;
						padding: 0;
						text-transform: capitalize;
						line-height: 120%;
					}
					p {
						padding: 0;
						margin: 0;
						font-size: 1.2rem;
						line-height: 14px;
					}
				}
			}
		}
	}
	@media screen and (max-width: 1000px) {
		grid-template-rows: repeat(9, [row] 120px);
		.cabinet-to-cloud {
			top: -121px;
			grid-column: 3 / 11;
		}
		.options {
			grid-row: row 5 / 7;
			.cards {
				margin-top: 0;
				grid-template-columns: repeat(2, minmax(220px, 1fr));
				width: 100%;

				.card {
					width: 260px;
				}
			}
		}
	}
	@media screen and (max-width: 800px) {
		.cabinet-to-cloud {
			top: -90px;
			grid-column: 4 / 10;
		}
	}
	@media screen and (max-width: 620px) {
		.cabinet-to-cloud {
			top: -81px;
			width: 90%;
		}
	}
	@media screen and (max-width: 540px) {
		grid-template-rows: repeat(15, [row] 120px);
		.cabinet-to-cloud {
			width: 80%;
			top: -72px;
		}
		.options {
			grid-row: row 7 / 10;
			.cards {
				grid-template-columns: repeat(1, minmax(220px, 1fr));
				.card {
					width: 230px;
				}
			}
		}
	}
	@media screen and (max-width: 480px) {
		.cabinet-to-cloud {
			width: 75%;
			top: -68px;
		}
	}
	@media screen and (max-width: 450px) {
		.cabinet-to-cloud {
			width: 70%;
			top: -63px;
		}
	}
	@media screen and (max-width: 420px) {
		.cabinet-to-cloud {
			width: 65%;
			top: -59px;
		}
	}
`;

export {
	ContentRow,
	ContentContainer,
	Masthead,
	SectionCopy,
	MastheadImage,
	InfoRow,
	InfoRowContent,
	CabinetToCloud,
	ContactOptions,
	OptionsContent,
};
