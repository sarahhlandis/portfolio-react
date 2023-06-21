import React, {useEffect} from "react";
import AOS from "aos";
import { ColorRise } from "../components/ColorRise";

export function Projects() {
    useEffect(() => {
      AOS.init({
        duration: 2000
      });
    
      return () => {
        AOS.refresh();
      };
    }, []);
    
    return(
    <div>
        <ColorRise />
        {/* <div className="flex justify-center"
        data-aos="fade-down" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-duration="1500"> */}
        <div id="aos-container" className="flex">
            <div className="text-left font-poppins font-extralight pt-10 flex flex-col w-2/5 scroll-hidden justify-end">
                <section data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-in-out">
                    <p className="text-4xl tracking-wide">
                        showcase
                        <br />
                    </p>
                    <p>
                        Welcome to my project gallery.
                        <br/>
                        Featuring my best and most recent work.
                    </p>
                </section>
            </div>
            <div className="text-left font-Anabele text-bold pt-10 flex-col w-3/5 scroll-hidden">
                <section className="flex flex-col text-8xl tracking-wide mb-4" 
                data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-out">
                    <a href='#' className="">
                    MOONSWELL
                    </a>
                    <a href='#'>
                    FITNESSFINDER
                    </a>
                    <a href='#'>
                    VIPER
                    </a>
                    <a href='#'>
                    SCRIBBLE
                    </a>
                </section>
            </div>

        </div>
    </div>
    );
}