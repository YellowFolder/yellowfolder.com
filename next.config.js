const withCss = require('@zeit/next-css');

module.exports = withCss({
	target: 'serverless',
	trailingSlash: false,
	env: {
		FRESHDESK_KEY: process.env.NEXT_PUBLIC_FRESHDESK_KEY_PROD,
		FRESHDESK_BASE_URL: process.env.NEXT_PUBLIC_FRESHDESK_BASE_URL,
		FRESHCHAT_TOKEN: process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN,
		WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN,
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			console: true,
			fs: 'empty',
			net: 'empty',
			tls: 'empty',
		};

		return config;
	},
	async exportPathMap() {
		const paths = {
			'/': { page: '/' },
			'/index.html': { page: '/' },
			'/about-us.html': { page: '/about-us' },
			'/contact.html': { page: '/contact' },
			'/privacy-policy.html': { page: '/privacy-policy' },
			'/help.html': { page: '/help' },
			'/record-request.html': { page: '/record-request' },
			'/request-success.html': { page: '/request-success' },
			'/schedule-a-yellow-folder-demo.html': {
				page: '/schedule-a-yellow-folder-demo',
			},
			'/services.html': { page: '/services' },
			'/weekly-training.html': { page: '/weekly-training' },
			'/pricing.html': { page: '/pricing' },
		};
		return paths;
	},
});
