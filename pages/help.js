import React from 'react';
import Head from 'next/head';
import Help from '../components/Help';

const HelpPage = () => (
	<>
		<Head>
			<title>Help Center - YellowFolder Support & Resources</title>
			<meta
				name="description"
				content="Find answers to common questions about YellowFolder. Access tutorials, guides, and support resources for school records management. Get help with your district's needs."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/help" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://yellowfolder.com/help" />
			<meta
				property="og:title"
				content="Help Center - YellowFolder Support & Resources"
			/>
			<meta
				property="og:description"
				content="Find answers to common questions about YellowFolder. Access tutorials, guides, and support resources for school records management. Get help with your district's needs."
			/>
			<meta
				property="og:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
			<meta property="og:site_name" content="YellowFolder" />
			<meta property="fb:app_id" content="1972894570219949" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://yellowfolder.com/help" />
			<meta
				property="twitter:title"
				content="Help Center - YellowFolder Support & Resources"
			/>
			<meta
				property="twitter:description"
				content="Find answers to common questions about YellowFolder. Access tutorials, guides, and support resources for school records management. Get help now."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
		</Head>
		<Help />
	</>
);

export default HelpPage;
