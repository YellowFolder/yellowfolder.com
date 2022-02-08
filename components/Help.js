import React from 'react';
import styled from 'styled-components';
import { size } from './styles/device';

const StyledHelp = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding: 0;
	background: ${props => props.background || 'white '};
	.privacy-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		padding: 0;
		background: ${props => props.background || 'white '};

		.copy-header {
			width: 80%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-flow: row nowrap;
			h1,
			.privacy-pledge-banner {
				display: flex;
				margin: 0 auto;
				padding: 10px 10px 10px 0;
				margin-top: 45px;
			}
			h1 {
				text-align: left;
				color: ${props => props.theme.grey};
				font-size: 3.6rem;
				line-height: 1.1;
				font-family: ${props => props.theme.boldFont};
				width: 100%;
			}
			.privacy-pledge-banner {
				img {
					width: 200px;
				}
				&:hover {
					cursor: pointer;
				}
			}
		}

		.copy {
			width: 80%;
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
			justify-content: space-evenly;
			margin: 1em auto 0.75em;
			h3 {
				width: 100%;
				text-align: left;
				margin-top: 1em;
				margin-bottom: 0.75em;
				color: ${props => props.theme.grey};
				font-size: 2.4rem;
				line-height: 1.1;
				font-family: ${props => props.theme.boldFont};
			}
			p {
				width: 100%;
				margin: 0 auto;
				font-size: 1.6rem;
				color: ${props => props.theme.grey};
				line-height: 1.428;
				padding: 0;

				span {
					text-decoration: underline;
				}
			}

			.subcopy {
				margin-top: 1.33em;
				margin-bottom: 0.75em;
				/* margin: 0; */
				padding: 0;

				h3 {
					font-family: ${props => props.theme.boldFont};
					font-size: 1.8rem;
					line-height: 1.1;
				}

				ul.copy-list {
					list-style: disc;
					margin-top: 1em;
					margin-bottom: 0;
					padding-left: 40px;

					li {
						display: list-item;
						font-family: ${props => props.theme.defaultFont};
						padding: 0.25rem 0;
					}
				}
			}

			.contact {
				margin-top: 0.66rem;
				margin-bottom: 1.5rem;
				display: flex;
				flex-flow: column nowrap;
				align-items: flex-start;
				justify-content: space-between;
				p {
					width: 100%;
					margin: 0 auto;
					font-size: 1.6rem;
					color: ${props => props.theme.grey};
					line-height: 1.428;
					padding: 0;

					a {
						color: ${props => props.theme.gray};
						text-decoration: none;
						&[href^='tel:'],
						&[href^='mailto:'] {
							text-decoration: none;
							&:hover {
								text-decoration: underline;
							}
						}
					}
				}
			}
		}
	}

	@media (max-width: ${size.navMenu}) {
		.privacy-container {
			.copy-header {
				width: 95%;
			}
			.copy {
				width: 95%;
				.subcopy {
				}
			}
		}
	}

	@media (max-width: ${size.mobileL}) {
		.privacy-container {
			.copy-header {
				flex-flow: column-reverse nowrap;
				align-items: flex-start;
				justify-content: center;
				h1,
				.privacy-pledge-banner {
					margin: 0 auto;
					padding: 10px 0;
				}
				h1 {
					width: initial;
				}
			}
		}
	}
`;

const Help = () => {
	return (
		<StyledHelp>
			<div className="privacy-container">
				<div className="copy-header">
					<h1>Need Some Help?</h1>
				</div>
				<div className="copy">
					<h3>How to Set Up your YellowFolder Account and Login </h3>
					<p>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/G05QahYIq-s"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</p>

					<div className="subcopy">
						<h3>Step 1: Check your email</h3>
						<p>
							Once your account has been created, YellowFolder will send you a
							welcome email. If you're unable to find the email in your inbox,
							be sure check your spam/junk folder in case it went there. If
							you're still not able to find the email, please check with your
							district YellowFolder administrator to make sure the correct email
							address was sent. If the email address is correct, you can contact
							our Support team (support@yellowfolder.com) for additional
							assistance. Once you locate and open the email, click on the
							"Activate YellowFolder Account" button. Be sure your default
							browser is set to Chrome.
						</p>
					</div>

					<div className="subcopy">
						<h3>Step 2: Create your account</h3>
						<p>
							This step includes setting a permanent password and options for
							receiving your password if you forget it in the future. Enter your
							password in the "Enter new password" field then enter it again in
							the "Repeat new password" field, ensuring you adhere to the
							character requirements listed. Next, choose a security question to
							aide if/when you forget your password. You can also choose to
							enter a phone number to receive your password via text message if
							you'd like. This step also requires you to choose a picture
							associated with your account. Once finished creating your account,
							click "Create My Account."
						</p>
					</div>

					<div className="subcopy">
						<h3>Step 3: Sign In</h3>
						<p>
							This is the login page. The login page requires your Username and
							recently created permanent password. Your username is your ENTIRE
							district email address. Your password is the one you created in
							Step 2. Once credentials are entered, click "Sign In."
						</p>
					</div>

					<div className="subcopy">
						<h3>Step 4: Set up multifactor authentication</h3>
						<p>
							MFA is an added level of added security. The system requires you
							to add a security question (this is NOT the same security question
							as your "forgot password" security question...this is ANOTHER
							security question). Click "Configure factor." Choose your secret
							question from the drop-down menu and provide the answer. Click
							"Save." The next page allows you to choose additional security
							factors, but most users find it sufficient and easiest to just set
							up a security question. Set up additional factors if you'd like
							then click "Finish.
						</p>
					</div>

					<div className="subcopy">
						<h3>Step 5: DO NOT SAVE YOUR PASSWORD</h3>
						<p>
							If your device prompts you to save your password at any time, DO
							NOT allow it to save (this saves your security question answer or
							code, not your actual password, and causes many users to get
							locked out of the system).
						</p>
					</div>
				</div>
			</div>
		</StyledHelp>
	);
};

export default Help;
