import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Planetas = () => {
    const host = 'https://www.swapi.tech/api';
    const [planetas, setPlanetas] = useState([]);

    async function traerPlanetas() {
        const uri = host + '/planets/';
        const options = {
            method: 'GET'
        }
        const response = await fetch(uri, options);
        const data = await response.json();
        setPlanetas(data.results);
        console.log(data.results);
    };

    useEffect(() => {
        traerPlanetas();
    }, []);

    return (
        <div className="bg-dark px-4">
            <h1 className="text-light">Planetas</h1>
            <div className="row">
            {planetas.map((item, id) => 
                <div key={id} className="card d-flex justify-content-center m-2" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">ID: {item.uid}</p>
                        <a href="#" className="btn btn-primary">More info</a>
                    </div>
                </div>
            )}

            </div>
        </div>
    )
};
