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

        <div className="text-left">
            <section data-aos="fade-up">
                <p className="text-xl">
                    Hi I&#39;m Sarah. 
                    <br />
                </p>
            </section>
            <section data-aos="fade-up">
                <p>
                    <br />
                    Iteration 
                    <br />
                    <p>Growing up in America, I was able to pursue a Bachelor&#39;s Degree in Communication and French. </p>
                </p>
            </section>
        </div>
    </div>

    );

}