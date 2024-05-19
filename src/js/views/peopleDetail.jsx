import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";


export const DetailPeople = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getCurrentPeople();
    }, []);

    return (
        !store.currentPeople
            ?
            <p className="text-danger">no hay data</p>
            :
            <div className="card mb-3 mx-auto" style={{ width: '25rem' }}>
                <div className="row g-0 ">
                    <div className="d-flex">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${store.currentPeople.uid}.jpg`}
                            className="card-img-top rounded img-fluid m-2" style={{ height: 250, width: 200 }}
                        />
                        <div>
                            <h1 className="ms-2">
                                Name: 
                            </h1>
                            <h1 className="ms-2">
                                {store.currentPeople.properties.name}
                            </h1>
                            <p className="ms-2">
                            Height: {store.currentPeople.properties.height}
                            </p>
                            <p className="ms-2">
                            Mass: {store.currentPeople.properties.mass}
                            </p>
                        </div>
                    </div>

                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row">Hair color</th>
                                <td>{store.currentPeople.properties.hair_color}</td>
                            </tr>
                            <tr>
                            <th scope="row">Skin color</th>
                                <td>{store.currentPeople.properties.skin_color}</td>
                            </tr> 
                            <tr>
                                <th scope="row">Eye color</th>
                                <td>{store.currentPeople.properties.eye_color}</td>
                            </tr>
                            <tr>
                                <th scope="row">Birth year</th>
                                <td>{store.currentPeople.properties.birth_year}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gender</th>
                                <td>{store.currentPeople.properties.gender}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}