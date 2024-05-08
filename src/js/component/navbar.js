import React from "react";
import { Link } from "react-router-dom";
import descarga from "../../img/descarga.png";

export const Navbar = () => {

	const host = "https://cuddly-fishstick-977x6g7xjvqj37wr9-3000.app.github.dev/";

	return (
		<nav className="navbar navbar-dark bg-dark px-4">
			<Link to="/">
				<img src={descarga} height='80px' />
			</Link>

			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown button
				</button>
				<ul className="dropdown-menu dropdown-menu-dark">
					<li><Link to="/personajes" className="dropdown-item " >Personajes</Link></li>
					<li><Link to="/planetas" className="dropdown-item " >Planetas</Link></li>
					<li><Link to="/single/:theid" className="dropdown-item " >Single</Link></li>
					<li><hr className="dropdown-divider"/></li>
					<li><a className="dropdown-item" href="#">Separated link</a></li>
				</ul>
			</div>
		</nav>
	);
};
