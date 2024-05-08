import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Personajes = () => {
    const host = 'https://www.swapi.tech/api';
    const [personajes, setPersonajes] = useState([]);
    const [id, setID] = useState('');

    async function traerPersonajes() {
        const uri = host + '/people/';
        const options = {
            method: 'GET'
        }
        const response = await fetch(uri, options);
        const data = await response.json();
        setPersonajes(data.results);
        setID(data.results)
        console.log(data.results)
    };


    useEffect(() => {
        traerPersonajes();
    }, []);


    return (
        <div className="bg-dark px-4">
            <h1 className="text-light">Personajes</h1>
            <div className="row">
                {personajes.map((item, id) =>
                    <div key={id} className="card d-flex justify-content-center m-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">ID: {item.uid}</p>
{/*                             <Link to={`${host}/people/${item.uid}`} className="btn btn-primary">More info</Link>
 */}                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};