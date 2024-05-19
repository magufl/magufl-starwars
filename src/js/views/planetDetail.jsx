import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";


export const DetailPlanets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getCurrentPlanet();
    }, []);

    return (
        !store.currentPlanet
            ?
            <p className="text-danger">no hay data</p>
            :
            <div className="card mb-3 mx-auto" style={{ width: '30rem' }}>
                <div className="row g-0 ">
                    <div className="d-flex">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${store.currentPlanet.uid}.jpg`}
                            className="card-img-top rounded img-fluid m-2" style={{ height: 200, width: 200 }}
                        />
                        <div>
                            <h1 className="ms-2">
                                Planet: 
                            </h1>
                            <h1 className="ms-2">
                                {store.currentPlanet.properties.name}
                            </h1>
                            <p className="ms-2">
                            Diameter: {store.currentPlanet.properties.diameter}
                            </p>
                            <p className="ms-2">
                            Rotation period: {store.currentPlanet.properties.rotation_period}
                            </p>
                        </div>
                    </div>

                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row">Orbital period</th>
                                <td>{store.currentPlanet.properties.orbital_period}</td>
                            </tr>
                            <tr>
                            <th scope="row">Gravity</th>
                                <td>{store.currentPlanet.properties.gravity}</td>
                            </tr> 
                            <tr>
                                <th scope="row">Population</th>
                                <td>{store.currentPlanet.properties.population}</td>
                            </tr>
                            <tr>
                                <th scope="row">Climate</th>
                                <td>{store.currentPlanet.properties.climate}</td>
                            </tr>
                            <tr>
                                <th scope="row">Terreno</th>
                                <td>{store.currentPlanet.properties.terrain}</td>
                            </tr>
                            <tr>
                                <th scope="row">Surface water</th>
                                <td>{store.currentPlanet.properties.surface_water}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>




    )
}