// const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	cssModules: true,
});

// module.exports = withBundleAnalyzer({
// 	enabled: process.env.ANALYZE === 'true',
// });
