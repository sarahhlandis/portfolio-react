import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { NavigationLinks } from "./NavLinks";

// NAV FOR WHEN ON ANY PAGE EXCEPT HOME (able to return home from this nav)

export function HomeNav() {
    const location = useLocation();
    const notHomePage = location.pathname !== "/";

    const linkStyle = notHomePage
    ? "relative inline-block bg-gradient-to-t from-orange-300 from-35% to-transparent to-40% hover:bg-orange-300 transition duration-100 ease-in-out"
    : undefined;
  
    return (
      <>
        <li className="hover:italic">          
            <NavLink
                to="/"
                className={linkStyle}
            >
                home
            </NavLink>
        </li>
        {location.pathname === '/' ? <HomeNav /> : <NavigationLinks />}
     </>
    );
}