import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
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
	maxWidth: '1200px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
	background: white;
	color: ${props => props.theme.black};
`;

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Clear Sans';
    src: url('/static/fonts/ClearSans-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Clear Sans Bold';
    src: url('/static/fonts/ClearSans-Bold.woff2') format('woff2');
    font-weight: bold;
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
    font-size: 1.4rem; /* 1.4rem = 14px. 1.4 * 10 (base font-size) = 14 */
    line-height: 17px;
    font-family: 'Clear Sans', 'Helvetica Neue', Helvetica;
    font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }
  svg {
    shape-rendering: geometricPrecision;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
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
					<Inner>
            { this.props.children }
          </Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
