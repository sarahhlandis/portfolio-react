import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { NavigationLinks } from "./NavLinks";

// NAV FOR WHEN ON ANY PAGE BUT HOME (able to return home from this nav)

export function HomeNav() {
    const location = useLocation();

    let activeNavStyle = {
        color: "white",
        fontStyle: "italic",
        backgroundColor: "black",
    };
  
    return (
      <>
        <li className="hover:italic">          
        <NavLink
            to="/"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
        >
            home
        </NavLink>
        </li>
        {location.pathname === '/' ? <HomeNav /> : <NavigationLinks />}
     </>
    );
}