import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav className="nav-wrapper blue-grey darken-5">
			<div className="container">
				<a href="/" className="brand-logo left">Wellesley Psychologists</a>
				<ul className="right">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact Marilyn</NavLink></li>
					<li><NavLink to="/login">Log In</NavLink></li>
					<li><NavLink to="/logout">Log Out</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}


export default withRouter(Navbar)
