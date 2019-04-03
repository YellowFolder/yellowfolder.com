import React, { Component } from 'react';
import Link from 'next/link';
import { NavBar, ItemStyles } from './styles/NavStyles';

class Nav extends Component {
	render() {
		return (
			<NavBar className="nav__bar">
				<input type="checkbox" id="toggle" aria-hidden="true" />
				<label htmlFor="toggle" className="nav__icon" aria-hidden="true">
					Expand the Menu
					<span className="nav__icon-line" />
					<span className="nav__icon-line" />
					<span className="nav__icon-line" />
				</label>

				<ItemStyles role="navigation" className="nav">
					<ul className="nav__items">
						<li className="nav__item">
							<Link prefetch href="/about-us">
								<a>about us</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link prefetch href="/services">
								<a>services</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link prefetch href="/contact">
								<a>contact</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link prefetch href="/weekly-training">
								<a>training</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link href="https://erm.yellowfolder.com/login">
								<a target="_blank" rel="noopener noreferrer">
									log in
								</a>
							</Link>
						</li>
					</ul>
				</ItemStyles>
			</NavBar>
		);
	}
}

export default Nav;
