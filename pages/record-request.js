import Head from 'next/head';
import RecordRequest from '../components/RecordRequest';

const RecordRequestPage = () => (
	<>
		<Head>
			<title>
				Record Request Form - Retrieve Your School Records | YellowFolder
			</title>
			<meta
				name="description"
				content="Request student or employee records quickly and securely. Submit your record retrieval request and our team will locate your documents. Fast, secure school records access."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/record-request" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://yellowfolder.com/record-request"
			/>
			<meta
				property="og:title"
				content="Record Request Form - Retrieve Your School Records | YellowFolder"
			/>
			<meta
				property="og:description"
				content="Request student or employee records quickly and securely. Submit your record retrieval request and our team will locate your documents. Fast, secure school records access."
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
				content="https://yellowfolder.com/record-request"
			/>
			<meta
				property="twitter:title"
				content="Record Request Form - Retrieve Your School Records | YellowFolder"
			/>
			<meta
				property="twitter:description"
				content="Request student or employee records quickly and securely. Submit your record retrieval request and our team will locate your documents. Fast and secure access."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
		</Head>
		<RecordRequest />
	</>
);

export default RecordRequestPage;
