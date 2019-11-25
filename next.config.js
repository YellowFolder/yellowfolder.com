const withCss = require('@zeit/next-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

module.exports = withCss({
	// target: 'serverless',
	exportTrailingSlash: false,
	exportPathMap: async function() {
		const paths = {
			'/': { page: '/' },
			'/index.html': { page: '/' },
			'/about-us.html': { page: '/about-us' },
			'/contact.html': { page: '/contact' },
			'/privacy-policy.html': { page: '/privacy-policy' },
			'/record-request.html': { page: '/record-request' },
			'/request-success.html': { page: '/request-success' },
			'/schedule-a-yellow-folder-demo.html': { page: '/schedule-a-yellow-folder-demo' },
			'/services.html': { page: '/services' },
			'/weekly-training.html': { page: '/weekly-training' },
		};

		return paths;
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty',
		};

		return config;
	},
});
