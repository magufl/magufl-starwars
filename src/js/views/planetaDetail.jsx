import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";


export const DetailPlanets = () => {
    const {store, actions } = useContext(Context)

    useEffect(() => {
    
    }, [])

    return (
        <div className="cont">
            <h1>hola hola planet detail</h1>
        </div>
    )
}