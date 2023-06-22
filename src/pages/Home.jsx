// import { useState, useEffect } from 'react';
import { NavigationLinks } from '/src/components/NavLinks';
import { Header } from '/src/components/header';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export function Home() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

// useEffect(() => {
//     AOS.init({
//       duration: 2000,
//       once: true, // animation occurs only once
//       container: "#aos-container", 
//     });
//   }, []);

  return (
    <div className="flex-grow flex-col h-full">
      <Header />
      <ul className="font-Anabele text-6xl md:text-9xl text-right bg-orange-100 pb-8">  
        <NavigationLinks />
      </ul>
      <section className="font-poppins font-extralight text-left text-2xl pt-5">
        <p className="font-poppins font-extrabold text-3xl" data-aos="fade-right" data-aos-delay="150" data-aos-duration="3000">
          SARAH LANDIS
        </p>
        <p className="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000">
          based in Byron Bay, Australia
        </p>
        <p className="" data-aos="fade-up" data-aos-delay="400" data-aos-duration="3000">
          passionate front-end developer
        </p>
      </section>
    </div>
  );

  
}
