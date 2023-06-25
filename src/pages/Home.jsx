import React from 'react';
import { NavigationLinks } from '../components/NavLinks';
import "aos/dist/aos.css";
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useMediaQuery } from 'react-responsive';

export function Home() {
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });
  
  return (
    <div className="flex flex-col h-screen justify-start justify-between">
      <Header />
      <div className='block'>
        <ul className="font-Anabele text-6xl text-right bg-orange-100 pb-20 md:pb-36 md:text-9xl md:justify-end lg:pb-0">  
          <NavigationLinks />
        </ul>
        {isMdScreenOrLarger ? (
        <section className="font-poppins font-extralight text-left text-2xl pt-5">
          <p className="font-poppins font-extrabold text-4xl" data-aos="fade-right" data-aos-delay="150" data-aos-duration="3000">
            SARAH LANDIS
          </p>
          <p className="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000">
            based in Byron Bay, Australia
          </p>
          <p className="" data-aos="fade-up" data-aos-delay="400" data-aos-duration="3000">
            passionate front-end developer
          </p>
        </section>) : (<section className="font-poppins font-extralight text-left text-xl pt-5">
          <p className="font-poppins font-extrabold text-3xl md:text-4xl" data-aos="fade-in" data-aos-delay="200" data-aos-duration="3000">
            SARAH LANDIS
          </p>
          <p className="" data-aos="fade-in" data-aos-delay="500" data-aos-duration="3000">
            based in Byron Bay, Australia
          </p>
          <p className="" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="3000">
            passionate front-end developer
          </p>
        </section>)
        }
      </div>
      <Footer />
    </div>
  );
}
