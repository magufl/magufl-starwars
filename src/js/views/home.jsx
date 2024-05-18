import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import home from "../../img/home.jpg";


export const Home = () => {
    
    return (
        <div className=" px-4 text-center">
            <Link to="/">
				<img src={home} height='500px'/>
			</Link>
        </div>
    )
};