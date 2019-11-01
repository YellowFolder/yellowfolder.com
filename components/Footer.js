import Link from 'next/link';
import styled from 'styled-components';
import { size } from './styles/device';

const StyledFooter = styled.footer`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 45px;
	background: #fff;
	flex-shrink: 0;
	color: ${props => props.theme.grey};
	font-size: 1rem;
	line-height: 12px;
	margin: 1rem 0;
	z-index: 2000;

	.footer-content {
		width: 100%;
		max-width: ${props => props.theme.maxWidth};
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.5rem 1rem;

		.content-left,
		.content-right {
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
		}

		.content-left {
			justify-content: center;

			img {
				width: 30px;
				height: auto;
				margin-right: 3px;
			}

			p {
				font-family: ${props => props.theme.boldFont};
			}
		}

		.content-right {
			justify-content: space-evenly;
			.links {
				margin: 0 0rem 0 1rem;

				span {
					font-size: 12px;
					vertical-align: middle;
				}

				a:hover {
					cursor: pointer;
					text-decoration: underline;
				}
			}
		}
	}

	@media (max-width: ${size.mobileL}) {
		padding: 90px 0 72px;
		font-size: 1.2rem;
		.footer-content {
			flex-flow: column-reverse nowrap;
			margin: 0.5rem 1rem 0;
			.content-left,
			.content-right {
				align-items: center;
				justify-content: center;
			}
			.content-left {
				padding: 1rem 0 0;
				p {
					margin: 7px 4px;
				}
			}
			.content-right {
				flex-flow: column nowrap;
				.links {
					display: flex;
					flex-flow: column nowrap;
					align-items: center;
					justify-content: center;
					a {
						margin: 0.5rem 0;
					}
					span {
						display: none;
					}
				}
			}
		}
	}
`;

const RequestButton = styled.button`
	outline: none;
	border: none;
	border-radius: 5px;
	background: ${props => props.theme.yellow};
	color: ${props => props.theme.grey};
	font-family: ${props => props.theme.boldFont};
	font-size: 1.2rem;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		margin-bottom: 1px;
	}

	&:hover {
		cursor: pointer;
	}
`;

const Footer = () => (
	<StyledFooter role="contentinfo">
		<div className="footer-content">
			<div className="content-left">
				<img src="/static/images/gray-lock.svg" alt="YellowFolder" />
				<p>
					&copy;2019 YellowFolder
					<br />
					All Rights Reserved
				</p>
			</div>
			<div className="content-right">
				<RequestButton>
					<Link href="/record-request">
						<a>Record Request</a>
					</Link>
				</RequestButton>
				<div className="links">
					<Link href="/privacy-policy">
						<a>Privacy Policy</a>
					</Link>
					<span> • </span>
					<Link href="/assets/pdf/service_procedures-v1.6-2019.pdf">
						<a target="_blank" rel="noopener noreferrer">
							Service Procedures
						</a>
					</Link>
					<span> • </span>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</div>
			</div>
		</div>
	</StyledFooter>
);

export default Footer;
