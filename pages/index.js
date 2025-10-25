import Head from 'next/head';
import Home from '../components/Home';

const HomePage = () => (
	<>
		<Head>
			<title>
				YellowFolder - Cloud-Based Student Records Management for K-12 Schools
			</title>
			<meta
				name="description"
				content="YellowFolder provides secure, cloud-based student records management for K-12 schools. Store, retrieve, and manage education records efficiently with AI-powered retention tools."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://yellowfolder.com/" />
			<meta
				property="og:title"
				content="YellowFolder - Cloud-Based Student Records Management for K-12 Schools"
			/>
			<meta
				property="og:description"
				content="YellowFolder provides secure, cloud-based student records management for K-12 schools. Store, retrieve, and manage education records efficiently with AI-powered retention tools."
			/>
			<meta
				property="og:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
			<meta property="og:site_name" content="YellowFolder" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://yellowfolder.com/" />
			<meta
				property="twitter:title"
				content="YellowFolder - Cloud-Based Student Records Management for K-12 Schools"
			/>
			<meta
				property="twitter:description"
				content="YellowFolder provides secure, cloud-based student records management for K-12 schools. Store, retrieve, and manage education records efficiently."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>

			{/* Schema.org Organization Markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'YellowFolder',
						url: 'https://yellowfolder.com',
						logo: 'https://yellowfolder.com/static/images/yf-logo.png',
						description:
							'Cloud-based student records management system for K-12 schools',
						sameAs: [
							'https://www.linkedin.com/company/yellowfolder',
							'https://twitter.com/yellowfolder',
						],
						contactPoint: {
							'@type': 'ContactPoint',
							contactType: 'Customer Service',
							url: 'https://yellowfolder.com/contact',
						},
						address: {
							'@type': 'PostalAddress',
							addressCountry: 'US',
						},
						knowsAbout: [
							'Student Records Management',
							'Education Records',
							'K-12 Schools',
							'Digital Records Storage',
							'Records Retention',
						],
					}),
				}}
			/>
		</Head>
		<Home />
	</>
);

export default HomePage;
