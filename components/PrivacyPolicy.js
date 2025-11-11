import React from 'react';
import styled from 'styled-components';
import { size } from '../components/styles/device';

const StyledPrivacy = styled.div`
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

const PrivacyPolicy = () => {
	return (
		<StyledPrivacy>
			<div className="privacy-container">
				<div className="copy-header">
					<h1>Privacy Policy</h1>
					<div className="privacy-pledge-banner">
						<a
							href="https://studentprivacypledge.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/static/images/spp@2x.png"
								alt="Privacy Pledge Signatory Banner"
							/>
						</a>
					</div>
				</div>
				<div className="copy">
					<h3>Statement: </h3>
					<p>
						YellowFolder LLC is committed to protecting your privacy.
						YellowFolder LLC has created this privacy statement in order to
						demonstrate our firm commitment to your privacy.
					</p>
				</div>
				<div className="copy">
					<h3>Collection of your Personal Information:</h3>
					<p>
						YellowFolder collects personal information, such as e-mail address,
						name, home or work address or telephone and fax number(s)
						(collectively, “User Information”), and stores personal information
						on students and staff of K-12 education entities, including
						information such as student records, personnel records and other
						school forms and materials containing private information related to
						both students and staff members (collectively, “School Information”;
						User Information and School Information are collectively referred to
						as “Information”). YellowFolder has taken the commercially
						reasonable steps to ensure that Information is kept confidential at
						all times. YellowFolder processes and uses School Information
						exclusively for educational purposes and to fulfill contractual
						agreements between the respective schools and districts that own the
						School Information.
					</p>
					<div className="subcopy">
						<h3>These Steps Include:</h3>{' '}
						<ul className="copy-list">
							<li>
								YellowFolder enforces strict, limited access to Information
								databases for YellowFolder’s internal purposes.
							</li>
							<li>
								YellowFolder communicates this privacy statement to all
								YellowFolder employees and subcontractors, provides training on
								federal and state law governing information confidentially, and
								requires strict compliance with data protection and security
								requirements.
							</li>
							<li>
								YellowFolder has not, and will not, sell, rent, disseminate or
								disclose any School Information or User Information on the
								YellowFolder system to any other company or organization for any
								purpose.
							</li>
							<li>
								YellowFolder provides each client education entity (“Education
								Entity”) with the ability to receive electronic copies of any
								and all data related to such Education Entity kept on the
								YellowFolder system at all times. YellowFolder also will provide
								authorized staff of such Education Entity with the ability to
								review (and potentially, correct) data maintained on the
								YellowFolder system and related to their tenure with such
								Education Entity, provided that such authorized staff member
								follows the laws, regulations and rules for accessing such
								School Information via formal channels established within the
								client Education Entity and the legal jurisdictions where it is
								located.
							</li>
							<li>
								YellowFolder retains each Education Entity’s School Information
								on the YellowFolder system based on retention schedules approved
								by such Education Entity. Upon a termination of all services
								with an Education Entity, YellowFolder provides the Education
								Entity with the ability to receive electronic copies of all
								records and data maintained on the YellowFolder system, and
								permanently removes and destroys all data related to such
								Education Entity from the YellowFolder system.
							</li>
							<li>
								YellowFolder communicates via mail, e-mail or other online
								delivery devices unless you tell us not to. If you believe you
								are receiving our communications in error or no longer desire to
								receive these communications, please inform YellowFolder and we
								will remove your name from our mailing lists.
							</li>
							<li>
								YellowFolder will require any successor entity to YellowFolder
								to adhere to the terms and conditions of this privacy statement,
								or to provide advance written notice to all the then-current
								Education Entities using the YellowFolder system of any
								limitations to this privacy statement, and, in the event that
								limitations are forthcoming, a reasonable period of notice
								regarding such privacy statement changes to allow the Education
								Entity time to seek an alternative storage repository for its
								data.
							</li>
						</ul>
					</div>
				</div>
				<div className="copy">
					<h3>Links:</h3>{' '}
					<p>
						{' '}
						The Site contains links to other websites. Please note that when you
						click on one of these links, you are moving to another website. We
						encourage you to read the privacy statements of these linked sites
						as their privacy policy may differ from ours.
					</p>
				</div>
				<div className="copy">
					<h3>Cookies:</h3>
					<p>
						YellowFolder may use cookies to enhance your experience on our
						website. Cookies are small text files stored on your computer by
						your web browser. We use cookies for website analytics and to
						improve site functionality. You may refuse the use of cookies by
						selecting the appropriate settings on your browser. If cookies are
						disabled, you will still be able to use the Site, though some
						features may not function optimally.
					</p>
				</div>
				<div className="copy">
					<h3>Google Analytics:</h3>
					<p>
						YellowFolder uses Google Analytics, a web analytics service provided
						by Google LLC ("Google"). Google Analytics uses cookies and similar
						technologies to collect and analyze information about website usage
						and to compile reports on website activity. The information
						generated by Google Analytics (including your IP address) will be
						transmitted to and stored by Google on servers in the United States.
						Google will use this information to evaluate your use of our
						website, compile reports on website activity, and provide other
						services relating to website activity and internet usage.
					</p>
					<p>
						Google Analytics collects information such as how often users visit
						the Site, what pages they visit, and what other sites they used
						prior to coming to the Site. We use this information to improve our
						website and services. Google Analytics collects only the IP address
						assigned to you on the date you visit the Site, rather than your
						name or other identifying information. We do not combine the
						information collected through Google Analytics with personally
						identifiable information.
					</p>
					<p>
						Google's ability to use and share information collected by Google
						Analytics is restricted by the Google Analytics Terms of Service and
						Google Privacy Policy. You can prevent Google Analytics from
						recognizing you on return visits by disabling cookies in your
						browser. You can also opt out of Google Analytics by installing the
						Google Analytics Opt-out Browser Add-on available at{' '}
						<span>
							<a
								href="https://tools.google.com/dlpage/gaoptout"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://tools.google.com/dlpage/gaoptout
							</a>
						</span>
						.
					</p>
				</div>

				<div className="copy">
					<h3>Security of your Personal Information:</h3>
					<p>
						YellowFolder is committed to protecting the security of your
						Information. We use security technology and procedures to help
						protect your Information from unauthorized access, use or disclosure
						in compliance with state, federal and local data security and
						privacy requirements. We store the Information you provide on
						redundant computer systems located in controlled facilities in the
						United States of America. When transmitting and storing highly
						confidential information such as School Information, we protect it
						through the use of encryption by industry standard Secure Sockets
						Layer ("SSL") technology using AES 256-bit encryption so that it
						cannot be read even if it is wrongly intercepted.
					</p>
				</div>

				<div className="copy">
					<h3>Breach Response</h3>
					<p>
						A breach is defined as an incident where sensitive, protected, or
						confidential personal information and personal data has potentially
						been accessed, stolen, or used without authorization. In the event
						of a data breach, YellowFolder will follow the minimum guidelines or
						policies formally adopted prior to such breach by the applicable
						state agency or authority governing the District in responding to
						such data breach.
					</p>
				</div>

				<div className="copy">
					<h3>Changes:</h3>
					<p>
						YellowFolder reserves the right to change, modify, add or remove
						portions of this privacy statement at any time, but will alert you
						on the Site that changes have been made by indicating on the privacy
						statement the date it was last updated. When you visit the Site you
						are accepting the current version of this privacy statement as
						posted on the Site at that time. We recommend that users re-visit
						this privacy statement on occasion to learn of any changes. In the
						event that YellowFolder limits the privacy rights of client
						Education Entities or their authorized staff in any manner,
						YellowFolder will provide a notice on the Site at the time of log-
						in notifying of changes to this privacy statement.
					</p>
				</div>

				<div className="copy">
					<h3>Contact Information:</h3>
					<p>
						YellowFolder welcomes your comments regarding this privacy
						statement. If you believe that YellowFolder has not adhered to this
						privacy statement, please contact YellowFolder by telephone, e-mail
						or postal mail.
					</p>
					<p>&nbsp;</p>
					<div className="contact">
						<p>YellowFolder LLC</p>
						<p>1551 E. Lincoln Ave., Ste 100</p>
						<p>Madison Heights, MI 48071</p>
						<p>&nbsp;</p>

						<p>
							<a href="tel:+1-214-431-3600">(214) 431-3600</a>
						</p>
						<p>
							<a href="mailto:support@yellowfolder.com" itemProp="email">
								support@yellowfolder.com
							</a>{' '}
						</p>
					</div>
				</div>
				<div className="copy">
					<p className="last-updated">Updated: 11/11/2025</p>
				</div>
			</div>
		</StyledPrivacy>
	);
};

export default PrivacyPolicy;
