import Head from 'next/head';
import Services from '../components/Services';

const ServicesPage = () => (
	<>
		<Head>
			<title>
				Services - Digital Records Storage & Retrieval for Schools |
				YellowFolder
			</title>
			<meta
				name="description"
				content="YellowFolder offers comprehensive school records services including digital storage, quick retrieval, scanning, and AI-powered retention management. Secure, compliant, and easy to use."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/services" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://yellowfolder.com/services" />
			<meta
				property="og:title"
				content="Services - Digital Records Storage & Retrieval for Schools | YellowFolder"
			/>
			<meta
				property="og:description"
				content="YellowFolder offers comprehensive school records services including digital storage, quick retrieval, scanning, and AI-powered retention management. Secure, compliant, and easy to use."
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
				content="https://yellowfolder.com/services"
			/>
			<meta
				property="twitter:title"
				content="Services - Digital Records Storage & Retrieval for Schools | YellowFolder"
			/>
			<meta
				property="twitter:description"
				content="YellowFolder offers comprehensive school records services including digital storage, quick retrieval, scanning, and AI-powered retention management. Secure and compliant."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
		</Head>
		<Services />
	</>
);

export default ServicesPage;
