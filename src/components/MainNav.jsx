import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { HomeNav } from './HomeNav';

// HEADER COMPONENT INCL. NAVLINKS 
// FOR WHEN ON ANY PAGE EXCEPT HOME

export function MainNav() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <nav className="items-center justify-between md:flex md:flex-row ">
          <Header />
          {/* hide horizontal nav on smaller screens */}
            <ul className="hidden text-center text-xl font-Anabele space-x-4 md:flex md:flex-row md:space-x-10">
              <HomeNav />
            </ul>
        </nav>
      )}
    </>
  );
}
