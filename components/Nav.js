import React, { Component } from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

class Nav extends Component {
	render() {
		return (
			<NavStyles>
				<>
					<Link prefetch href='/about'>
						<a>about us</a>
					</Link>
					<Link prefetch href='/services'>
						<a>services</a>
					</Link>
					<Link prefetch href='/contact'>
						<a>contact</a>
					</Link>
					<Link prefetch href='/training'>
						<a>training</a>
					</Link>
					<Link href='/login'>
						<a target="_blank">log in</a>
					</Link>
				</>
			</NavStyles>
		)
	}
}

export default Nav;
