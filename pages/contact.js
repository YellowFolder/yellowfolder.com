import Head from 'next/head';
import Contact from '../components/Contact';

const ContactPage = () => (
	<>
		<Head>
			<title>
				Contact YellowFolder - Get in Touch with Our Records Management Team
			</title>
			<meta
				name="description"
				content="Contact YellowFolder for questions about school records management, pricing, or support. Our team is ready to help your district manage education records more efficiently."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/contact" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://yellowfolder.com/contact" />
			<meta
				property="og:title"
				content="Contact YellowFolder - Get in Touch with Our Records Management Team"
			/>
			<meta
				property="og:description"
				content="Contact YellowFolder for questions about school records management, pricing, or support. Our team is ready to help your district manage education records more efficiently."
			/>
			<meta
				property="og:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
			<meta property="og:site_name" content="YellowFolder" />
			<meta property="fb:app_id" content="1972894570219949" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://yellowfolder.com/contact" />
			<meta
				property="twitter:title"
				content="Contact YellowFolder - Get in Touch with Our Records Management Team"
			/>
			<meta
				property="twitter:description"
				content="Contact YellowFolder for questions about school records management, pricing, or support. Our team is ready to help your district manage education records efficiently."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
		</Head>
		<Contact />
	</>
);

export default ContactPage;
