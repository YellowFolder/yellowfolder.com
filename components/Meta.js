/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Script from 'next/script';

const title =
	process.env.NODE_ENV === 'development' || !!process.env.STAGING
		? 'YF [DEMO]'
		: 'YellowFolder';

const Meta = () => (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link
				rel="preload"
				href="/static/fonts/ClearSans-Medium.woff2"
				as="font"
				type="font/woff2"
				crossOrigin="anonymous"
			/>
			<link
				rel="preload"
				href="/static/fonts/ClearSans-Regular.woff2"
				as="font"
				type="font/woff2"
				crossOrigin="anonymous"
			/>
			<link
				rel="preload"
				href="/static/fonts/ClearSans-Bold.woff2"
				as="font"
				type="font/woff2"
				crossOrigin="anonymous"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/static/favicon/apple-touch-icon.png?v=kPvAPQRbj8"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/static/favicon/favicon-32x32.png?v=kPvAPQRbj8"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/static/favicon/favicon-16x16.png?v=kPvAPQRbj8"
			/>
			<link
				rel="manifest"
				href="/static/favicon/site.webmanifest?v=kPvAPQRbj8"
			/>
			<link
				rel="mask-icon"
				href="/static/favicon/safari-pinned-tab.svg?v=kPvAPQRbj8"
				color="#ffc629"
			/>
			<link
				rel="shortcut icon"
				href="/static/favicon/favicon.ico?v=kPvAPQRbj8"
			/>
			<meta name="msapplication-TileColor" content="#2d89ef" />
			<meta name="theme-color" content="#29abe2"></meta>
			<meta
				name="description"
				content="YellowFolder provides a cloud-based, digital file cabinet where your school system can safely store, retrieve and manage all of their Administrative, Employee, Special Education, and Student Records."
			/>
			<title>{title}</title>
		</Head>
		{/* Google Analytics 4 */}
		<Script
			strategy="afterInteractive"
			src={`https://www.googletagmanager.com/gtag/js?id=${process.env
				.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-D0445ZZ0TQ'}`}
		/>
		<Script
			id="google-analytics"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
						'G-D0445ZZ0TQ'}', {
						page_path: window.location.pathname,
					});
				`,
			}}
		/>
	</>
);

export default Meta;
