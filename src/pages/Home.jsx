import { NavigationLinks } from '../components/NavLinks';
import "aos/dist/aos.css";
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Home() {


  return (
    <div className="flex flex-col h-screen justify-start justify-between">
      <Header />
      <div className='block'>
        <ul className="font-Anabele text-6xl text-right bg-orange-100 pb-36 md:text-9xl md:justify-end lg:pb-0">  
          <NavigationLinks />
        </ul>
        <section className="font-poppins font-extralight text-left text-xl md:text-2xl pt-5">
          <p className="font-poppins font-extrabold text-3xl md:text-4xl" data-aos="fade-right" data-aos-delay="150" data-aos-duration="3000">
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
      <Footer />
    </div>
  );

  
}
