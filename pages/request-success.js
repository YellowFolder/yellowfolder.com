import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const StyledSuccess = styled.div`
	with: 100%;
	min-height: calc(100vh - 150px);
	margin: 0 auto;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	background: ${props => props.theme.white};
	h1 {
		font-size: 5.4rem;
		line-height: 54px;
		font-family: ${props => props.theme.boldFont};
		font-weight: 700;
		margin: 2rem 0;
	}
	p {
		font-size: 2.2rem;
		line-height: 22px;
		margin: 0.25rem 0;
		padding: 0;
	}

	button {
		background-color: ${props => props.theme.yellow};
		border-color: ${props => props.theme.yellow};
		font-family: ${props => props.theme.boldFont};
		font-weight: 700;
		color: #fff;
		text-align: center;
		line-height: 12px;
		font-size: 1.4rem;
		padding: 12px 24px;
		margin: 2rem 0;
		border-radius: 3px;
		border-style: solid;
		border-width: 1px;
		cursor: pointer;
		outline: none;
		&:active {
			outline: none;
		}
	}
`;

const RequestSuccess = () => {
	return (
		<>
			<Head>
				<title>Thank You - Your Request Has Been Received | YellowFolder</title>
				<meta
					name="description"
					content="Thank you for contacting YellowFolder. We've received your request and our team will respond shortly. We look forward to helping your school with records management."
				/>

				{/* Prevent indexing of utility/thank you page */}
				<meta name="robots" content="noindex, follow" />

				{/* Canonical URL */}
				<link rel="canonical" href="https://yellowfolder.com/request-success" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://yellowfolder.com/request-success"
				/>
				<meta
					property="og:title"
					content="Thank You - Your Request Has Been Received | YellowFolder"
				/>
				<meta
					property="og:description"
					content="Thank you for contacting YellowFolder. We've received your request and our team will respond shortly. We look forward to helping your school with records management."
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
					content="https://yellowfolder.com/request-success"
				/>
				<meta
					property="twitter:title"
					content="Thank You - Your Request Has Been Received | YellowFolder"
				/>
				<meta
					property="twitter:description"
					content="Thank you for contacting YellowFolder. We've received your request and our team will respond shortly. We look forward to helping your school."
				/>
				<meta
					property="twitter:image"
					content="https://yellowfolder.com/static/images/yf-og-image.png"
				/>
			</Head>
			<StyledSuccess>
				<h1>Success!</h1>
				<p>
					Our team has received your request and will reply to you as soon as
					possible.
				</p>
				<button>
					<Link href="/">Return Home</Link>
				</button>
			</StyledSuccess>
		</>
	);
};

export default RequestSuccess;
