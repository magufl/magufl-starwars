import React from "react";
import { Link } from "react-router-dom";
import descarga from "../../img/descarga.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark px-4">
			<Link to="/">
				<img src={descarga} height= '80px' />
			</Link>
			<div class="dropdown">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown button
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};
