import styled from 'styled-components';
import { size } from './device';

const AboutPage = styled.main`
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
`;

const PageHeader = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-flow: column nowrap;
	background: transparent;
	margin: 0 auto;
	position: relative;
	height: auto;
	width: 100%;
	overflow: visible;
	z-index: 7000;

	#header-bg {
		background: transparent url(static/images/about-pattern-background.svg);
		background-position-x: left;
		background-position-y: center;
		background-size: 100vw;
		background-repeat: no-repeat;
		margin: 0;
		z-index: 7000;
		width: 100% !important;
		height: 100%;
		padding-bottom: 250px;
	}

	.header-text {
		margin-top: 80px;
	}

	.page-intro,
	.team-greeting {
		margin: 0 0 0 ${props => props.theme.marginLeft};
		max-width: ${props => props.theme.maxWidth};
		margin: 0 auto;
		width: 80%;
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
		/* width: 100%; */
		color: ${props => props.theme.yellow};
		font-size: calc(42px + (68 - 42) * ((100vw - 1000px) / (1800 - 1000)));
		margin-top: 25px;
		padding: 0;
		font-family: ${props => props.theme.boldFont};
		line-height: 100%;
	}

	@media (max-width: ${size.laptopL}) {
		#header-bg {
			background-size: 150vw;
			background-position-x: 25%;
		}
	}

	@media (max-width: ${size.tablet}) {
		#header-bg {
			.header-text {
				.page-intro {
					margin: 0 auto;
					width: 90%;
				}
				.team-greeting {
					width: 90%;
				}
			}
		}
	}

	@media (max-width: ${size.mobileL}) {
		#header-bg {
			padding-bottom: 130px;
		}
		.header-text {
			margin: 40px auto 0;
			width: 90%;
			.page-intro,
			.team-greeting {
				width: 100%;
			}
			.page-intro {
				h1 {
					font-size: ;
				}
			}
		}
	}

	@media (max-width: ${size.mobileM}) {
		#header-bg {
			background-position-x: right;
			padding-bottom: 50px;
			.header-text {
				margin: 40px auto;
				.page-intro {
					h1 {
						font-size: calc(66px + (92 - 66) * ((100vw - 1000px) / (1800 - 1000)));
					}
					p {
						width: 100%;
						padding-top: 2rem;
					}
				}
				.team-greeting {
					font-size: calc(44px + (68 - 42) * ((100vw - 1000px) / (1800 - 1000)));
				}
			}
		}
	}
`;

const TeamContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(10, minmax(50px, 1fr));
	grid-template-rows: repeat(24, minmax(auto, 100px));
	position: relative;
	height: auto;
	width: 100%;
	margin-bottom: -45px;
	z-index: 7000;
	margin-top: -220px;

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
		width: 100%;
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
			a {
				font-weight: 600;
				color: ${props => props.theme.grey};
				&:hover {
					text-decoration: underline;
				}
			}
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

	@media (max-width: ${size.laptopL}) {
		grid-template-columns: auto 1fr auto;
		grid-auto-rows: 100px;
		margin-bottom: 0;
		padding: 0;
		.member-row {
			flex-flow: column nowrap;
			grid-column: 1 / -1;
			grid-row: 1 / 15;

			.member {
				margin: 0 auto;
				max-width: 550px;

				&#first,
				&#second {
					margin: 0;
				}

				.person {
					img {
					}
				}
			}
		}

		#grey-bg {
			grid-column: 1 / -1;
			grid-row: 2 / 10;
			margin-top: 25px;
		}

		#mid-break {
			grid-row: 13 / 17;
			margin-top: 0;
			z-index: 3000;
		}

		#file-cabinet {
			display: none;
		}

		#monitor {
			grid-column: 2 / 3;
			grid-row: 14 / 19;
			justify-content: center;
			z-index: 5000;
			img {
				max-width: 600px;
				margin: 0;
				object-fit: contain;
			}
		}

		#printer {
			grid-column: 2 / 3;
			grid-row: 19 / 26;
			img {
				max-width: 600px;
				margin: 0;
				object-fit: contain;
			}
		}

		#folder-bottom {
			grid-column: 2 / 3;
			grid-row: 26 / 34;
			align-items: flex-start;
			justify-content: center;
		}

		#btm-break {
			grid-column: 1 / -1;
			grid-row: 24 / 30;
			margin: 0;
			justify-content: center;
			#btm-bg {
				width: 100%;
				height: 100%;
				background-size: 150vw;
				background-position: left;
			}
		}

		#text-bottom {
			grid-column: 2 / 3;
			grid-row: 33 / 39;
			margin-top: 25px;
			padding: 0 50px 50px;
			max-width: initial;
			align-items: center;
			justify-content: space-evenly;

			span,
			span ~ p {
				width: 50%;
			}

			span p {
				padding-top: 1rem;
			}

			span p,
			p {
				font-size: 2rem;
				line-height: 120%;
			}
		}
	}

	@media (max-width: 900px) {
		#text-bottom {
			span,
			span ~ p {
				width: 80%;
			}
		}
	}

	@media (max-width: ${size.tablet}) {
		margin-top: -200px;
	}

	@media (max-width: 600px) and (min-width: ${size.mobileL}) {
		> div {
			margin: 0;
			max-width: 600px !important;
			img {
				max-width: 100% !important;
			}
		}
		.member-row {
			margin-top: -60px;
		}
		#text-bottom {
			grid-row: 33 / 41;
		}
	}

	@media (max-width: ${size.mobileL}) and (min-width: 420px) {
		.member-row {
			margin-top: 100px !important;
		}
	}

	@media (max-width: ${size.mobileL}) {
		margin-top: -100px;
		max-width: 100vw;
		> div {
			width: 100vw;
		}
		.member-row {
			margin: 0;
			width: 100vw;
			justify-content: baseline;
			grid-row: 1 / 12;
		}
		.member-row {
			grid-row: 1 / 11;
		}
		#grey-bg {
			grid-row: 2 / 9;
		}
		#mid-break {
			grid-row: 13 / 18;
		}
		#monitor {
			grid-row: 11 / 15;
			justify-content: initial;
		}
		#printer {
			z-index: 5000;
			align-items: initial;
			justify-content: initial;
			grid-row: 15 / 20;
		}
		#folder-bottom {
			align-items: initial;
			justify-content: initial;
			grid-row: 20 / 26;
		}
		#btm-break {
			grid-row: 21 / 26;
			#btm-bg {
				background-position: bottom;
			}
		}
		#text-bottom {
			grid-row: 26 / 33;
			padding: 0 16px;
			margin-top: 0;
			align-items: center;
			justify-content: space-evenly;
			span p {
				padding-top: 2rem;
			}
			p {
				padding-top: 1rem;
			}
		}
		> div img {
			max-width: 100% !important;
		}
	}

	@media (max-width: ${size.mobileM}) {
		margin-top: -125px;
		.member-row {
			grid-row: 1 / 11;
		}
		#grey-bg {
			grid-row: 2 / 10;
		}
		#mid-break {
			grid-row: 11 / 14;
		}
		#monitor {
			grid-row: 10 / 13;
			justify-content: initial;
			img {
				max-width: 100%;
			}
		}
		#printer {
			z-index: 5000;
			align-items: initial;
			justify-content: initial;
			grid-row: 13 / 17;
			img {
				max-width: 100%;
			}
		}
		#folder-bottom {
			align-items: initial;
			justify-content: initial;
			grid-row: 17 / 22;
			img {
				max-width: 100%;
			}
		}
		#btm-break {
			grid-row: 19 / 22;
		}
		#text-bottom {
			grid-row: 22 / 31;
			padding: 0 16px;
			margin-top: 0;
			align-items: center;
			justify-content: space-evenly;
		}
	}
`;

export { AboutPage, PageHeader, TeamContainer };
