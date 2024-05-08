import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const People = () => {
    const { store, actions } = useContext(Context);
    console.log(store.people)
    return (
        <>
            {store.people.map((item, id) =>
                <div key={id} className="card d-flex justify-content-center m-2" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">ID: {item.uid}</p>
                    </div>
                </div>
            )}

            <p>hola</p>

        </>
    )
}