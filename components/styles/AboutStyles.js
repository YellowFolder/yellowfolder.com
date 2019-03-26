import styled from 'styled-components';

const AboutPage = styled.main`
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	padding: 0;
	margin: 80px auto 0;
	width: 100%;
	height: 100%;
`;

const PageHeader = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-flow: column nowrap;
	background: transparent url(static/images/about-pattern-background.svg);
	background-position-x: left;
	background-position-y: center;
	background-size: 1920px;
	background-repeat: no-repeat;
	margin: 0 0 0 ${props => props.theme.marginLeft};
	position: relative;
	max-height: 450px;
	height: auto;
	width: 100%;

	.page-intro,
	.team-greeting {
		max-width: ${props => props.theme.maxWidth};
		margin: 0 auto;
	}

	.page-intro {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-flow: column nowrap;
		justify-self: flex-start;

		h1 {
			font-size: calc(64px + (92 - 64) * ((100vw - 1000px) / (1800 - 1000)));
			line-height: 120%;
			color: ${props => props.theme.grey};
			font-family: ${props => props.theme.boldFont};
			padding: 0;
			margin: 0;
		}
		p {
			font-size: calc(22px + (28 - 22) * ((100vw - 1000px) / (1800 - 1000)));
			line-height: 120%;
			color: ${props => props.theme.grey};
			padding: 1rem 0 0 0;
			margin: 0;
			width: 80%;
		}
	}

	.team-greeting {
		width: 100%;
		color: ${props => props.theme.yellow};
		font-size: calc(42px + (68 - 42) * ((100vw - 1000px) / (1800 - 1000)));
		margin-top: 25px;
		padding: 0;
		font-family: ${props => props.theme.boldFont};
		line-height: 100%;
	}
`;

const TeamContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(10, minmax(50px, 1fr));
	grid-template-rows: repeat(24, minmax(auto, 100px));
	position: relative;
	height: 100%;
	width: 100%;
	margin-bottom: -45px;
	margin-top: 100px;

	.member-row {
		grid-column: 1 / -1;
		grid-row: 1 / 8;
		max-width: ${props => props.theme.maxWidth};
		margin: 0 auto;
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-start;
		justify-content: center;

		.member {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			margin: 0 auto;
			max-width: 610px;

			&#first {
				margin: 0 1.25% 0 2.5%;
			}
			&#second {
				margin: 0 2.5% 0 1.25%;
			}

			.person {
				width: 100%;
				z-index: 5000;
				width: fit-content;
				margin: 0 2.5%;
				padding: 0 0%;

				img {
					height: auto;
					width: 100%;
					object-fit: cover;
					max-width: 700px;
				}
			}
		}
	}

	#grey-bg {
		grid-column: 1 / -1;
		grid-row: 3 / 9;
		background-color: ${props => props.theme.grey};
	}

	#file-cabinet {
		grid-column: 4 / 8;
		grid-row: 4 / 13;
		margin-top: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		/* width: 100%; */
		img {
			height: auto;
			width: 100%;
			max-width: 325px;
		}
	}

	#monitor {
		grid-column: 1 / span 5;
		grid-row: 9 / span 5;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		z-index: 1000;
		img {
			height: auto;
			max-width: 600px;
		}
	}

	#printer {
		grid-column: 6 / 11;
		grid-row: 10 / span 7;
		display: flex;
		align-items: baseline;
		justify-content: flex-start;
		z-index: 1000;
		img {
			height: auto;
			max-width: 600px;
			margin: 0 auto;
		}
	}

	#folder-bottom {
		grid-column: 1 / span 5;
		grid-row: 14 / span 8;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		z-index: 5000;
		/* max-width: 600px; */
		img {
			height: auto;
			object-fit: contain;
		}
	}

	#text-bottom {
		grid-column: 6 / 10;
		padding: 0 25px;
		grid-row: 17 / span 5;
		display: flex;
		flex-flow: column nowrap;
		/* align-items: flex-start; */
		justify-content: space-evenly;
		max-width: 600px;

		span {
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: center;
			height: auto;
			h3,
			p {
				margin: 1rem 0;
			}
			h3 {
				font-size: 4.4rem;
				line-height: 100%;
				padding: 0;
				font-family: ${props => props.theme.boldFont};
				color: ${props => props.theme.grey};
			}
			p {
				font-size: 2rem;
				line-height: 120%;
				color: ${props => props.theme.grey};
				padding: 0;
				margin: 0;
				font-weight: 400;
			}
		}

		p {
			font-size: 1.6rem;
			line-height: 120%;
			padding: 0;
			margin: 0;
		}
	}

	#mid-break {
		grid-column: 1 / -1;
		grid-row: 12 / 16;
		background-color: ${props => props.theme.yellow};
		background-image: url(/static/images/about-row-background.svg);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		width: 100% !important;
		margin-top: -50px;
	}

	#btm-break {
		grid-column: 1 / -1;
		grid-row: 23 / -1;
		background-color: ${props => props.theme.grey};
		margin: -50px 0 0 0;
		padding: 0;
		width: 100% !important;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		#btm-bg {
			width: 60%;
			height: 100%;
			background-image: url(/static/images/pattern-bg.svg);
			background-size: 1180px;
			background-position-x: left;
			background-position-y: center;
			background-repeat: no-repeat;
		}
	}
`;

export { AboutPage, PageHeader, TeamContainer };
