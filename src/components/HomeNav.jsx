import { NavLink } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';
import { NavigationLinks } from "./NavLinks";


export function HomeNav() {
    const location = useLocation();

    let activeNavStyle = {
        color: "white",
        fontStyle: "italic",
        backgroundColor: "black",
    };
  
    return (
      <>
        {location.pathname === '/' ? <HomeNav /> : <NavigationLinks />}
        {/* {location.pathname === '/' ? <NavigationLinks /> : <HomeNav />} */}
        <li className="hover:italic">          
        <NavLink
            to="/"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
        >
            home
        </NavLink>
        </li>
     </>
    );
}