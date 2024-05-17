import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    console.log(store.planets);

    const imgError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    }

    return (
        <>
            {!store.planets ? <h1>no no no</h1> :
                <div className="row ps-3 bg-dark d-flex justify-content-center">
                    {store.planets.map((item, id) =>
                        <div key={id} className="card d-flex justify-content-center m-2" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} onError={imgError} className="card-img-top"></img>
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">ID: {item.uid}</p>
                                <Link to={`/planetas/${item.uid}`} className="btn btn-primary"
                                   /*  onClick={actions.currentPlanet()} */ >
                                    More info
                                </Link>
                                <button type="button" className="btn btn-primary ms-2" onClick={() => actions.incrementar}><i className="fa fa-heart text-warning" /></button>
                            </div>
                        </div>)
                    }
                </div>
            }
        </>
    )
}