import React from "react";
import { HomeNav } from "../components/HomeNav";
import { NavigationLinks } from "../components/NavLinks";

export function Home(){
    return(
    <div>
        {/* <ul className="flex px-4 py-6 text-center space-x-10 text-xl font-Anabele"> */}
        <ul className="font-Anabele text-9xl text-left">    
            <NavigationLinks />
        </ul>
    </div>

    );

}