import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PersonajeIndividual = () => {
    const host = 'https://www.swapi.tech/api';
    const [planetas, setPlanetas] = useState([]);

    async function planetaIndivdual(item) {
        const uri = `${host}/planets/${item.id}` ;
        const options = {
            method: 'GET'
        }
        const response = await fetch(uri, options);
        const data = await response.json();
        setPlanetas(data.results);
        console.log(data.results);
    };

    useEffect(() => {
        planetaIndivdual();
    }, []);

    return (
        <div className="bg-dark px-4">

            <h1 className="text-light">Planeta </h1>
            <div className="d-flex justify-content-center">
                <div className="row card-group">

                {planetas.map((item) =>
            
                    <div className=" card bg-secondary text-light mx-2" >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.diameter}</h5>
                            <a href="#" className="btn btn-primary">Go</a>
                        </div>
                    </div>
                
                )}
                </div>
            </div>
        </div>
    );
};
