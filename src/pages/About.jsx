import React, { useEffect} from "react";
import StackGrid from "../components/StackGrid";
import biopic from "../assets/images/biopic.jpg";
import { UpArrow } from "../assets/nav_arrows/UpArrow";
import resumePDF from "../assets/Sarah_Landis_Resume.pdf"; 
import { ColorRise } from "../components/ColorRise";

export function About() {
     

    return(
    <div>
        <ColorRise />
        {/* <div className="flex justify-center"
        data-aos="fade-down" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-duration="1500"> */}
        <div className="flex flex-col justify-end">
            <div className="overflow-y-hidden flex-grow justify-end items-end">
                <div className="animate-rise flex">
                    <p className="h-full w-full pt-2 pl-8 text-7xl font-Anabele tracking-wide italic md:text-9xl md:pl-32 lg:pl-60">
                        About
                    </p>
                </div>
            </div>
        </div>
        <div id="aos-container" className="flex flex-col-reverse lg:flex-row overflow-visible">
            <div className="text-left font-poppins font-extralight pt-10 w-full lg:w-1/2 scroll-hidden">
                {/* <section data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-in-out"> */}
                <section>
                    <div className="text-4xl tracking-wide italic">
                        Hello there, I&#39;m Sarah. 
                        <br />
                    <p className="font-semibold  text-2xl">So nice to meet you!</p>
                        <br />
                    </div>
                </section>
                {/* <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100" */}
                <p className="pb-10">
                    If you would like to know more about me, keep reading. 
                    <br/>
                    <br /> 
                    Or, stick with what you know and check out <a className="font-semibold relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out" href="#tech">my stack & resumé</a>.
                </p>
                {/* <section data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100"> */}
                <section>
                    <div>
                        <br />
                        <p className="font-bold tracking-wide text-lg bg-orange-100 p-2"> Iterative • Education </p>
                        <br />
                        <p className="font-semibold tracking-wide"> ./Bachelor&#39;s of Arts & Sciences in Communication & French/

                        <a className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out" href="https://www.wfu.edu/">
                        Wake Forest University
                        </a>

                        <br/><br/>
                        ./Diploma of Information Technology/
                        <a className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out" href="https://coderacademy.edu.au/">
                        Coder Academy
                        </a>
                        </p>
                        <br/>
                        <p className="">
                            Growing up in the American culture, I always found joy in my structured learning years and fully engaged myself in my academics and extracurricular activities.  
                            <br />
                            <br />
                            After graduating from high school, I attended Wake Forest University to pursue my Bachelor&#39;s Degree. Being a liberal arts school, we had the freedom to explore various subjects for two years before choosing a major. Drawn to language and recognizing its significance in all aspects of life, I chose to major in Communication and French. I strongly believe the art of communication is integral to all things in life: relationships, conflict resolution, professional endeavors, etc. 
                            <br />
                            <br />
                            During one of our school&#39;s summer breaks, I had the incredible opportunity to study abroad in France for six weeks. Living with a host family in the charming town of Tours, just south of Paris, I fully embraced the French way of life and was able to practice my language skills. This experience reinforced the vital role of effective communication, as I had no choice but to rely on the language I had been learning for the past seven years in order to truly connect and integrate into my new surroundings.
                            <br />
                            <br />
                            After relocating to Australia, I discovered a beautiful location known for its tourism and hospitality industry - Byron Bay. Seeking a greater challenge and a sense of pride in my work, I transitioned from managerial roles to enrolling in a 10-month intensive web development bootcamp with Coder Academy. Returning to an acedemic setting and balancing coursework again, along with assignments and major projects proved demanding yet rewarding. 
                            <br />
                            <br />
                            However through perseverance and an iterative approach to education, I have been able to achieve success, growth, and personal fulfillment which has brought me joy in what I do.
                            <br />
                            <br />
                        </p>
                    </div>
                </section>
                <section className="pt-10" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div>
                        <br />
                        <p className="font-bold tracking-wide text-lg bg-orange-100 p-2"> Debugging • Life </p>
                        <br />
                        <p className="font-semibold tracking-wide"> ./Born in India</p>
                        <p className="font-semibold tracking-wide"> ./Brought up in America</p>
                        <p className="font-semibold tracking-wide"> ./Met my husband in Bali</p>
                        <p className="font-semibold tracking-wide"> ./Moved to Aus</p>
                        <br />
                        <p className="">
                            As you may have gathered, I have a unique background, being born in India and adopted into an Indian American family. After graduating from university and completing a marketing internship for <a className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out" href="https://webershandwick.com/">Weber Shandwick</a> in Washington D.C., I felt a need to leave the U.S. - the culture and way of life was very obviously no longer in alignment with my interests or character. 
                            <br />
                            <br />
                            Seeking new experiences, I decided to explore Southeast Asia, specifically Vietnam, Cambodia, Thailand, and Bali. During my time in Bali, I unexpectedly met my now-husband and chose to extend my stay instead of returning home. After staying an additional month in Bali, we had to decide whether or not I was going to return back to the U.S. or spend more time together. He was Australian, and eventually, we settled in Byron Bay for eight months before returning to America to tie up loose ends and finalize my move to Australia.
                            <br />
                            <br />
                            Although the U.S. and Australia are similar in that both countries speak the same language, adjusting to the Australian culture did take some time. I had to navigate social conversation etiquette, different intonations, the underdog mentality, and different ways of celebrating holidays (this may seem small but holidays are very celebrated in America)! However, Australia&#39;s unostentatious, convivial, and nature-centric lifestyle resonated with me. The emphasis on whole foods and holistic living aligned perfectly with my personal choices, enhancing my overall well-being and reinvigorated my zest for life.
                            <br />
                            <br />
                            Through debugging my life, I&#39;ve had the opportunity to immerse myself in a new way of living, forge meaningful connections, and continue my personal and professional growth. I&#39;m excited to continue to thrive in an environment that supports my pursuit of a fulfilling and balanced life.
                        </p>
                    </div>
                </section>
                <section className="pt-10" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div>
                        <br />
                        <br />
                        <p className="font-bold tracking-wide text-lg bg-orange-100 p-2"> Refactoring • My Expertise </p>
                        <br />
                        <p className="font-semibold tracking-wide"> ./Marketing</p>
                        <p className="font-semibold tracking-wide"> ./Managerial Roles</p>
                        <p className="font-semibold tracking-wide"> ./Web Developer</p>
                        <br />
                        <p>In comparison to the rigid and demanding work culture in America, my arrival in Byron Bay brought a pleasant surprise.  I realized that the focus was not on prestigious university backgrounds but on interpersonal skills and adaptability. Job opportunities in the corporate sector were limited, so I explored different roles, starting with cleaning and eventually moving into managing a cleaning team and then assisting with administrative tasks.
                        <br />
                        <br />
                        Whilst working for <a className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out" href="https://webershandwick.com/">Your Luxury Escape</a>, a holiday property rental company, I found enjoyment in the variety of tasks and the opportunity to visit beautiful homes. However, I still felt a lack of passion for and challenge in my work. Reflecting on my situation and the desire for change, my husband and I decided to take a trip back to America to visit some close friends and family as borders had since reopened.
                        <br />
                        <br />
                        During this time, a friend suggested that my husband explore coding and web development as a potential career path. While he initially hesitated, it piqued my interest. Drawing on my previous but brief experience in computer science and my affinity for languages and problem-solving, I realized web development might be a better fit for me.
                        <br />
                        <br />
                        Enrolling in the bootcamp allowed me to upskill and become potent in my web development career. I&#39;m the type that gives everything to my work and won&#39;t settle for a minimum viable product, unless that&#39;s the goal. I am continuously striving for excellence and find satisfaction in resolving intricate bugs. I genuinely enjoy the challenges I face on a daily basis and love celebrating small (and big!) wins.
                        <br />
                        <br />
                        Working in web development brings me pride as I&#39;m able witness my work come to life. Contributing to the digital landscape is immensely fulfilling and I feel great joy in being able to create functional and visually appealing websites that have a real impact on users. The purpose of my work continues to be a driving force behind my professional motivation.
                        </p>
                    </div>
                </section>
                <section className="pt-10" id="tech" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div>
                        <br />
                        <br />
                        <p className="font-bold tracking-wide text-lg bg-orange-100 p-2"> Optimizing • The Tech </p>
                        <br />
                        <p className="font-semibold tracking-wide"> ./Front End</p>
                        <p className="font-semibold tracking-wide"> ./Back End</p>
                        <br />
                        <p>While my passion predominantly lies in frontend work, I recognized the importance of being well-versed in full stack web development. This motivated me to broaden my technical expertise and embrace the challenges of both client and server-side functionality. 
                        <br />
                        <br />
                        Take a look at my diverse tech sandbox below:</p>
                        <br />
                        <br />
                        <div>
                            <StackGrid />
                        </div>
                    </div>
                </section>
                <div className="flex justify-center text-xl font-semibold pt-10" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                        <button id="pdf" className="bg-sky-300 hover:bg-sky-400 hover:scale-105 ease-out duration-200 text-white font-poppins py-2 px-4 rounded md:w-96 h-16 lg:mb-10">
                        View Resumé
                        </button>
                    </a>
                </div>
                <div className="flex justify-center text-xs pt-10 animate-bounce" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="300">
                    <a href="#">
                        <UpArrow />
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-1/2 pt-10" data-aos="fade-in" data-aos-easing="ease-in" data-aos-duration="1700">
                <img src={biopic} alt="bio photo" className="sticky top-0 lg:pl-10" /> 
                {/* use this to get whole photo height to show and keep aspect ratio: max-h-screen max-w-full */}
            </div>
        </div>
    </div>
    );
}
