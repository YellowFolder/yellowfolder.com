import React from 'react';
import Head from 'next/head';
import Help from '../components/Help';

const HelpPage = () => (
	<>
		<Head>
			<title>Help Center - YellowFolder Support & Resources</title>
			<meta
				name="description"
				content="Find answers to common questions about YellowFolder. Access tutorials, guides, and support resources for school records management. Get help with your district's needs."
			/>

			{/* Canonical URL */}
			<link rel="canonical" href="https://yellowfolder.com/help" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://yellowfolder.com/help" />
			<meta
				property="og:title"
				content="Help Center - YellowFolder Support & Resources"
			/>
			<meta
				property="og:description"
				content="Find answers to common questions about YellowFolder. Access tutorials, guides, and support resources for school records management. Get help with your district's needs."
			/>
			<meta
				property="og:image"
				content="https://yellowfolder.com/static/images/yf-og-image.png"
			/>
			<meta property="og:site_name" content="YellowFolder" />
			<meta property="fb:app_id" content="1972894570219949" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://yellowfolder.com/help" />
			<meta
				property="twitter:title"
				content="Help Center - YellowFolder Support & Resources"
			/>
			<meta
				property="twitter:description"
				content="Find answers to common questions about YellowFolder. Access tutorials, guides, and support resources for school records management. Get help now."
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
						name: 'YellowFolder Help Tutorial - Getting Started Guide',
						description:
							'Learn how to use YellowFolder for school records management. This tutorial covers the basics of uploading, organizing, and retrieving education records in your district.',
						thumbnailUrl:
							'https://i.ytimg.com/vi/G05QahYIq-s/maxresdefault.jpg',
						uploadDate: '2024-01-15T00:00:00Z',
						contentUrl: 'https://www.youtube.com/watch?v=G05QahYIq-s',
						embedUrl: 'https://www.youtube.com/embed/G05QahYIq-s',
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

			{/* FAQPage Schema for Rich Snippets */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'FAQPage',
						mainEntity: [
							{
								'@type': 'Question',
								name: 'What do you mean by "upload"?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'Upload means taking documents that you have from the record series you purchased and "uploading" or saving them into YellowFolder by using one of our upload tools (virtual printer, droplet, scan, or upload).',
								},
							},
							{
								'@type': 'Question',
								name: 'Where do I start with uploading documents?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'The most important part is just getting started, because there are so many ways to get started. Beginning with a single document type can be easier, e.g., transcript, grade report, or application. You may find it easiest to start with a document that can be printed from another program. You can also begin with only the documents for new students/staff. Every account is different; some users prefer to get started with all their documents at once, and just start uploading every document in their district from the very beginning. Work with your PNE to develop a plan that works for your district.',
								},
							},
							{
								'@type': 'Question',
								name:
									'What does it take to get files uploaded and filed appropriately into the system?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'Uploading is quick and easy! To get started, pick which tool you want to use to upload. Once uploaded, your documents will go through several stages. Your document has completed uploading once it is in the "Complete" stage. There are times that your documents will be redirected to your dashboard for verification. Upon providing the necessary information, they will be completed as well. To learn more about the upload tools and the stages of your documents, visit our training schedule to register for one of our many upcoming training sessions!',
								},
							},
							{
								'@type': 'Question',
								name:
									'How can I upload a document that will not go through a scanner?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'If documents are fragile or damaged, it is best to copy them with a copier. We recommend that you use a copier that allows the user to lay the document on the screen bed versus using the auto-feed option.',
								},
							},
							{
								'@type': 'Question',
								name:
									'Why do my documents seem to get stuck in the "process" stage?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										"Your documents have to go through our internal automated recognition and metadata assignment process, which can take a little time. In addition, your district's internet bandwidth plays a big role in how quickly documents load.",
								},
							},
							{
								'@type': 'Question',
								name:
									"Why can't I see the documents my district has uploaded at another school?",
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'YellowFolder works with the district staff leaders to determine access roles. Access roles determine viewing, adding, reading, and non-viewing permissions for each user. If you think that you should be able to view additional materials, please contact your district supervisor. Access roles can only be adjusted by YellowFolder upon receiving notification from the district user champion.',
								},
							},
							{
								'@type': 'Question',
								name:
									"What do I do when I'm not seeing a student or employee in the system?",
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'There are a couple of reasons you might not see a student or an employee in YellowFolder. 1. No document has been uploaded for that person yet. Your students or employees will only appear in the system once a document has been uploaded to them. 2. The student or employee is not on the CSV. In this case, contact your PNE, and they will work to update your CSV.',
								},
							},
							{
								'@type': 'Question',
								name: 'How often should our CSV be updated?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'An updated CSV can be provided to us whenever your students or staff change. In other words, as often as you would like. We make every attempt to update them as quickly as possible. If you notice that the updates are taking longer than expected, please let your PNE know so they can investigate.',
								},
							},
							{
								'@type': 'Question',
								name:
									'How can I change the location of a file after it has already been uploaded?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'Using the "Edit Document Metadata" feature, you are able to move the document from one person to another, one document type to another, or edit the date of the document.',
								},
							},
							{
								'@type': 'Question',
								name: 'Am I able to rename a document?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										"You can edit a document's name. To do this, hover over the document name until you see a pencil icon. Once you click on the pencil icon, a text field will appear. You can then type in that text field. We strongly recommend keeping the YellowFolder naming convention (to preserve standard metadata) and adding your title to the beginning or end of the document name.",
								},
							},
							{
								'@type': 'Question',
								name: 'Can I modify the folder structure?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'Yes, but keep in mind, less is more, and it is easier to add than to take away. Too many folder choices can become confusing and cumbersome, making it difficult to navigate more folders when determining which folder a document should be filed in, verifying documents, or searching.',
								},
							},
							{
								'@type': 'Question',
								name: 'How long does it take to train users?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'The training schedule is completely up to you. We recommend the sooner the better, and we offer training every week. We offer live training on our website at yellowfolder.com; click the "Training" button in the upper-right corner to sign up. In addition, your PNE is always available to schedule individual and group sessions as often as needed. We prefer to train individually when a user is getting started, so the PNE can work with any user to begin uploading documents from the start. Don\'t hesitate to contact your PNE to schedule a training session.',
								},
							},
							{
								'@type': 'Question',
								name:
									'How do I upload documents to YellowFolder if I do not have a scanner?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'Purchasing a scanner to attach to your computer is NOT necessary for uploading. Scanning is one method for uploading documents, but there are many options beyond purchasing a scanner. You can use the Virtual Printer, Droplet, or the Upload method to upload documents.',
								},
							},
							{
								'@type': 'Question',
								name:
									'What type of scanner can I use to upload to YellowFolder?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'The only criterion is that the scanner must be TWAIN-compliant and that the locally installed scanner be set to 300 dpi.',
								},
							},
							{
								'@type': 'Question',
								name: 'How do I get my documents to YellowFolder for upload?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'If there is confusion about whether we are picking up your boxes, ask your PNE to check whether you have a quote for us to do it. If you did not purchase for us to pick up your boxes, you are in luck — we have options for you. Speak with your PNE to learn all about them, including a plan to do it yourself and save money.',
								},
							},
							{
								'@type': 'Question',
								name:
									'How do other districts handle paper records they already have?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'Pre-YellowFolder was created to assist districts with this issue. Many districts scan each person\'s entire folder into a single PDF at a time and save it to the Pre-YellowFolder. For example, an HR folder could be loaded in its entirety with the application, contract, and resume, and placed in Pre-YellowFolder. If a document in the Pre-YellowFolder section is needed later, the user can use the "search within a search" feature to quickly locate it. As new documents arrive for that employee, they could be uploaded and placed by the system in the desired location within the file structure. This would reduce the time required to get the office paperless.',
								},
							},
							{
								'@type': 'Question',
								name:
									"How does YellowFolder handle the law in some states that do not require the I-9 to be in an employee's personnel file?",
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'The entire HR folder is not considered the personnel file; it is an employee\'s entire record of files from every and all areas of their employment. Each folder in the YF file structure is considered a separate "file". This is the reason the I-9 is in a separate folder by itself in the file structure.',
								},
							},
							{
								'@type': 'Question',
								name:
									'How does YellowFolder follow the HIPAA requirements for certain medical records to be under "three locks"?',
								acceptedAnswer: {
									'@type': 'Answer',
									text:
										'YellowFolder is FERPA and HIPAA compliant with Administrative, Physical, and Technical safeguards in place to keep your data secure. Please see our Privacy Policy at https://yellowfolder.com/privacy-policy for more details.',
								},
							},
						],
					}),
				}}
			/>
		</Head>
		<Help />
	</>
);

export default HelpPage;
