import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
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
