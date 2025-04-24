const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
	trailingSlash: false,
	env: {
		FRESHDESK_KEY: process.env.NEXT_PUBLIC_FRESHDESK_KEY_PROD,
		FRESHDESK_BASE_URL: process.env.NEXT_PUBLIC_FRESHDESK_BASE_URL,
		FRESHCHAT_TOKEN: process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN,
		WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN,
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				net: false,
				tls: false,
			};
		}
		return config;
	},
});
