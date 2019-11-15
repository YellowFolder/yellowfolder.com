import App, { Container } from 'next/app';
import 'react-datepicker/dist/react-datepicker.css';
import Page from '../components/Page';

class _App extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		// anything returned in getInitialProps is exposed via this.props
		return { pageProps };
	}

	render() {
		const { Component, pageProps, router } = this.props;

		return (
			<Container>
				<Page activeRoute={router.pathname}>
					<Component {...pageProps} />
				</Page>
			</Container>
		);
	}
}

export default _App;
