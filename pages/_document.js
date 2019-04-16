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
					{this.props.styleTags}
					{/* <!-- Start of HubSpot Embed Code --> */}
					<script
						src="https://js.hscollectedforms.net/collectedforms.js"
						type="text/javascript"
						id="CollectedForms-5071454"
						crossOrigin="anonymous"
						data-leadin-portal-id="5071454"
						data-leadin-env="prod"
						data-loader="hs-scriptloader"
						data-hsjs-portal="5071454"
						data-hsjs-env="prod"
					/>
					<script
						src="https://js.hsadspixel.net/fb.js"
						type="text/javascript"
						id="hs-ads-pixel-5071454"
						data-ads-portal-id="5071454"
						data-ads-env="prod"
						data-loader="hs-scriptloader"
						data-hsjs-portal="5071454"
						data-hsjs-env="prod"
					/>
					<script
						src="//js.hs-analytics.net/analytics/1555018500000/5071454.js"
						type="text/javascript"
						id="hs-analytics"
					/>
					<script
						type="text/javascript"
						id="hs-script-loader"
						async
						defer
						src="//js.hs-scripts.com/5071454.js"
					/>
					{/* <!-- End of HubSpot Embed Code --> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
