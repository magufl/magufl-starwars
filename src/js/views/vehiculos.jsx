import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const Vehiculos = () => {
    const { store, actions } = useContext(Context);
    console.log(store.vehiculos)
    return (
        <>
            <div className="row ps-3 bg-dark d-flex justify-content-center">
                {store.vehiculos.map((item, id) =>
                    <div key={id} className="card d-flex justify-content-center m-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top"></img>

                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">ID: {item.uid}</p>
                            <button type="button" className="btn btn-primary">More info</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={() => actions.incrementar}><i className="fa fa-heart text-warning" /></button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}