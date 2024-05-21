import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Contacts = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1 className="text-center text-light">CONTACTOS</h1>
            <p className="text-center">
            <Link to= "/add-contact" className="btn btn-success">
                Añadir contacto
            </Link>

            </p>
           
            <ul className="list-group">
                {!store.contacts ?
                    <h1>No hay datos</h1>
                    :
                    <div className="row ps-3 d-flex justify-content-center">
                        {store.contacts.map((item, id) =>
                            <div key={id} className="card d-flex justify-content-center m-2 bg-dark text-light" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">NAME: {item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">ADDRESS: {item.address}</h6>
                                    <div className="d-flex justofy-content-between">
                                        <p>EMAIL: </p><a href="#" className="card-link"> {item.email}</a>
                                    </div>
                                    <div className="d-flex justofy-content-between">
                                        <p>PHONE: </p><a href="#" className="card-link"> {item.phone} </a>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                }
            </ul>
        </div>
    )
}