import React, { Component } from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

class Nav extends Component {
	render() {
		return (
			<NavStyles role="navigation">
				<Link prefetch href="/about" as="about-us">
					<a>about us</a>
				</Link>
				<Link prefetch href="/services">
					<a>services</a>
				</Link>
				<Link prefetch href="/contact">
					<a>contact</a>
				</Link>
				<Link prefetch href="/training" as="weekly-training">
					<a>training</a>
				</Link>
				<Link href="https://erm.yellowfolder.com/login">
					<a target="_blank" rel="noopener noreferrer">
						log in
					</a>
				</Link>
			</NavStyles>
		);
	}
}

export default Nav;
