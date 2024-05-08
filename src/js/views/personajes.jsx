import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Personajes = () => {
    const host = 'https://www.swapi.tech/api';
    const [personajes, setPersonajes] = useState([]);

    async function traerPersonajes() {
        const uri = host + '/people/';
        const options = {
            method: 'GET'
        }
        const response = await fetch(uri, options);
        const data = await response.json();
        setPersonajes(data.results);
        console.log(data.results)
    };

    useEffect(() => {
        traerPersonajes();
    }, []);





    return (
        <div className="bg-dark px-4">

            <h1 className="text-light">Personajes</h1>
            <div className="d-flex justify-content-center container ">
                 {personajes.map((item) =>
                    <div className=" card bg-secondary text-light mx-2" style={{ backgroundColor: 'green' , width: '100rem'}} >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <a href="#" className="btn btn-primary">Go</a>
                        </div>
                    </div>
                )} 
            </div>
        </div>
    );
};
