import Head from 'next/head';
import About from '../components/About';

const AboutPage = () => (
	<>
		<Head>
			<title>About YellowFolder - Education Records Management Experts</title>
			<meta
				name="description"
				content="Learn about YellowFolder's mission to help K-12 schools manage education records more efficiently. Trusted by school districts nationwide for secure, compliant records management."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/about-us" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://yellowfolder.com/about-us" />
			<meta
				property="og:title"
				content="About YellowFolder - Education Records Management Experts"
			/>
			<meta
				property="og:description"
				content="Learn about YellowFolder's mission to help K-12 schools manage education records more efficiently. Trusted by school districts nationwide for secure, compliant records management."
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
				content="https://yellowfolder.com/about-us"
			/>
			<meta
				property="twitter:title"
				content="About YellowFolder - Education Records Management Experts"
			/>
			<meta
				property="twitter:description"
				content="Learn about YellowFolder's mission to help K-12 schools manage education records more efficiently. Trusted by school districts nationwide for secure records management."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
		</Head>
		<About />
	</>
);

export default AboutPage;
