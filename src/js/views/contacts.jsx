import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Contacts = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getContacts();
    }, []);

    const handleEditUser = (item) => {
        actions.settingCurrentContactId(item.id);
        actions.settingCurrentContact(item);
        navigate('/contact-list-edit');
    }

    const handleDelete = (item) => {
        actions.settingCurrentContactId(item.id);
        actions.deleteContact().then(() => {
            actions.getContacts(); 
        });
    }

    return (
        <div className="container">
            <h1 className="text-center text-light">CONTACTS</h1>
            <p className="text-center">
                <Link to="/add-contact" className="btn btn-success">
                    Add contact
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
                                    <div className="d-flex justify-content-between">
                                        <p>EMAIL:</p>
                                        <a href="#" className="card-link">{item.email}</a>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>PHONE:</p>
                                        <a href="#" className="card-link">{item.phone}</a>
                                    </div>

                                    <button className="btn btn-primary m-1" onClick={() => handleEditUser(item)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger m-1" onClick={() => handleDelete(item)}>
                                        Double click to delete contact
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                }
            </ul>
        </div>
    );
}
