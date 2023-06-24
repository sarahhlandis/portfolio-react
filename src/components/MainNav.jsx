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
        <nav className="md:flex md:flex-row items-center justify-between">
          <Header />
          {/* hide horizontal nav on smaller screens */}
            <ul className="hidden md:flex md:flex-row space-x-4 md:space-x-10 text-center text-xl font-Anabele">
              <HomeNav />
            </ul>
        </nav>
      )}
    </>
  );
}
