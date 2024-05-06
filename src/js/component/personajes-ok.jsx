import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PersonajesBien = () => {
    const host = 'https://www.swapi.tech/api';

    const traerPersonajes = async () => {
        const uri = host + '/people/';
        const options = {
            method: 'GET'
        }
        const response = await fetch(uri, options); 
        if (!response.ok) {
            //tratamos el error
            if (response.status == '404') {
                console.log('bad request 404')
            }
            console.log('Error: ', response.status, response.statusText)
            return
        }
        const data = await response.json()
        console.log('data:', data);
    }
    

    return (
        <div className="bg-dark px-4">
            
            <h1 className="text-light">Personajes</h1>
            <div className="d-flex justify-content-center">
                <div className="card bg-secondary text-light" style={{ width: '10rem' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
