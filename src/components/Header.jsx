import '../fonts/Anabele.otf';
import '../fonts/Anabele.ttf';
import '../fonts/KEROZENE.otf';
import '../fonts/Ogg-Italic.otf';
import '../fonts/Ogg-Roman.otf';
import { NavLink } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { useMediaQuery } from 'react-responsive';


// "HEADER" COMPONENT S. FOR HOME PAGE ONLY 
// (NAV LINKS NOT IN NAVBAR)

export function Header() {
    // const location = useLocation();
    // if (location.pathname !== '/') {
    //     return null; // Hide the header on routes other than "/"
    // }

    // const isHomePage = location.pathname === "/";
    const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });

    return (
        <div>
        {isMdScreenOrLarger ? (
        <div className="flex items-center align-middle justify-between">
            <NavLink
                to="/"
                className="text-6xl pt-5 font-Anabele text-semibold align-middle hover:scale-105 transition-transform duration-300"
            >
                S.
            </NavLink>
        </div>) : 
        (
            <div className="flex items-center align-middle justify-between">
            <NavLink
                to="/"
                className="text-lg pt-5 font-poppins font-extralight align-middle hover:scale-105 transition-transform duration-300"
            >
                /Sarah Landis
            </NavLink>
            <div className="pt-5">
                <HamburgerMenu />
            </div>
        </div>
        )}
        </div>
    );
}