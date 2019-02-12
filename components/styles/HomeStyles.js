import styled from 'styled-components';

const ContentRow = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	background: ${props => props.background || "white"};
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
	padding: 0;
	margin: 90px auto 0;
	width: 100%;
	max-height: 660px;
	height: auto;
	max-width: ${props => props.theme.maxWidth};
`;

const SectionCopy = styled.div`
	order: 1;
	flex: 1 1 auto;
	padding-left: 5.8rem;
	justify-self: flex-start;
	align-self: center;
	width: 50%;
	margin-top: -8rem;
	h1 {
		font-size: 7rem;
		line-height: 120%;
		color: ${props => props.theme.grey};
		font-family: 'Clear Sans Bold';
		font-weight: bold;
		padding: 0;
		margin: 0;
		letter-spacing: 1px;
	}
	p {
    font-size: 26px;
    line-height: 120%;
    color: #5B6670;
    font-family: 'Clear Sans';
    letter-spacing: -0.5px;
    padding: 0;
    margin: 17px 0 0 0;
	}
`;

const MastheadImage = styled.div`
	display: flex;
	order: 2;
	flex: 1 1 auto;
	width: 50%;
	height: auto;
	padding-top: 2.4rem;
	img {
	}
`;

const InfoRow = styled(ContentRow)`
	height: calc(100vh / 2);
	max-height: 350px;
	background: ${props => props.theme.yellow} url(/static/images/papers-bg.svg) no-repeat center center;
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
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;

		.row-left,
		.row-right {
			font-family: 'Clear Sans Bold';
			font-size: 2.7rem;
			font-weight: 700;
			color: ${props => props.theme.white};
			text-shadow: 0px 0px 12px rgba(0,0,0,0.2), 0px 0px 12px rgba(0,0,0,0.2);
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
				font-family: 'Clear Sans';
				font-weight: 400;
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
		font-family: 'Clear Sans Bold';
		font-size: 6.4rem;
		line-height: 58px;
		color: ${props => props.theme.yellow};

		span {
			vertical-align: super;
			font-size: 66%;
			line-height: 0px;
		}
	}

	p {
		font-weight: 400;
		color: ${props => props.theme.grey};
		line-height: 21px;
		text-align: center;
		width: 100%;
	}
`;

const OptionsContent = styled(ContentRow)`
	background: ${props => props.theme.grey} url(/static/images/pattern-bg-2.svg) no-repeat center;
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
			grid-gap: 80px;
			grid-template-columns: repeat(4, minmax(220px, 1fr));

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
