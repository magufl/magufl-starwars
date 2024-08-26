import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Planets } from "./views/planet.jsx";
import { Footer } from "./component/footer";
import { People } from "./views/people.jsx";
import { Vehiculos } from "./views/vehicle.jsx";
import { DetailPlanets } from "./views/planetDetail.jsx"
import { DetailPeople } from "./views/peopleDetail.jsx"
import { DetailVehicle} from "./views/vehicleDetail.jsx"
import { Contacts } from "./views/contacts.jsx"
import { Formulario } from "./views/addContact.jsx"
import { ContactListEdit } from "./views/editContact.jsx"


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
						<Route path="/people" element={<People />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/vehicles" element={<Vehiculos/>}/>
				
						<Route path="/planets/:planetaId" element={<DetailPlanets/>}/>
						<Route path="/people/:personajeId" element={<DetailPeople/>}/>
						<Route path="/vehicles/:vehicleId" element={<DetailVehicle/>}/>

						<Route path="/contacts" element={<Contacts/>}/>
						<Route path='/contact-list-Edit' element={<ContactListEdit/>}  />
						<Route path="/add-contact" element={<Formulario/>}/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
