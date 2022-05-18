import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav
			class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
			id="main-nav"
		>
			<div class="container">
				<a href="index.html" class="navbar-brand">
					Lilia Salas
				</a>
				<button
					class="navbar-toggler"
					data-toggle="collapse"
					data-target="#navbarCollapse"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a href="#home" class="nav-link">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a href="#explore-head-section" class="nav-link">
								About
							</a>
						</li>
						<li class="nav-item">
							<a href="#create-head-section" class="nav-link">
								Contact
							</a>
						</li>
						<li class="nav-item">
							<a href="#share-head-section" class="nav-link">
								App
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
