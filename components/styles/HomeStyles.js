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
	flex: 1 1 auto;
	justify-self: flex-start;
	align-self: center;
	width: auto;
	padding: 0 0 0 4.5rem;
	z-index: 100;
	h1 {
		font-size: 7.5rem;
		line-height: 100%;
		font-family: ${props => props.theme.boldFont};
		padding: 0;
		margin: 0;

		@media screen and (max-width: 1200px) {
			/* font-size: calc([minimum font size]px + ([maximum font size] - [minimum font size]) * ((100vw - [minimum viewport width]px) / ([maximum viewport width] - [minimum viewport width]))); */
			font-size: calc(70px + (88 - 70) * ((100vw - 1000px) / (1800 - 1000)));
		}
	}
	p {
		font-size: 26px;
		line-height: 100%;
		padding: 0;
		margin: 17px 0 0 0;
	}
`;

const MastheadImage = styled.div`
	display: flex;
	order: 2;
	flex: 1 1 auto;
	height: auto;
	width: 100%;
	position: relative;
	img {
		height: auto;
		display: block;
		max-width: 100%;
		object-fit: cover;
		z-index: 2000;
		overflow: visible;
	}
`;

const InfoRow = styled(ContentRow)`
	height: calc(100vh / 2);
	max-height: 270px;
	background: ${props => props.theme.yellow} url(/static/images/papers-bg.svg) no-repeat center;
	background-size: 1920px 1080px;
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
`;

const OptionsContent = styled(ContentRow)`
	background: ${props => props.theme.grey} url(/static/images/pattern-bg-2.svg) no-repeat top left;
	background-size: cover;
	z-index: 15;
	margin-top: 180px;
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
