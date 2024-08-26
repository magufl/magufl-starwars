import React, { useContext, useState, useEffect } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const ContactListEdit = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (store.currentContact) {
            setName(store.currentContact.name || '');
            setEmail(store.currentContact.email || '');
            setPhone(store.currentContact.phone || '');
            setAddress(store.currentContact.address || '');
        }
    }, [store.currentContact]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() !== '') {
            const dataToSend = {
                id: store.currentContact.id,
                name: name,
                email: email,
                phone: phone,
                address: address
            };
            actions.editContact(dataToSend);
            navigate('/contacts');
        }
    };

    const handleChanges = (event) => {
        event.preventDefault();
        if (name.trim() !== '') {
            const dataToSend = {
                id: store.currentContact.id,
                name: name,
                email: email,
                phone: phone,
                address: address
            };
            actions.editContact(dataToSend);
            actions.getContacts();
            navigate('/contacts');
        }
    };

    const handleCancel = () => {
        navigate('/contacts');
    };

    return (
        <div className="container text-center mt-5 mb-5">
            {!store.currentContact ?
                <p className="text-light">NO HAY DATOS</p> :
                <form className="indexFont text-start text-light" onSubmit={handleSubmit}>
                    <h1 className="indexFont">Edit Contact</h1>
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                placeholder="First name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row g-3 mt-2">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputPhone"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className="col-12 text-end">
                            <button type="submit" className="btn btn-warning" onClick={handleChanges}>Submit</button>
                            <button type="button" className="btn btn-warning ms-2" onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            }
        </div>
    );
};
