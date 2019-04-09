import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

export const theme = {
	black: '#393939',
	white: '#fff',
	grey: '#5B6670',
	gray: '#5B6670',
	lightgrey: '#E1E1E1',
	lightgray: '#E1E1E1',
	yellow: '#FFC629',
	red: 'rgb(237, 28, 36)',
	maxWidth: '1200px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
	textShadow: '0px 0px 8px rgba(0,0,0,0.2), 0px 0px 8px rgba(0,0,0,0.2)',
	defaultFont: 'Clear Sans Medium',
	boldFont: 'Clear Sans Bold',
	thinFont: 'Clear Sans',
	marginLeft: '4.5rem',
};

const StyledPage = styled.div`
	background: white;
	color: ${props => props.theme.grey};
	flex: 1 0 auto;
`;

const Inner = styled.div`
	margin: 0;
	padding: 0;
	overflow: hidden;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Clear Sans';
    src:
      local('Clear Sans'),
      url('/static/fonts/ClearSans-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Clear Sans Bold';
    src:
      local('Clear Sans Bold'),
      url('/static/fonts/ClearSans-Bold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Clear Sans Medium';
    src:
      local('Clear Sans Medium'),
      url('/static/fonts/ClearSans-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px; /* set base font size to 10 */
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 1.4rem; /* 1.4rem = 14px. 1.4 * 10 (base font-size) = 14 */
    line-height: 17px;
    font-family: -apple-system, 'Clear Sans Medium', 'Clear Sans', 'Helvetica Neue', Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
    font-feature-settings: 'liga';
    @media
    (-webkit-min-device-pixel-ratio: 2),
    (   min--moz-device-pixel-ratio: 2),
    (     -o-min-device-pixel-ratio: 2/1),
    (        min-device-pixel-ratio: 2),
    (                min-resolution: 192dpi),
    (                min-resolution: 2ddpx) {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
  main {
    display: flex;
    flex-flow: column nowrap;
  }
  svg {
    shape-rendering: geometricPrecision;
  }
  h1,
  h2,
  h3 {
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
    &:hover {
      cursor: pointer;
    }
    &:visited {
      text-decoration: none;
    }
  }
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalStyle />
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
					<Footer />
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
