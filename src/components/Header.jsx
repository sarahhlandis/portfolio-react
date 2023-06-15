import '../fonts/Anabele.otf';
import '../fonts/Anabele.ttf';
import '../fonts/KEROZENE.otf';
import '../fonts/Ogg-Italic.otf';
import '../fonts/Ogg-Roman.otf';
import { NavLink } from "react-router-dom";
import { HomeNav } from './HomeNav';
import { useLocation } from 'react-router-dom';


export function Header() {
    const location = useLocation();

    return (
        <nav className="px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <NavLink to="/" className="mr-2 text-xl font-Anabele">
                sarah landis
            </NavLink>
          </div>
          <ul className="flex px-4 py-6 text-center space-x-10 text-xl font-Anabele">
            <HomeNav />
          </ul>
        </nav>
      );
    }


