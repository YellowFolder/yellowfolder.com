import App from 'next/app';
import Page from '../components/Page';

class _App extends App {
	render() {
		const { Component, pageProps, router } = this.props;

		return (
			<Page activeRoute={router.pathname}>
				<Component {...pageProps} />
			</Page>
		);
	}
}

export default _App;
