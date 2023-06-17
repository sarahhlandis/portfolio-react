import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function About(){
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true, // Animation occurs only once
          container: "#aos-container", // Specify the container for AOS animations
        });
      }, []);
    
    return(
    <div id="aos-container">
        
        {/* <ul className="flex px-4 py-6 text-center space-x-10 text-xl font-Anabele"> */}
        
        {/* {location.pathname !== '/' && (
            <nav className="px-4 py-6 flex flex-col md:flex-row items-center justify-between">
            <Header />
            {/* <ul className="text-right font-Anabele">
                <HomeNav />
            </ul> */}
            {/* <ul className="flex px-4 py-6 text-center space-x-10 text-xl font-Anabele">
                <HomeNav />
            </ul>
            </nav>
        )} */}
        {/* <HomeHeader /> */}

        <div className="text-left font-poppins font-extralight pt-10">
            <section data-aos="fade-up" data-aos-easing="ease-in-out">
                <p className="text-xl font-extrabold pb-8 tracking-wide">
                    Hi I&#39;m Sarah. 
                    <br />
                </p>
            </section>
            <section data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                <p>
                    <br />
                    <p className="font-extrabold tracking-wide"> Iterative • Education </p>
                    <br />
                    <p>Growing up in America, I was able to pursue a Bachelor&#39;s Degree in Communication and French. </p>
                </p>
            </section>
            <section data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                <p>
                    <br />
                    <p className="font-extrabold tracking-wide"> Debugging • Life </p>
                    <br />
                    <p>Growing up in America, I was able to pursue a Bachelor&#39;s Degree in Communication and French. </p>
                </p>
            </section>
            <section data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                <p>
                    <br />
                    <p className="font-extrabold tracking-wide"> Refactoring • My Expertise </p>
                    <br />
                    <p>Growing up in America, I was able to pursue a Bachelor&#39;s Degree in Communication and French. </p>
                </p>
            </section>
            <section data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                <p>
                    <br />
                    <p className="font-extrabold tracking-wide"> Optimizing • The Tech </p>
                    <br />
                    <p>Growing up in America, I was able to pursue a Bachelor&#39;s Degree in Communication and French. </p>
                </p>
            </section>
        </div>
    </div>

    );

}