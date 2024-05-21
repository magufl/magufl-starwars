import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router";


export const Formulario = () => {
    const { store, actions } = useContext(Context);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataToSend = {
            name, phone, email, address
        }
        actions.addContact(dataToSend);
        navigate ('/contacts')
    }

    return (
        <div className="container">
            <h1 className="text-center text-light">
                Add contact
            </h1>
            <form className="text-light" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="InputName" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="InputPhone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="InputEmail" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="InputAddress" value={address} onChange={(event) => setAddress(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <button type="reset" className="btn btn-danger ms-2">Cancel</button>

            </form>
        </div>
    )
}