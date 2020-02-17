import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav className="nav-wrapper blue-grey darken-5">
			<div className="container">
				<a className="brand-logo left">Wellesley Psychologists</a>
				<ul className="right">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact Marilyn</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}


export default withRouter(Navbar)
