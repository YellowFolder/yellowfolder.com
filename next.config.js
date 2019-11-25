const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

module.exports = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
	target: 'serverless',
	exportTrailingSlash: false,
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty',
		};

		return config;
	},
});
