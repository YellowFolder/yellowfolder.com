import Link from 'next/link';
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
		<StyledSuccess>
			<h1>Success!</h1>
			<p>Our team has received your request and will reply to you as soon as possible.</p>
			<button>
				<Link href="/">
					<a>Return Home</a>
				</Link>
			</button>
		</StyledSuccess>
	);
};

export default RequestSuccess;
