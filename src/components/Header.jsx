import '../fonts/Anabele.otf';
import '../fonts/Anabele.ttf';
import '../fonts/KEROZENE.otf';
import '../fonts/Ogg-Italic.otf';
import '../fonts/Ogg-Roman.otf';
import { NavLink } from "react-router-dom";
// import { useLocation } from 'react-router-dom';


export function Header() {
    // const location = useLocation();
    // if (location.pathname !== '/') {
    //     return null; // Hide the header on routes other than "/"
    // }

    // const isHomePage = location.pathname === "/";

    return (
        <div className="flex items-center align-middle pb-5">
            <NavLink
                to="/"
                className="text-6xl pt-5 font-Anabele align-middle hover:scale-105 transition-transform duration-300"
            >
                S.
            </NavLink>
        </div>
    );
}