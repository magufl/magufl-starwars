import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Planets } from "./views/planetas.jsx";
import { Footer } from "./component/footer";
import { People } from "./views/people.jsx";
import { Vehiculos } from "./views/vehiculos.jsx";
import { DetailPlanets } from "./views/planetaDetail.jsx"



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/personajes" element={<People />} />
						<Route path="/planetas" element={<Planets />} />
						<Route path="/vehiculos" element={<Vehiculos/>}/>
				
						<Route path="/planetas/:planetaId" element={<DetailPlanets/>}/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
