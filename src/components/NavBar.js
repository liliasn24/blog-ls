import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav
			className="navbar navbar-expand-sm bg-light navbar-dark fixed-top"
			id="main nav"
		>
			<div className="container">
				{props.routes.map(({ key, path }) => (
					<Link key={key} to={path}>
						{key}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
