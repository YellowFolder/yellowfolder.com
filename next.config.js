// const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	cssModules: false,
});

// module.exports = withBundleAnalyzer({
// 	enabled: process.env.ANALYZE === 'true',
// });
