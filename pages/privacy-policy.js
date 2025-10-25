import React from 'react';
import Head from 'next/head';
import PrivacyPolicy from '../components/PrivacyPolicy';

const PolicyPage = () => (
	<>
		<Head>
			<title>Privacy Policy - How YellowFolder Protects Your Data</title>
			<meta
				name="description"
				content="Learn how YellowFolder protects your school's sensitive data. Our privacy policy outlines data collection, usage, security measures, and compliance with education privacy laws."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/privacy-policy" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://yellowfolder.com/privacy-policy"
			/>
			<meta
				property="og:title"
				content="Privacy Policy - How YellowFolder Protects Your Data"
			/>
			<meta
				property="og:description"
				content="Learn how YellowFolder protects your school's sensitive data. Our privacy policy outlines data collection, usage, security measures, and compliance with education privacy laws."
			/>
			<meta
				property="og:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
			<meta property="og:site_name" content="YellowFolder" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:url"
				content="https://yellowfolder.com/privacy-policy"
			/>
			<meta
				property="twitter:title"
				content="Privacy Policy - How YellowFolder Protects Your Data"
			/>
			<meta
				property="twitter:description"
				content="Learn how YellowFolder protects your school's sensitive data. Our privacy policy outlines data collection, usage, security measures, and compliance with privacy laws."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
		</Head>
		<PrivacyPolicy />
	</>
);

export default PolicyPage;
