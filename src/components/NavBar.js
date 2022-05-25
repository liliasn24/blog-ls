import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
			{props.routes.map(({ key, path }) => (
				<Link key={key} to={path}>
					{key}
				</Link>
			))}
		</nav>
	);
};

export default NavBar;
