import styled from 'styled-components';
import { query, size } from './device';

const NavBar = styled.div`
	.nav {
		&__bar {
			@media ${query.navMenu} {
				padding-top: 0;
			}
		}

		&__icon {
			display: block;
			position: absolute;
			top: 30px;
			right: 42px;
			height: 32px;
			width: 37px;
			cursor: pointer;
			text-indent: -9999px; /* Hide the label */
			transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);

			/* Remove blinking cursor */
			border: none;
			color: transparent;
			text-shadow: 0 0 0 ${props => props.theme.gray};
			text-align: center;

			&:focus {
				outline: none;
			}
			@media ${query.navMenu} {
				display: none;
			}
		}

		&__icon-line {
			position: absolute;
			display: block;
			background: #fff;
			width: 36px;
			height: 5px;
			left: 0;
			text-indent: 0;
			transition: all 0.2s ease-in-out;
			padding: 8px auto;
			border-radius: 2px;

			&:first-child {
				top: 0;
			}

			&:nth-child(2) {
				top: 12px;
			}

			&:nth-child(3) {
				top: 24px;
			}
		}
	}

	input[type='checkbox'] {
		display: none;
		visibility: hidden;

		@media (max-width: ${size.navMenu}) {
			&:checked {
				~ .nav {
					position: absolute;
					right: 32px;
					top: 80px;
					background: #fff;
					width: 260px;
				}

				~ nav .nav__items {
					height: auto;
					max-height: 30rem;
					transition: all 0.5s cubic-bezier(0.5, 1, 0.22, 1);
					display: flex;
					flex-flow: column nowrap;
					width: 100%;
					align-items: center;
					justify-content: center;
				}

				~ nav .nav__items .nav__item {
					background: ${props => props.theme.grey};
					width: 100%;
					margin: 1px 0;
					padding: 1rem 0;

					&:hover {
						cursor: pointer;
						background: ${props => props.theme.yellow};
						color: ${props => props.theme.grey};
						a {
							text-shadow: none;
							color: ${props => props.theme.grey};
						}
					}

					&:hover:last-child {
						a {
							color: ${props => props.theme.grey};
							text-shadow: none;
						}
					}
				}

				~ label .nav__icon-line:first-child {
					top: 0px;
					width: 36px;
					transform: translate3d(0, 13px, 0) rotate(-45deg);
				}

				~ label .nav__icon-line:nth-child(2) {
					opacity: 0;
				}

				~ label .nav__icon-line:nth-child(3) {
					top: 14px;
					width: 36px;
					transform: translate3d(0, 0px, 0) rotate(45deg);
				}
			}
		}
	}
`;

const ItemStyles = styled.nav`
	margin: 0;
	padding: 0;
	display: flex;
	font-size: 1.4rem;
	border: 0;
	width: 100%;
	justify-content: flex-end;
	align-items: center;

	.nav {
		&__items {
			padding-right: 2.5rem;
			max-height: 0px;
			overflow: hidden;
			list-style: none;
			margin: 0;
			padding: 0;
			/* transition: all 0.01s cubic-bezier(0.325, 1, 0.22, 1); */
			display: flex;
			align-items: center;
			justify-content: center;
			flex-flow: row nowrap;

			/* display the items at 1px greater than the width at which the nav items collapse. */
			@media (min-width: calc(${size.navMenu} + 1px)) {
				max-height: none;
				text-align: center;
				padding-right: 2.5rem;
			}
		}

		&__item {
			a {
				padding: 1rem 2.5rem 0;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				text-transform: lowercase;
				font-size: 1.4rem;
				background: none;
				border: 0;
				cursor: pointer;
				color: ${props => props.theme.white};
				font-family: ${props => props.theme.boldFont};
				text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2), 0px 0px 8px rgba(0, 0, 0, 0.2);
				@media (max-width: ${size.navMenu}) {
					padding: 1rem 3rem;
				}
			}

			&:last-child {
				a {
					color: ${props => props.theme.yellow};
				}
			}

			&:hover,
			&:focus {
				cursor: pointer;
				outline: none;
				color: ${props => props.theme.yellow};
			}
		}
	}
`;

export { NavBar, ItemStyles };
