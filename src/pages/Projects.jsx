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
    <div className="bg-orange-100">
        <ColorRise />
        <div id="aos-container" className="flex">
            <div className="text-left font-poppins font-extralight pt-10 flex flex-col w-2/5 scroll-hidden justify-end">
                <section>
                    <p className="text-5xl tracking-wide" 
                    data-aos="fade-right" data-aos-delay="150" data-aos-duration="3000">
                        showcase
                        <br />
                    </p>
                    <p className="text-xl"
                    data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000">
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
  