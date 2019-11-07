import React, { useState } from 'react';
import styled from 'styled-components';

const ACCESS_KEY_PROD = 'e20b50ff-c9c2-4198-b148-b2ebd61763f3';
const ACCESS_KEY_DEV = '427e0763-715a-488d-b159-140d5a32ca6f';

const StyledDemo = styled.div`
	width: 100%;
	height: auto;
	margin: 0 auto;
	padding: 0;
	background: ${props => props.theme.white};
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;

	.demo--header {
		width: 100% !important;
		margin: 60px auto 0;
		padding: 25px;
		background-color: ${props => props.theme.lightgrey};
		color: ${props => props.theme.grey};

		.header-copy {
			width: 80%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			h1 {
				margin: 0 auto;
				font-size: 5.4rem;
				line-height: 5.4rem;
			}
		}
	}

	.demo--container {
		max-width: ${props => props.theme.maxWidth};
		height: auto;
		width: 80%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-flow: row nowrap;
		.body {
			flex: 2 0 auto;
			/* background: red; */
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			flex-flow: column nowrap;
			margin: 0 auto;

			img {
				padding: 50px 0 25px;
				width: 80%;
				margin: 0 auto;
				justify-self: center;
			}

			.video-container {
				width: 100%;
				height: auto;
			}
		}
		.form {
			flex: 1 0 auto;
			/* background: blue; */
			height: 100%;
			width: 100%;
		}
	}
`;

const Demo = () => {
	const [contact, setContact] = useState({
		email: '',
		'$First Name': '',
		'$Last Name': '',
		$District: '',
		$State: 'select',
	});

	const [response, setResponse] = useState({});

	return (
		<StyledDemo>
			<div className="demo--header">
				<div className="header-copy">
					<h1>See YellowFolder in Action — Schedule a Demo</h1>
				</div>
			</div>

			<div className="demo--container">
				<div className="body">
					<div className="demo-image">
						<img src="/static/images/demo.webp" />
					</div>
					<div className="body-copy">
						<h3>Learn how to easily store and manage files without the hassle of paper</h3>
						<div>
							<p>
								Paper records are the traditional K-12 solution,
								<span>
									but paper takes time, money, and effort from more important things on everyone’s
									plate.
								</span>{' '}
								YellowFolder’s cloud-based filing system will make your record management life
								easier, more streamlined, and far less stressful.
							</p>
							<p>
								By scheduling a free demo, we will walk through exactly how we can change all of
								your current document management processes for the better. We’ll even go into detail
								about how the platform can apply to your specific department, district, or general
								situation.
							</p>
							<p>You can learn more about YellowFolder by watching the video below:</p>
						</div>
					</div>
					<div className="video-container">
						<iframe
							width="100%"
							height="auto"
							src="https://www.youtube.com/embed/gBqr0GX9mhQ"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
				<div className="form"></div>
			</div>
		</StyledDemo>
	);
};

export default Demo;
