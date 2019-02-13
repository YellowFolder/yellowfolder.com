import styled from 'styled-components';

const AboutPage = styled.div`
	background: white;
	display: grid;
	grid-template-columns: repeat(12, minmax(100px, 1fr));
	grid-template-rows: repeat(12, minmax(100px, 1fr));
	padding: 0;
	margin: 90px 0 0 0;
	width: 100%;
	height: 100%;
`;

const PageHeader = styled.div`
	display: grid;
	background: transparent url(static/images/about-pattern-background.svg);
	background-position-x: -120px;
	background-position-y: -240px;
	background-size: 110%;
	background-repeat: no-repeat;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 0 0 ${props => props.theme.marginLeft};
	position: relative;

	grid-template-columns: minmax(calc(100vw - 70vw), 0.7fr);
	grid-template-rows: [row1-start] 0.5fr [row1-end row2-start] 0.5fr [row2-end];
	grid-column: span 12;
	grid-row: 1 / 7;

	.page-intro {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-flow: column nowrap;
		justify-self: flex-start;

		h1 {
			font-size: 5rem;
			line-height: 120%;
			color: ${props => props.theme.grey};
			font-family: ${props => props.theme.boldFont};
			padding: 0;
			margin: 0;
		}
		p {
			font-size: 20px;
			line-height: 100%;
			color: ${props => props.theme.grey};
			padding: 0;
			margin: 0;
		}
	}

	.team-greeting {
		color: ${props => props.theme.yellow};
		font-size: 40px;
		margin: 0;
		padding: 0;
		font-family: ${props => props.theme.boldFont};
		line-height: 100%;
	}
`;

const TeamContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(25%, 1fr));
	grid-template-rows: repeat(4, minmax(25%, 1fr));
	grid-column: span 12;
	grid-row: span 6;
	position: relative;
	background-color: ${props => props.theme.grey};
	height: 100%;
`;

const MemberRow = styled.div`
	display: grid;
	grid: repeat(4, minmax(50px, 1fr)) / repeat(auto-fit, minmax(50px, 1fr));
	grid-column: span 4;
	grid-row: span 4;
`;

const Member = styled.div`
	display: grid;
	grid: repeat(8, minmax(50px, 1fr)) / repeat(auto-fit, minmax(50px, 1fr));
	grid-column: span 3;
	grid-row: 2 / 3;
	grid-auto-flow: row;

	:first-child {
		background-color: rgba(255, 124, 0, 0.5);
	}
	background-color: rgba(0, 124, 255, 0.5);
`;

export { AboutPage, PageHeader, TeamContainer, MemberRow, Member };
