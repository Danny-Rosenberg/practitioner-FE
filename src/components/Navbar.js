import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
//	setTimeout(() => {
//		props.history.push('/about');
//	}, 8000);
	return (
		<nav className="nav-wrapper green darken-5">
			<div className="container">
				<a className="brand-logo">Todos</a>
				<ul className="right">
					<li><NavLink to="/">Todays List</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact Marilyn</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}


export default withRouter(Navbar)
