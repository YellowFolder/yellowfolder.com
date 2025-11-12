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
				content="Estimate your YellowFolder pricing based on your district's student population and needs. Affordable, transparent pricing for cloud-based school records management. Use our interactive calculator today."
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
				content="Estimate your YellowFolder pricing based on your district's student population and needs. Affordable, transparent pricing for cloud-based school records management. Use our interactive calculator today."
			/>
			<meta
				property="og:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
			<meta property="og:site_name" content="YellowFolder" />
			<meta property="fb:app_id" content="1972894570219949" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://yellowfolder.com/pricing" />
			<meta
				property="twitter:title"
				content="YellowFolder Pricing - Affordable School Records Management Solutions"
			/>
			<meta
				property="twitter:description"
				content="Estimate your YellowFolder pricing based on your district's student population. Affordable, transparent pricing for school records management. Use our calculator today."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>

			{/* SoftwareApplication Schema for Pricing Calculator */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'SoftwareApplication',
						name: 'YellowFolder Pricing Calculator',
						applicationCategory: 'BusinessApplication',
						description:
							'Interactive pricing calculator for estimating YellowFolder school records management costs. Enter your district student population and select record series to see estimated first-year pricing for Student Records, Special Education Records, Employee Records, and Administrative Records management.',
						url: 'https://yellowfolder.com/pricing',
						offers: {
							'@type': 'Offer',
							price: '0',
							priceCurrency: 'USD',
							description:
								'Free pricing calculator tool. Actual service pricing varies by district size and needs.',
						},
						operatingSystem: 'Web Browser',
						softwareVersion: '1.0',
						provider: {
							'@type': 'Organization',
							name: 'YellowFolder',
							url: 'https://yellowfolder.com',
						},
						applicationSubCategory: 'Pricing Calculator',
						featureList: [
							'Student Records pricing estimation',
							'Special Education Records pricing estimation',
							'Employee Records pricing estimation',
							'Administrative Records pricing estimation',
							'Interactive cost breakdown by category',
							'First-year cost projection',
							'Instant pricing estimates',
						],
						targetProduct: {
							'@type': 'SoftwareApplication',
							name: 'YellowFolder',
							applicationCategory: 'EducationSoftware',
							description: 'Cloud-based school records management system',
						},
					}),
				}}
			/>
		</Head>
		<Calculator />
	</>
);

export default PricingPage;
