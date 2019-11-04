const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

module.exports = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});
