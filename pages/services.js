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

			{/* Service Schema for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@graph': [
							{
								'@type': 'Service',
								'@id': 'https://yellowfolder.com/services#student-records',
								serviceType: 'Student Records Management',
								name: 'Student Records Management Service',
								description:
									'Cloud-based student records management system for K-12 schools. Digitize, organize, and retrieve education records securely with FERPA compliance. Manage transcripts, grade reports, applications, immunization records, and all student documentation with unlimited storage and quick retrieval.',
								provider: {
									'@type': 'Organization',
									name: 'YellowFolder',
									url: 'https://yellowfolder.com',
								},
								areaServed: {
									'@type': 'Country',
									name: 'United States',
								},
								audience: {
									'@type': 'Audience',
									audienceType: 'K-12 Schools and School Districts',
								},
								hasOfferCatalog: {
									'@type': 'OfferCatalog',
									name: 'Student Records Management Services',
									itemListElement: [
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'Digital Student File Storage',
											},
										},
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'Student Records Digitization',
											},
										},
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'FERPA Compliant Records Access',
											},
										},
									],
								},
							},
							{
								'@type': 'Service',
								'@id': 'https://yellowfolder.com/services#special-education',
								serviceType: 'Special Education Records Management',
								name: 'Special Education Records Management Service',
								description:
									'Secure storage and management of IEPs, evaluations, and special education documentation with FERPA and HIPAA compliance. Manage Individualized Education Programs, psychological evaluations, therapy records, and all special education files with enhanced security controls and audit trails.',
								provider: {
									'@type': 'Organization',
									name: 'YellowFolder',
									url: 'https://yellowfolder.com',
								},
								areaServed: {
									'@type': 'Country',
									name: 'United States',
								},
								audience: {
									'@type': 'Audience',
									audienceType:
										'Special Education Departments and K-12 Schools',
								},
								hasOfferCatalog: {
									'@type': 'OfferCatalog',
									name: 'Special Education Records Services',
									itemListElement: [
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'IEP Document Management',
											},
										},
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'HIPAA Compliant Storage',
											},
										},
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'Special Education Compliance Tracking',
											},
										},
									],
								},
							},
							{
								'@type': 'Service',
								'@id': 'https://yellowfolder.com/services#hr-records',
								serviceType: 'Human Resources Records Management',
								name: 'HR Records Management Service',
								description:
									'Employee records management for K-12 school districts including applications, I-9 forms, contracts, evaluations, and personnel files. Secure access controls, automated retention schedules, and compliance tracking for all human resource documentation.',
								provider: {
									'@type': 'Organization',
									name: 'YellowFolder',
									url: 'https://yellowfolder.com',
								},
								areaServed: {
									'@type': 'Country',
									name: 'United States',
								},
								audience: {
									'@type': 'Audience',
									audienceType:
										'Human Resources Departments and School Districts',
								},
								hasOfferCatalog: {
									'@type': 'OfferCatalog',
									name: 'HR Records Management Services',
									itemListElement: [
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'Employee File Management',
											},
										},
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'Personnel Records Digitization',
											},
										},
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'HR Compliance & Retention',
											},
										},
									],
								},
							},
							{
								'@type': 'Service',
								'@id': 'https://yellowfolder.com/services#administrative',
								serviceType: 'Administrative Records Management',
								name: 'Administrative Records Management Service',
								description:
									'School administrative document management for policies, procedures, board minutes, and district records. Centralized storage with easy search capabilities, version control, and secure access for authorized personnel.',
								provider: {
									'@type': 'Organization',
									name: 'YellowFolder',
									url: 'https://yellowfolder.com',
								},
								areaServed: {
									'@type': 'Country',
									name: 'United States',
								},
								audience: {
									'@type': 'Audience',
									audienceType: 'School Administrators and District Leadership',
								},
								hasOfferCatalog: {
									'@type': 'OfferCatalog',
									name: 'Administrative Records Services',
									itemListElement: [
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'District Policy Management',
											},
										},
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'Board Records Storage',
											},
										},
										{
											'@type': 'Offer',
											itemOffered: {
												'@type': 'Service',
												name: 'Administrative Document Organization',
											},
										},
									],
								},
							},
						],
					}),
				}}
			/>
		</Head>
		<Services />
	</>
);

export default ServicesPage;
