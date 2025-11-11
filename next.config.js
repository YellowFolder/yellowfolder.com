const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
	trailingSlash: false,
	env: {
		// Only expose non-sensitive data to client-side
		FRESHCHAT_TOKEN: process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN,
		WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN,
	},
	async redirects() {
		return [
			// Redirect www to non-www for all pages (prevents duplicate content)
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'www.yellowfolder.com',
					},
				],
				destination: 'https://yellowfolder.com/:path*',
				permanent: true, // 301 redirect
			},
			// Legacy HTML file extensions
			{
				source: '/index.html',
				destination: '/',
				permanent: true,
			},
			{
				source: '/privacy-policy.html',
				destination: '/privacy-policy',
				permanent: true,
			},
			// Old URL mappings
			{
				source: '/demo',
				destination: '/schedule-a-yellow-folder-demo',
				permanent: true,
			},
			{
				source: '/pricing-calculator',
				destination: '/pricing',
				permanent: true,
			},
			{
				source: '/pricing-guide',
				destination: '/pricing',
				permanent: true,
			},
			{
				source: '/principal',
				destination: '/services',
				permanent: true,
			},
			{
				source: '/student-records',
				destination: '/services',
				permanent: true,
			},
			{
				source: '/free-yellowfolder-webinar',
				destination: '/weekly-training',
				permanent: true,
			},
			// Old blog posts redirect to home (no blog exists)
			{
				source: '/blog/:slug*',
				destination: '/',
				permanent: true,
			},
		];
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
