import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	// load styles before initial render so that page does not initially render without any styling.
	// in other words, this prevents a flicker of the screen after render.
	// unique to Next.js (https://github.com/zeit/next.js/#custom-document)
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
					{this.props.styleTags}
				</Head>
				<body className="no-js">
					<script
						dangerouslySetInnerHTML={{
							__html: `document.body.classList.remove('no-js');`,
						}}
					/>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
