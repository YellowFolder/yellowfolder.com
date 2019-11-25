import Link from 'next/link';
import React, { useState } from 'react';
import { ItemStyles, NavBar } from './styles/NavStyles';

const Nav = () => {
	const [isOpen, toggleNav] = useState(false);

	return (
		<NavBar className="nav__bar">
			<input
				type="checkbox"
				id="toggle"
				aria-hidden="true"
				checked={isOpen}
				onChange={() => toggleNav(!isOpen)}
			/>
			<label htmlFor="toggle" className="nav__icon" aria-hidden="true">
				Expand the Menu
				<span className="nav__icon-line" />
				<span className="nav__icon-line" />
				<span className="nav__icon-line" />
			</label>

			<ItemStyles role="navigation" className="nav">
				<ul className="nav__items">
					<li className="nav__item" onClick={() => toggleNav(!isOpen)}>
						<Link href="/about-us">
							<a>about us</a>
						</Link>
					</li>
					<li className="nav__item" onClick={() => toggleNav(!isOpen)}>
						<Link href="/services">
							<a>services</a>
						</Link>
					</li>
					<li className="nav__item" onClick={() => toggleNav(!isOpen)}>
						<Link href="/contact">
							<a>contact</a>
						</Link>
					</li>
					<li className="nav__item" onClick={() => toggleNav(!isOpen)}>
						<Link href="/weekly-training">
							<a>training</a>
						</Link>
					</li>
					<li className="nav__item" onClick={() => toggleNav(!isOpen)}>
						<a
							href="https://erm.yellowfolder.com/login/#"
							target="_blank"
							rel="noopener noreferrer"
						>
							log in
						</a>
					</li>
				</ul>
			</ItemStyles>
		</NavBar>
	);
};

export default Nav;
