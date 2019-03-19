import styled from 'styled-components';

const AboutPage = styled.main`
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	padding: 0;
	margin: 80px auto;
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
	padding-top: 8rem;
	padding-bottom: 4rem;

	.page-intro,
	.team-greeting {
		max-width: ${props => props.theme.maxWidth};
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
		color: ${props => props.theme.yellow};
		font-size: calc(42px + (68 - 42) * ((100vw - 1000px) / (1800 - 1000)));
		margin: 50px 0 0;
		padding: 50px 0;
		font-family: ${props => props.theme.boldFont};
		line-height: 100%;
	}
`;

const TeamContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(10, minmax(50px, 1fr));
	grid-template-rows: 50px repeat(23, minmax(auto, 100px));
	position: relative;
	height: 100%;
	width: 100%;
	margin-top: 50px;

	.member-row {
		display: grid;
		grid-template-rows: 50px repeat(6, minmax(150px, 1fr));
		grid-template-columns: repeat(24, minmax(auto, 1fr));
		grid-column: 1 / 24;
		grid-row: 2 / 9;
		grid-auto-flow: dense;
		grid-auto-rows: 50px;
		grid-auto-columns: 50px;
		width: 100%;
		justify-items: center;

		&#top {
			.member {
				display: grid;
				grid: repeat(12, 50px) / repeat(12, 50px);
				grid-row: 2 / 7;
				grid-auto-flow: dense;
				grid-auto-rows: 50px;
				grid-auto-columns: 50px;
				width: 100%;
				max-width: 600px;
				justify-items: center;

				div > img {
					height: auto;
					width: 100%;
					object-fit: contain;
				}

				.folder,
				.person,
				.bio {
					width: 100%;
				}

				&#first {
					grid-column: 1 / 13;
					margin-top: 33px;
					.folder {
						z-index: 1000;
						grid-row: 1 / 13;
						grid-column: 2 / 13;
						img {
							max-width: 500px;
						}
					}
					.person {
						z-index: 5000;
						grid-row: 1 / 6;
						grid-column: 3 / 9;
						transform: matrix(0.9781, -0.2079, 0.2079, 0.9781, -26, 35);
						img {
							max-width: 300px;
						}
					}
					.bio {
						z-index: 3000;
						grid-row: 7 / 14;
						grid-column: 6 / 11;
						transform: matrix(0.9781, 0.2079, -0.2079, 0.9781, 37, -21);
						img {
							max-width: 285px;
						}
					}
				}

				&#second {
					margin-top: -33px;
					grid-column: 12 / 24;

					.folder {
						grid-row: 1 / 13;
						grid-column: 2 / 13;
						z-index: 1000;
						img {
							max-width: 500px;
						}
					}
					.person {
						transform: matrix(0.9903, 0.1392, -0.1392, 0.9903, 20, -19);
						z-index: 3000;
						grid-row: 3 / 5;
						grid-column: 6 / 12;
						img {
							max-width: 350px;
						}
					}
					.bio {
						z-index: 5000;
						transform: matrix(0.9903, -0.1392, 0.1392, 0.9903, -20, 18);
						grid-row: 7 / 14;
						grid-column: 5 / 10;
						img {
							max-width: 285px;
						}
					}
				}
			}
		}
	}

	#grey-bg {
		grid-column: 1 / -1;
		grid-row: 3 / 10;
		background-color: ${props => props.theme.grey};
	}

	#file-cabinet {
		grid-column: 4 / 8;
		grid-row: 7 / 14;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		/* width: 100%; */
		img {
			height: auto;
			width: 100%;
			max-width: 375px;
		}
	}

	#monitor {
		grid-column: 1 / span 5;
		grid-row: 11 / span 5;
		display: flex;
		align-items: baseline;
		justify-content: center;
		z-index: 1000;
		img {
			height: auto;
			width: 100%;
			max-width: 600px;
		}
	}

	#printer {
		grid-column: 7 / 11;
		grid-row: 12 / span 6;
		display: flex;
		align-items: baseline;
		justify-content: center;
		z-index: 1000;
		img {
			height: auto;
			width: 100%;
			max-width: 600px;
		}
	}

	#folder-bottom,
	#text-bottom {
		display: none;
	}

	#bottom-break {
		grid-column: 1 / -1;
		grid-row: 14 / 18;
		margin: 0px 0 15px 0;
		background-color: ${props => props.theme.yellow};
		background-image: url(/static/images/about-row-background.svg);
		background-size: 50%;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		width: 100% !important;
	}
`;

export { AboutPage, PageHeader, TeamContainer };
