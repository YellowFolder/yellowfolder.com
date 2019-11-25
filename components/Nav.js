import Link from 'next/link';
import React, { Component } from 'react';
import { ItemStyles, NavBar } from './styles/NavStyles';

class Nav extends Component {
	state = {
		isChecked: false,
	};

	handleToggle = () => {
		console.log('handle toggle!');
		this.setState(prevState => ({
			isChecked: !prevState.isChecked,
		}));
	};

	render() {
		return (
			<NavBar className="nav__bar">
				<input
					type="checkbox"
					id="toggle"
					aria-hidden="true"
					checked={this.state.isChecked}
					onChange={this.handleToggle}
				/>
				<label htmlFor="toggle" className="nav__icon" aria-hidden="true">
					Expand the Menu
					<span className="nav__icon-line" />
					<span className="nav__icon-line" />
					<span className="nav__icon-line" />
				</label>

				<ItemStyles role="navigation" className="nav">
					<ul className="nav__items">
						<li className="nav__item" onClick={this.handleToggle}>
							<Link href="/about-us">
								<a>about us</a>
							</Link>
						</li>
						<li className="nav__item" onClick={this.handleToggle}>
							<Link href="/services">
								<a>services</a>
							</Link>
						</li>
						<li className="nav__item" onClick={this.handleToggle}>
							<Link href="/contact">
								<a>contact</a>
							</Link>
						</li>
						<li className="nav__item" onClick={this.handleToggle}>
							<Link href="/weekly-training">
								<a>training</a>
							</Link>
						</li>
						<li className="nav__item" onClick={this.handleToggle}>
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
	}
}

export default Nav;
