const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
});

const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
const staticFilesToCopy = ['static/favicon/favicon.ico'];

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		if (dev) return defaultPathMap;
		// generateJsonFeed(outDir);
		await Promise.all(staticFilesToCopy.map(file => copyFile(join(dir, file), join(outDir, file))));
		return defaultPathMap;
	},
});

module.exports = withBundleAnalyzer({
	analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
	analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
	bundleAnalyzerConfig: {
		server: {
			analyzerMode: 'static',
			reportFilename: '../bundles/server.html',
		},
		browser: {
			analyzerMode: 'static',
			reportFilename: '../bundles/client.html',
		},
	},
});
