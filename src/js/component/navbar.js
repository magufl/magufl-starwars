import React, {useContext} from "react";
import { Link } from "react-router-dom";
import descarga from "../../img/descarga.png";
import {store} from "../store/flux.js"
import { Context } from "../store/appContext.js";


export const Navbar = () => {

	const host = "https://cuddly-fishstick-977x6g7xjvqj37wr9-3000.app.github.dev/";
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark px-4">
			<Link to="/">
				<img src={descarga} height='80px' />
			</Link>

			<div className="dropdown">
				<button type="button" className="btn btn-success position-relative">
					favoritos
					<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
					{store.counter}
				</span>
				</button>
				<Link to="/personajes" type="button" className="btn btn-outline-warning m-1">Personajes
				</Link>
				<Link to="/planetas" type="button" className="btn btn-outline-warning m-1">Planetas</Link>
				<Link to="/vehiculos" type="button" className="btn btn-outline-warning m-1">Vehículos</Link>

				<button className="btn btn-secondary dropdown-toggle m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					FAVS
				</button>

			</div>
		</nav>
	);
};
