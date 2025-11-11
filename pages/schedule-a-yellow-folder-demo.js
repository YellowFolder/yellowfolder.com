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

			{/* VideoObject Schema for Google Video Indexing */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'VideoObject',
						name:
							'YellowFolder Demo - See Our Records Management System in Action',
						description:
							'Watch a demo of YellowFolder to see how our cloud-based records management system helps K-12 schools digitize, organize, and retrieve education records efficiently.',
						thumbnailUrl:
							'https://i.ytimg.com/vi/gBqr0GX9mhQ/maxresdefault.jpg',
						uploadDate: '2024-01-15T00:00:00Z',
						contentUrl: 'https://www.youtube.com/watch?v=gBqr0GX9mhQ',
						embedUrl: 'https://www.youtube.com/embed/gBqr0GX9mhQ',
						publisher: {
							'@type': 'Organization',
							name: 'YellowFolder',
							logo: {
								'@type': 'ImageObject',
								url: 'https://yellowfolder.com/static/images/yf-logo.png',
							},
						},
					}),
				}}
			/>
		</Head>
		<Demo />
	</>
);

export default DemoPage;
