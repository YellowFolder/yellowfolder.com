import React from 'react';
import Head from 'next/head';
import Demo from '../components/Demo';

const DemoPage = () => (
	<>
		<Head>
			<title>
				Schedule a Demo - See YellowFolder Records Management in Action
			</title>
			<meta
				name="description"
				content="Schedule a free demo to see how YellowFolder simplifies school records management. Learn how to digitize, organize, and retrieve education records efficiently. Book your demo today."
			/>

			{/* Canonical URL */}
			<link
				rel="canonical"
				href="https://yellowfolder.com/schedule-a-yellow-folder-demo"
			/>

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://yellowfolder.com/schedule-a-yellow-folder-demo"
			/>
			<meta
				property="og:title"
				content="Schedule a Demo - See YellowFolder Records Management in Action"
			/>
			<meta
				property="og:description"
				content="Schedule a free demo to see how YellowFolder simplifies school records management. Learn how to digitize, organize, and retrieve education records efficiently. Book your demo today."
			/>
			<meta
				property="og:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
			<meta property="og:site_name" content="YellowFolder" />
			<meta property="fb:app_id" content="1972894570219949" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:url"
				content="https://yellowfolder.com/schedule-a-yellow-folder-demo"
			/>
			<meta
				property="twitter:title"
				content="Schedule a Demo - See YellowFolder Records Management in Action"
			/>
			<meta
				property="twitter:description"
				content="Schedule a free demo to see how YellowFolder simplifies school records management. Learn how to digitize, organize, and retrieve education records efficiently."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
		</Head>
		<Demo />
	</>
);

export default DemoPage;
