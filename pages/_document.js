import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	// load styles before initial render so that page does not initially render without any styling.
	// in other words, this prevents a flicker of the screen after render.
	// unique to Next.js (https://github.com/zeit/next.js/#custom-document)
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	// render() {
	// 	return (
	// 		<html lang="en">
	// 			<Head>{this.props.styleTags}</Head>
	// 			<body>
	// 				<Main />
	// 				<NextScript />
	// 			</body>
	// 		</html>
	// 	);
	// }
}
