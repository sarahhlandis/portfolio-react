// import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { NavigationLinks } from "../components/NavLinks";

// NAV INCLUDING HOME LINK 
// SHOWS WHEN ON ANY PAGE EXCEPT HOME

export function HomeNav() {
    const location = useLocation();
    // remove tab to home route, uncomment to add 'home' into horizontal nav
    // const notHomePage = location.pathname !== "/";

    // const linkStyle = notHomePage
    // ? "relative inline-block bg-gradient-to-t from-orange-400 from-35% to-transparent to-40% hover:bg-orange-400 transition duration-100 ease-in-out"
    // : undefined;
  
    return (
      <>
      {/* remove tab to home route, uncomment to add 'home' into horizontal nav */}
        {/* <li className="hover:italic">          
            <NavLink
                to="/"
                className={linkStyle}
            >
                home
            </NavLink>
        </li> */}
        {location.pathname === '/' ? <HomeNav /> : <NavigationLinks />}
     </>
    );
}