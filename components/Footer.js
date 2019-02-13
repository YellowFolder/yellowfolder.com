import styled from 'styled-components';
import Link from 'next/link';

const StyledFooter = styled.footer`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 0;
	height: 45px;
	background: #fff;
	flex-shrink: 0;
	color: ${props => props.theme.grey};
	font-weight: 400;
	font-size: 1rem;
	line-height: 12px;

	.footer-content {
		width: 100%;
		max-width: ${props => props.theme.maxWidth};
		display: flex;
		align-items: center;
		justify-content: space-between;

		.content-left {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-flow: row nowrap;

			img {
				width: 30px;
				height: auto;
				margin-right: 3px;
			}

			p {
				font-family: 'Clear Sans Bold';
			}
		}

		.content-right {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			flex-flow: row nowrap;

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
`;

const RequestButton = styled.button`
	outline: none;
	border: none;
	border-radius: 5px;
	background: ${props => props.theme.yellow};
	color: ${props => props.theme.grey};
	font-family: 'Clear Sans Bold';
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
	<StyledFooter>
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
						<a target="_blank">Service Procedures</a>
					</Link>
					<span> • </span>
					<Link href="/careers">
						<a>Careers</a>
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
