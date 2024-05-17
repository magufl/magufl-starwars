const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people : [],
			planets: [],
			vehiculos: [],
			currentPlanetURL: null,
			currentPlanet: null,
			counter: 0,
		},
		actions: {
			// Use getActions to call a function within a fuction
			incrementar: () => {setStore({counter: getStore().counter + 1})},
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
			getPeople: async () => {
				const uri = 'https://www.swapi.tech/api/people/';
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				const data = await response.json();
				setStore ({people: data.results});
			},
			getPlanets: async () => {
				const uri = 'https://www.swapi.tech/api/planets/';
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				const data = await response.json();
				setStore ({planets: data.results});
			},
			getVehiculos: async () => {
				const uri = 'https://www.swapi.tech/api/vehicles/';
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				const data = await response.json();
				setStore ({vehiculos: data.results});
			},
			settingPlanetURL: (text) => {setStore({currentPlanetUrl: text})},
			currentPlanet: async () => {
				const uri = setStore().currentPlanetURL;
				console.log(currentPlanetURL)
			},
		}
	};
};

export default getState;
