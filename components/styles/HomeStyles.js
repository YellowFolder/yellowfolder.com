import styled from 'styled-components';

const Masthead = styled.section`
	background: white;
	background-image: url(static/images/pattern-bg.svg);
	background-position: left top;
  background-size: contain;
  background-repeat: no-repeat;
	display: flex;
	padding: 0;
	margin: 0 auto;
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

const InfoRow = styled.div`
	width: 100vw;
	height: calc(100vh / 2);
	max-height: 350px;
	background: ${props => props.theme.yellow} url('/static/images/papers-bg.svg') no-repeat center center;
	background-size: 1920px 1080px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
`;

const RowContent = styled.div`
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
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


export { Masthead, SectionCopy, MastheadImage, InfoRow, RowContent };
