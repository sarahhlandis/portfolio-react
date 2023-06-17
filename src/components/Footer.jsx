import React from "react";
import { NavLink } from "react-router-dom";
// import { useLocation } from 'react-router-dom';


export function Footer() {
    // const location = useLocation();
    // if (location.pathname !== '/') {
    //     return null; // Hide the header on routes other than "/"
    // }

    // const isHomePage = location.pathname === "/";

    return(
        <div className="flex items-center align-middle pb-5">
            <NavLink to="/" className="text-6xl pt-5 font-Anabele align-middle">
                S.
            </NavLink>
        </div>
    );

}