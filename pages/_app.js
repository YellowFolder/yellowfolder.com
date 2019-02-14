import App, { Container } from 'next/app';
import Page from '../components/Page';

class _App extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		// this exposes the query to the user.
		// pageProps.query = ctx.query;
		// anything returned in getInitialProps is exposed via this.props
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Page>
					<Component {...pageProps} />
				</Page>
			</Container>
		);
	}
}

export default _App;
