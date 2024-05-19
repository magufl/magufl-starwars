import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Vehiculos = () => {
    const { store, actions } = useContext(Context);
    console.log(store.vehiculos)


    const handleVehicle = (url) => {
        actions.settingVehicleUrl(url);
    };

    return (
        <>
            <div className="row ps-3 d-flex justify-content-center">
                {store.vehiculos.map((item, id) =>
                    <div key={id} className="card d-flex justify-content-center m-2 bg-dark" style={{ width: '18rem' }}>
                        <div className="card-body">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top"></img>

                            <h5 className="card-title text-white">{item.name}</h5>
                            <p className="card-text text-white">ID: {item.uid}</p>
                            
                            <Link to={"/vehicles/" + id} className="btn btn-secondary"
                                     onClick={() => handleVehicle(item.url)}
                                >
                                    More info
                                </Link>


                            <button type="button" className="btn btn-secondary ms-2" onClick={() => actions.favoritos(item.name)}>
                                    {actions.corazonColor(item.name) ?
                                        <i className="fa fa-liht fa-heart"/>
                                        :
                                        <i className="fa fa-heart text-danger" />
                                    }
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}