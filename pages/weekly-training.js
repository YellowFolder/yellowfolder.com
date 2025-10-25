import Head from 'next/head';
import Training from '../components/Training';

const TrainingPage = () => (
	<>
		<Head>
			<title>
				Free Training Sessions - Learn YellowFolder Records Management
			</title>
			<meta
				name="description"
				content="Join free weekly training sessions to master YellowFolder. Learn records management best practices, system features, and tips for K-12 schools. Register for upcoming sessions."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/weekly-training" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://yellowfolder.com/weekly-training"
			/>
			<meta
				property="og:title"
				content="Free Training Sessions - Learn YellowFolder Records Management"
			/>
			<meta
				property="og:description"
				content="Join free weekly training sessions to master YellowFolder. Learn records management best practices, system features, and tips for K-12 schools. Register for upcoming sessions."
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
				content="https://yellowfolder.com/weekly-training"
			/>
			<meta
				property="twitter:title"
				content="Free Training Sessions - Learn YellowFolder Records Management"
			/>
			<meta
				property="twitter:description"
				content="Join free weekly training sessions to master YellowFolder. Learn records management best practices, system features, and tips for K-12 schools. Register now."
			/>
			<meta
				property="twitter:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
		</Head>
		<Training />
	</>
);

export default TrainingPage;
