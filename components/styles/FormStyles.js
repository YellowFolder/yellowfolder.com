import styled from 'styled-components';
import { size } from './device';

const StyledForm = styled.div`
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

	.form--header {
		grid-area: header;
		h1 {
			font-size: 5.4rem;
			line-height: 54px;
			font-family: ${props => props.theme.boldFont};
			font-weight: 700;
			margin: 2rem 0 0 0;
		}
		p {
			font-size: 2rem;
			line-height: 24px;
			color: ${props => props.theme.grey};
			font-weight: 400;
			padding: 0;
			margin: 0;
			@media (min-width: ${size.navMenu}) {
				padding-top: 1rem;
			}
		}
	}
	.form--sidebar {
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
	.form--body {
		grid-area: form;
		width: 100%;
		form {
			display: flex;
			flex-flow: column wrap;
			flex: 1 0 auto;
			align-items: flex-start;
			justify-content: center;
			.form--field-wrapper {
				display: flex;
				flex: 1 0 auto;
				flex-flow: column nowrap;
				width: 100%;
				padding: 10px 0;
				label {
					text-align: left;
					text-transform: capitalize;
					span {
						color: red;
						vertical-align: super;
					}
				}
				select,
				input,
				textarea {
					width: 100%;
					max-width: 500px;
					margin: 6px 0 0 0;
					padding: 9px 10px;
					font-size: 1.6rem;
					line-height: 22px;
					color: #33475b;
					background-color: #f5f8fa;
					border: 1px solid #cbd6e2;
					border-radius: 3px;
					&:focus {
						outline: none;
						border-color: rgba(82, 168, 236, 0.8);
						background-color: #fff;
					}
				}
				textarea,
				input {
					&:not(:empty):valid,
					&:not(:empty):optional {
						/* border: 1px solid #7ce882; */
						/* background-color: #fff; */
					}
				}
				select {
					height: 4rem;
				}
				textarea {
					height: 100px;
				}
			}
			.form--disclaimer {
				width: 100%;
				max-width: 500px;
				color: #33475b;
				margin-bottom: 3px;
				font-size: 14px;
				line-height: 24px;
			}
			.form--submit-wrapper {
				.form--submit-btn {
					background-color: ${props => props.theme.yellow};
					border-color: ${props => props.theme.yellow};
					font-family: ${props => props.theme.boldFont};
					font-weight: 700;
					color: #fff;
					text-align: center;
					line-height: 12px;
					font-size: 1.4rem;
					padding: 12px 24px;
					margin: 1rem 0;
					border-radius: 3px;
					border-style: solid;
					border-width: 1px;
					cursor: pointer;
					outline: none;
					&:active {
						outline: none;
					}
				}
			}
		}
	}
	@media (max-width: ${size.navMenu}) {
		grid-template-areas: 'header header header' 'form form form' 'sidebar sidebar sidebar';
		grid-gap: 15px 0;
		.form {
			&--header {
				width: 80%;
				margin: 0 auto;
				h1 {
					/* line-height: calc(64px + (64 - 58) * ((100vw - 800px) / (1000 - 400))); */
					line-height: 120%;
					font-size: calc(60px + (72 - 60) * ((100vw - 800px) / (1000 - 400)));
					margin: 0 0 2rem 0;
				}
			}
			&--body {
				form {
					width: 100%;
					margin: 0 auto;
					align-items: center;
					.form {
						&--field-item {
							align-items: flex-start;
							align-self: flex-start;
						}
						&--field-wrapper {
							width: 80%;
							margin: 0 auto;
						}
						&--disclaimer {
							align-self: center;
							max-width: none;
							width: 80%;
						}
						&--submit-wrapper {
							display: flex;
							align-items: center;
							width: 100%;
							justify-content: center;
							padding: 4rem 0 0 0;
							.form--submit-btn {
								width: 80%;
								font-size: 2.2rem;
								padding: 16px 24px;
								margin: 0 auto;
								border-radius: 6px;
							}
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
		.form {
			&--header {
				h1 {
					font-size: calc(56px + (72 - 56) * ((100vw - 800px) / (1000 - 400)));
				}
			}
		}
	}
	@media (max-width: ${size.mobileL}) {
		.form {
			&--header {
				width: 96%;
				h1 {
					font-size: calc(46px + (58 - 42) * ((100vw - 400px) / (1000 - 300)));
					line-height: 120%;
					margin: 0;
				}
			}
			&--body {
				form {
					.form {
						&--field-item {
							width: 96%;
							align-items: flex-start;
							align-self: flex-start;
						}
						&--field-wrapper {
						}
						&--disclaimer {
							margin: 0 2% 3px;
						}
						&--submit-wrapper {
						}
					}
					.form-field--wrapper {
						width: 96%;
					}
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
		.form {
			&--header {
				h1 {
					font-size: calc(42px + (58 - 42) * ((100vw - 400px) / (1000 - 300)));
				}
			}
		}
	}
`;

export default StyledForm;
