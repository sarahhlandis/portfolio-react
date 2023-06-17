import '../fonts/Anabele.otf';
import '../fonts/Anabele.ttf';
// import '../fonts/KEROZENE.otf';
// import '../fonts/Ogg-Italic.otf';
// import '../fonts/Ogg-Roman.otf';
import { HomeNav } from './HomeNav';
import { useLocation } from 'react-router-dom';
import { Header } from './header';

// HEADER COMPONENT FOR WHEN ON ALL PAGES EXCEPT HOME

export function HomeHeader() {
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


// export function HomeHeader() {
//     return (
//         <nav className="px-4 py-6 flex flex-col md:flex-row items-center justify-between">
//           <div className="flex items-center mb-4 md:mb-0">
//             <h1 className="mr-2 text-xl font-Anabele">sarah landis</h1>
//           </div>
//           {/* <ul className="flex px-4 py-6 text-center space-x-10 text-xl font-Anabele">
//             <HomeNav />
//           </ul> */}
//         </nav>
//       );
//     }
