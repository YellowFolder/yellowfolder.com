import Head from 'next/head';
import Calculator from '../components/Calculator';

const PricingPage = () => (
	<>
		<Head>
			<title>
				YellowFolder Pricing - Affordable School Records Management Solutions
			</title>
			<meta
				name="description"
				content="Calculate your YellowFolder pricing based on your district's needs. Affordable, transparent pricing for cloud-based school records management. Get a custom quote today."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/pricing" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://yellowfolder.com/pricing" />
			<meta
				property="og:title"
				content="YellowFolder Pricing - Affordable School Records Management Solutions"
			/>
			<meta
				property="og:description"
				content="Calculate your YellowFolder pricing based on your district's needs. Affordable, transparent pricing for cloud-based school records management. Get a custom quote today."
			/>
			<meta
				property="og:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
			<meta property="og:site_name" content="YellowFolder" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://yellowfolder.com/pricing" />
			<meta
				property="twitter:title"
				content="YellowFolder Pricing - Affordable School Records Management Solutions"
			/>
			<meta
				property="twitter:description"
				content="Calculate your YellowFolder pricing based on your district's needs. Affordable, transparent pricing for cloud-based school records management. Get a quote today."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
		</Head>
		<Calculator />
	</>
);

export default PricingPage;
