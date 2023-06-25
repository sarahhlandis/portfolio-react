import React, {useEffect} from "react";
import ProjectList from "../components/ProjectList";
import { ColorRise } from "../components/ColorRise";

export function Projects() {

    
    return(
    <div className="">
        <ColorRise />
        <div id="aos-container" className="lg:flex">
            <div className="text-left font-poppins font-extralight md:pt-10 pb-5 lg:pb-0 flex flex-col lg:w-2/5 scroll-hidden justify-end">
                <section>
                    <p className="text-4xl md:text-5xl tracking-wide" 
                    data-aos="fade-right" data-aos-delay="150" data-aos-duration="3000">
                        showcase
                        <br />
                    </p>
                    <p className="text-xl pt-2"
                    data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000">
                        Welcome to my project gallery.
                        <br/>
                        Featuring my best and most recent work.
                    </p>
                </section>
            </div>
            <div className="bg-orange-100 w-full">
            <div className="flex flex-col w-full scroll-hidden font-Anabele text-bold text-left pt-5 pl-5 pr-2 lg:pr-0 lg:pt-10 lg:pl-10"> 
                <section>
                   <ProjectList />
                </section>
            </div>
            </div>
        </div>
    </div>
    );
}

// SECONDARY STYLING FOR THIS PAGE
// MATCHES HOMEPAGE EXACTLY
// UNCOMMENT IF WISH TO CHANGE

// import React, {useEffect} from "react";
// import AOS from "aos";
// import { ColorRise } from "../components/ColorRise";
// import ProjectList from "../components/ProjectList";

// export function Projects() {

//     useEffect(() => {
//       AOS.init({
//         duration: 2000
//       });
    
//       return () => {
//         AOS.refresh();
//       };
//     }, []);
    
//     return(
//     <div className="">
//         <ColorRise />
//         <div id="aos-container">
//             <div className="justify-end"> 
//                 <section className="bg-orange-100 w-full font-Anabele text-bold flex-col pt-2">
//                     <ProjectList />
//                 </section>
//             </div>
//         </div>
//         <div className="text-left font-poppins font-extralight flex flex-col">
//                 <section>
//                     <p className="text-3xl font-extrabold tracking-wide" 
//                     data-aos="fade-right" data-aos-delay="150" data-aos-duration="3000">
//                        SHOWCASE
//                         <br />
//                     </p>
//                     <p className="text-2xl"
//                     data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000">
//                         Welcome to my project gallery.
//                         <br/>
//                         Featuring my best and most recent work.
//                     </p>
//                 </section>
//             </div>
//     </div>
//     );
// }