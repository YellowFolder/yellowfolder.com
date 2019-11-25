import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ItemStyles, NavBar } from './styles/NavStyles';

const Nav = () => {
	const router = useRouter();
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
							<a onMouseEnter={() => router.prefetch('/about-us')}>about us</a>
						</Link>
					</li>
					<li className="nav__item" onClick={() => toggleNav(!isOpen)}>
						<Link href="/services">
							<a onMouseEnter={() => router.prefetch('/services')}>services</a>
						</Link>
					</li>
					<li className="nav__item" onClick={() => toggleNav(!isOpen)}>
						<Link href="/contact">
							<a onMouseEnter={() => router.prefetch('/contact')}>contact</a>
						</Link>
					</li>
					<li className="nav__item" onClick={() => toggleNav(!isOpen)}>
						<Link href="/weekly-training">
							<a onMouseEnter={() => router.prefetch('/weekly-training')}>training</a>
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
