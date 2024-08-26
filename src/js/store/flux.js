const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],

			currentPeople: null,
			currentPeopleUrl: "",

			planets: [],

			currentPlanet: null,
			currentPlanetUrl: "",

			vehiculos: [],

			currentVehicle: null,
			currentVehicleUrl: "",

			fav: [],
			counter: 0,

			contacts: null,
			currentContactId: [{}],
			currentContact: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			incrementar: () => { setStore({ counter: getStore().counter + 1 }) },


			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			//PEOPLE
			getPeople: async () => {
				const uri = 'https://www.swapi.tech/api/people/';
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				const data = await response.json();
				setStore({ people: data.results });
			},
			getCurrentPeople: async () => {
				const uri = getStore().currentPeopleUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ currentPeople: data.result });
			},
			settingPeopleUrl: (text) => { setStore({ currentPeopleUrl: text }); },

			//PLANETS
			getPlanets: async () => {
				const uri = 'https://www.swapi.tech/api/planets/';
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				const data = await response.json();
				setStore({ planets: data.results });
			},
			getCurrentPlanet: async () => {
				const uri = getStore().currentPlanetUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ currentPlanet: data.result });
			},
			settingPlanetUrl: (text) => { setStore({ currentPlanetUrl: text }); },


			//VEHICLES
			getVehiculos: async () => {
				const uri = 'https://www.swapi.tech/api/vehicles/';
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				const data = await response.json();
				setStore({ vehiculos: data.results });
			},
			getCurrentVehicle: async () => {
				const uri = getStore().currentVehicleUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ currentVehicle: data.result });
			},
			settingVehicleUrl: (text) => { setStore({ currentVehicleUrl: text }); },



			//funcion para filtrar y mostrar favoritos en el array
			favoritos: (nombreFav) => {
				const store = getStore();
				if (store.fav.includes(nombreFav)) {
					setStore({ fav: store.fav.filter((repetido) => repetido != nombreFav) })
				} else {
					setStore({ fav: [...store.fav, nombreFav] })
				}
			},
			corazonColor: (name) => {
				const store = getStore();
				return store.fav.includes(name);
			},


			//TRAER AGENDA
			getContacts: async () => {
				const uri = 'https://playground.4geeks.com/contact/agendas/mar/contacts';
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options)
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				setStore({ contacts: data.contacts });
				console.log(data.contacts)
			},
			addContact: async (dataToSend) => {
				const uri = 'https://playground.4geeks.com/contact/agendas/mar/contacts';
				const options = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log("Error");
					return;
				}
				getActions().getContacts();	
			},
			settingCurrentContactId: (id) =>{setStore({currentContactId:id})},
			settingCurrentContact: (item) =>{setStore({currentContact:item})},
			editContact: async (dataToSend) => {
				const uri = `https://playground.4geeks.com/contact/agendas/mar/contacts/${getStore().currentContactId}`;
				const options = {
					method: 'PUT',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch( uri, options);
				if (!response.ok){
					console.log('Error', response.status, response.status.text);
					return
				}
				getActions().getcontacts();
			},
			deleteContact: async ()=>{
				const uri = `https://playground.4geeks.com/contact/agendas/mar/contacts/${getStore().currentContactId}`;
				const options = {
					method: 'DELETE'
				  };
				  const response = await fetch(uri, options);
				  if (!response.ok) {
					console.log('Error: ', response.status, response.statusText);
					return
				  };
				  getActions().getcontacts();
			}, 

		}
	};
};

export default getState;
