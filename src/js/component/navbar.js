import React, { useContext } from "react";
import { Link } from "react-router-dom";
import descarga from "../../img/descarga.png";
import { store } from "../store/flux.js"
import { Context } from "../store/appContext.js";


export const Navbar = () => {

	const host = "https://cuddly-fishstick-977x6g7xjvqj37wr9-3000.app.github.dev/";
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark px-4">
			<Link to="/">
				<img src={descarga} height='80px' />
			</Link>

			<div className="d-flex flex-row-reverse">
			
				<Link to="/people" type="button" className="btn btn-outline-warning m-1">Characters
				</Link>
				<Link to="/planets" type="button" className="btn btn-outline-warning m-1">Planets</Link>
				<Link to="/vehicles" type="button" className="btn btn-outline-warning m-1">Vehicles</Link>
				<Link to="/contacts" type="button" className="btn btn-outline-warning m-1">Contacts</Link>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						FAVS {store.fav.length}
					</button>
				
					<ul className="dropdown-menu">
						{store.fav.map((item, id) => (
							<li key={id}>
								<a className="dropdown-item"> {item} </a>
							</li>
						))}
					</ul>
				</div>

			</div>
		</nav>
	);
};
