import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Personajes } from "./views/personajes.jsx";
import { Planetas } from "./views/planetas.jsx";
import { Footer } from "./component/footer";
import { People } from "./views/people.jsx";


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
					<Home/>
					<People/> 
					<Routes>
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/planetas" element={<Planetas />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
