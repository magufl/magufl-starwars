import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";


export const DetailVehicle = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getCurrentVehicle();
    }, []);

    return (
        !store.currentVehicle
            ?
            <p className="text-danger">no hay data</p>
            :
            <div className="card mb-3 mx-auto" style={{ width: "35rem" }}>
                <div className="row g-0 ">
                    <div className="d-flex">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${store.currentVehicle.uid}.jpg`}
                            className="card-img-top rounded img-fluid m-2" style={{ height: 250, width: 200 }}
                        />
                        <div>
                            <h1 className="ms-2">
                            Model: 
                            </h1>
                            <h1 className="ms-2">
                                {store.currentVehicle.properties.model}
                            </h1>
                            <p className="ms-2">
                            Cargo capacity: {store.currentVehicle.properties.cargo_capacity}
                            </p>
                            <p className="ms-2">
                            Consumables: {store.currentVehicle.properties.consumables}
                            </p>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row">Cost in credits</th>
                                <td>{store.currentVehicle.properties.cost_in_credits}</td>
                            </tr>
                            <tr>
                            <th scope="row">Created</th>
                                <td>{store.currentVehicle.properties.created}</td>
                            </tr> 
                            <tr>
                                <th scope="row">Crew</th>
                                <td>{store.currentVehicle.properties.crew}</td>
                            </tr>
                            <tr>
                                <th scope="row">Length</th>
                                <td>{store.currentVehicle.properties.length}</td>
                            </tr>
                            <tr>
                                <th scope="row">Manufacturer</th>
                                <td>{store.currentVehicle.properties.manufacturer}</td>
                            </tr>
                            <tr>
                                <th scope="row">Max atmosphering speed</th>
                                <td>{store.currentVehicle.properties.max_atmosphering_speed}</td>
                            </tr>
                            <tr>
                                <th scope="row">Model</th>
                                <td>{store.currentVehicle.properties.model}</td>
                            </tr>
                            <tr>
                                <th scope="row">Vehicle class</th>
                                <td>{store.currentVehicle.properties.vehicle_class}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
    )
}