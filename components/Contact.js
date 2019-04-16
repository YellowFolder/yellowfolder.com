import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { size } from './styles/device';

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const Loader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	@media (min-width: ${size.navMenu}) {
		height: 625px;
		align-items: flex-start;
	}
	@media (max-width: ${size.tablet}) {
		height: 325px;
	}

	#loader {
		border-radius: 50%;
		width: 48px;
		height: 48px;
		border: 0.25rem solid ${props => props.theme.grey};
		border-top-color: #fff;
		animation: ${spin} 750ms infinite linear;
		background-color: rgba(255, 255, 255, 0.2);
		@media (min-width: ${size.navMenu}) {
			margin-top: 100px;
		}
	}
`;

const StyledContact = styled.div`
	width: 100%;
	height: auto;
	margin: 0 auto;
	padding: 60px 6.25% 0px 3.125%;
	max-width: ${props => props.theme.maxWidth};
	background: ${props => props.theme.white};
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr auto;
	grid-gap: 40px;
	grid-template-areas:
		'header header header'
		'sidebar form form'
		'sidebar form form';

	.contact-form--header {
		grid-area: header;
		h1 {
			font-size: 5.4rem;
			line-height: 54px;
			font-family: ${props => props.theme.boldFont};
			font-weight: 700;
			margin: 2rem 0 0 0;
		}
	}
	.contact-form--sidebar {
		grid-area: sidebar;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-flow: column nowrap;
		flex: 1 0 min-content;
		.sidebar-contact-info {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-flow: column nowrap;
			width: 100%;
			margin: 0;
			padding: 1.5rem 0;
			a {
				color: ${props => props.theme.gray};
				&[href^='mailto:']:hover {
					text-decoration: underline;
				}
			}
			h3 {
				font-family: ${props => props.theme.boldFont};
				font-size: 1.4rem;
				margin: 0;
				padding: 0;
			}
			p {
				font-size: 1.2rem;
				line-height: 14px;
				margin: 0.25rem 0 0;
				padding: 0;
			}
		}
	}
	.contact-form--form {
		grid-area: form;
		width: 100%;
		height: 100%;
		display: ${props => (props.formHasLoaded ? 'block' : 'flex')};
		align-items: center;
		justify-content: center;
		flex-flow: column nowrap;

		#embedded-form {
			.hbspt-form {
				width: 100%;
				iframe.hs-form-iframe {
					width: 100% !important;
				}
			}
		}
	}

	@media (max-width: ${size.navMenu}) {
		grid-template-areas:
			'header header header'
			'form form form'
			'sidebar sidebar sidebar';
		grid-gap: 15px 0;
		.contact-form {
			&--header {
				width: 80%;
				h1 {
					/* line-height: calc(64px + (64 - 58) * ((100vw - 800px) / (1000 - 400))); */
					line-height: 120%;
					font-size: calc(60px + (72 - 60) * ((100vw - 800px) / (1000 - 400)));
					margin: 0 0 2rem 0;
				}
			}
			&--form {
				display: flex;
				right: 0;
				transform: translate(0);

				#embedded-form {
					display: flex;
					flex-flow: column nowrap;
					align-items: center;
					justify-content: center;
					width: 100% !important;

					.hbspt-form {
						width: 100%;

						iframe.hs-form-iframe {
							position: relative;
							display: flex;
							width: 100% !important;
						}
					}
				}
			}
			&--sidebar {
				flex-flow: column nowrap;
				align-items: center;
				flex-flow: column nowrap;
				.sidebar-contact-info {
					align-items: center;
					text-align: center;
					:nth-child(3) {
						padding-bottom: 4rem;
					}
				}
			}
		}
	}
	@media (max-width: 550px) {
		.contact-form {
			&--header {
				h1 {
					font-size: calc(56px + (72 - 56) * ((100vw - 800px) / (1000 - 400)));
				}
			}
		}
	}
	@media (max-width: ${size.mobileL}) {
		.contact-form {
			&--header {
				width: 96%;
				h1 {
					font-size: calc(46px + (58 - 42) * ((100vw - 400px) / (1000 - 300)));
					line-height: 120%;
					margin: 0;
				}
			}
			&--sidebar {
				padding-top: 4rem;
				border-bottom: 5px solid ${props => props.theme.grey};
				.sidebar-contact-info {
					flex-flow: column nowrap;
					h3,
					p {
						text-align: center;
					}
				}
			}
		}
	}
	@media (max-width: ${size.mobileM}) {
		padding-top: 30px;
		.contact-form {
			&--header {
				h1 {
					font-size: calc(42px + (58 - 42) * ((100vw - 400px) / (1000 - 300)));
				}
			}
		}
	}
`;

class Contact extends Component {
	state = {
		formHasLoaded: false,
		formHasRendered: false,
	};

	componentDidMount() {
		// create a `<script />` element that will inject the prerequisite code necessary to create a hubspot form.
		// this code must be added before the form is actually created.
		const preloadScript = document.createElement('script');
		preloadScript.src = '//js.hsforms.net/forms/v2.js';
		document.getElementById('embedded-form').appendChild(preloadScript);

		// once preloadScript has been loaded by the DOM,
		// create script element to create hbspt form.
		preloadScript.onload = () => {
			const script = document.createElement('script');
			console.log('preloadScript loaded!');
			script.innerHTML = `
				hbspt.forms.create({
					portalId: "5071454",
					formId: "a7743506-a532-40ff-9d76-93c023f3bd65"
				});
			`;

			// insert script to create form.
			document.getElementById('embedded-form').appendChild(script);

			// set formHasLoaded state to true once script has been inserted.
			this.setState({ formHasLoaded: true }, () => {
				// listen for 'onFormReady' event emitted by hbspt form object.
				// onFormReady is fired once form has been inserted into DOM.
				// https://developers.hubspot.com/global-form-events
				window.addEventListener('message', event => {
					if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
						// hide <Loader /> once form has been rendered to DOM.
						this.setState({ formHasRendered: true });
					}
				});
			});
		};
	}

	render() {
		return (
			<StyledContact formHasLoaded={this.state.formHasLoaded}>
				<div className="contact-form--header">
					<h1>Got a question? Get in touch.</h1>
				</div>
				<aside className="contact-form--sidebar">
					<div className="sidebar-contact-info">
						<h3>YellowFolder</h3>
						<p>
							1617 W Crosby Rd., Ste 100 <br />
							Carrollton, TX 75006
						</p>
					</div>
					<div className="sidebar-contact-info">
						<h3>Sales</h3>
						<p>
							<span itemProp="telephone">
								<a href="tel:+1-844-935-5684">(844) 935-5684</a>
							</span>
							<br />
							<a href="mailto:sales@yellowfolder.com" itemProp="email">
								sales@yellowfolder.com
							</a>
						</p>
					</div>
					<div className="sidebar-contact-info">
						<h3>Support</h3>
						<p>
							<span itemProp="telephone">
								<a href="tel:+1-844-935-5699">(844) 935-5699</a>
							</span>
							<br />
							<a href="mailto:support@yellowfolder.com" itemProp="email">
								support@yellowfolder.com
							</a>
						</p>
					</div>
				</aside>
				<div className="contact-form--form">
					{this.state.formHasRendered ? null : (
						<Loader>
							<div id="loader" />
						</Loader>
					)}
					<div id="embedded-form" />
				</div>
			</StyledContact>
		);
	}
}

export default Contact;
