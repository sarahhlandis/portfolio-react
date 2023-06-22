import '../fonts/Anabele.otf';
import '../fonts/Anabele.ttf';
import { HomeNav } from './HomeNav';
import { useLocation } from 'react-router-dom';
import { Header } from '/src/components/header';

// HEADER COMPONENT INCL. NAVLINKS 
// FOR WHEN ON ANY PAGE EXCEPT HOME

export function MainNav() {
    const location = useLocation();
  
    return (
      <>
        {location.pathname !== '/' && (
          <nav className="flex flex-col md:flex-row items-center justify-between">
            <Header />
            {/* <ul className="text-right font-Anabele">
              <HomeNav />
            </ul> */}
            <ul className="flex text-center space-x-10 text-xl font-Anabele">
              <HomeNav />
            </ul>
          </nav>
        )}
      </>
    );
}
