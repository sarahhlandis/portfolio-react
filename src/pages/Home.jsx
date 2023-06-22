import { NavigationLinks } from '/src/components/NavLinks';
import { Header } from '/src/components/header';
import "aos/dist/aos.css";
import { Footer } from '/src/components/Footer';

export function Home() {


  return (
    <div className="flex flex-col h-screen justify-between">
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
      <Footer />
    </div>
  );

  
}
