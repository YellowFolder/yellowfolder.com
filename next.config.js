const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
});

const fs = require('fs');
const { join } = require('path');
// const generateJsonFeed = require('./posts/generate-json-feed');
// const { promisify } = require('util');

// const copyFile = promisify(fs.copyFile);
// const staticFilesToCopy = ['static/favicon/favicon.ico'];

module.exports = withMDX({
	target: 'serverless',
	env: {
		DOMAIN: process.env.DOMAIN,
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	webpack(config, { defaultLoaders, isServer, dev }) {
		(config.node = {
			fs: 'empty',
			module: 'empty',
		}),
			config.module.rules.push({
				test: /\.svg$/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true,
						},
					},
				],
			});
		config.module.rules.push({
			test: /\.css$/,
			use: 'raw-loader',
		});
		if (isServer && !dev) {
			const originalEntry = config.entry;
			config.entry = async () => {
				const entries = { ...(await originalEntry()) };
				entries['./posts/rss-feed.js'] = './posts/rss-feed.js';
				return entries;
			};
		}
		return config;
	},
});

// module.exports = withBundleAnalyzer({
// 	analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
// 	analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
// 	bundleAnalyzerConfig: {
// 		server: {
// 			analyzerMode: 'static',
// 			reportFilename: '../bundles/server.html',
// 		},
// 		browser: {
// 			analyzerMode: 'static',
// 			reportFilename: '../bundles/client.html',
// 		},
// 	},
// });
