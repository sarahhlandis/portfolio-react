import React, {useEffect} from "react";
import AOS from "aos";
import { ColorRise } from "../components/ColorRise";
import ProjectList from "../components/ProjectList";

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
        <div id="aos-container" className="flex">
            <div className="text-left font-poppins font-extralight pt-10 flex flex-col w-2/5 scroll-hidden justify-end">
                <section data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-in-out">
                    <p className="text-5xl tracking-wide">
                        showcase
                        <br />
                    </p>
                    <p className="text-xl">
                        Welcome to my project gallery.
                        <br/>
                        Featuring my best and most recent work.
                    </p>
                </section>
            </div>
            <div className="text-left font-Anabele text-bold pt-10 flex flex-col w-3/5 scroll-hidden">
                <section>
                   <ProjectList />
                </section>
            </div>

        </div>
    </div>
    );
}
  