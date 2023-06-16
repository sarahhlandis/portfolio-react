import '../fonts/Anabele.otf';
import '../fonts/Anabele.ttf';
import '../fonts/KEROZENE.otf';
import '../fonts/Ogg-Italic.otf';
import '../fonts/Ogg-Roman.otf';
import { NavLink } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
// import { HomeNav } from './HomeNav';


export function Header() {
    // const location = useLocation();
    // if (location.pathname !== '/') {
    //     return null; // Hide the header on routes other than "/"
    // }

    // const isHomePage = location.pathname === "/";

    return(
        <div className="flex items-center align-middle">
            <NavLink to="/" className="mr-2 text-6xl font-Anabele p-10 align-middle">
                S.
            </NavLink>
        </div>
    );

    // return (
    //     <nav className="px-4 py-6 flex flex-col md:flex-row items-center justify-between">
    //       <div className="flex items-center mb-4 md:mb-0">
    //         <NavLink to="/" className="mr-2 text-6xl font-Anabele mb-10">
    //             S.
    //         </NavLink>
    //       </div>
    //       {/* <ul className="flex px-4 py-6 text-center space-x-10 text-xl font-Anabele">
    //         <HomeNav />
    //       </ul> */}
    //     </nav>
    // );
}
