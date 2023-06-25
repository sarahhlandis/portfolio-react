import React, { useEffect} from "react";
import StackGrid from "../components/StackGrid";
import biopic from "../assets/images/biopic.jpeg";
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
                        about
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
                    If you want to know more about me, keep reading. 
                    <br/>
                    <br /> 
                    Or, stick with what you know and just check out <a className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out" href="#tech">my stack & resumé.</a>
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
                            From an ingrained importance on education in American culture, I thoroughly enjoyed my structured learning years. Spending my youth in school and extracurricular activities, I always had an excitement to learn. 
                            <br />
                            <br />
                            After finishing high school, I went off (as Americans do) to
                            Wake Forest University to pursue my Bachelor&#39;s Degree. Being a liberal arts school, we had the freedom to dip our toes into a plethora of different course subjects and choose our major after 2 years of testing the waters and finding our interests. I chose to major in Communication and French as I love language and believe that communication is the core building block to all things in life: relationships, conflict resolution, professional endeavors, etc. 
                            <br />
                            <br />
                            I studied abroad in France for 6 weeks during a summer while on break from school - I lived with a host family with 4 children under 5 and one aged 10, in a little town south of Paris called Tours. This experience was invaluable as I was able to fully immerse myself in a new place and really integrate into the french way of living. Communication in this sense was key as I had to use the language that I had learned for the past 7 years in order to <i>communicate</i>.
                            <br />
                            <br />
                            Once I came to Australia, I found myself in Byron Bay (more on that later!) - as beautiful as Byron is, a lot of the work is based around tourism and hospitality. Needing more of a challenge and with a desire to be proud of what I do, after a few managerial roles I decided to enroll in a 10-month intensive, full stack, web development bootcamp with Coder Academy. Learning the ins and outs of web development was incredibly fun, challenging, and demanding as I had to time manage life along with course material, assignments, continuous learning on the side, and major projects. 
                            <br />
                            <br />
                            However on the other side of perseverance is success, growth, and achievement which is what I have been aiming for throughout my iterative approach to education and learning. 
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
                            As you may have picked up above, I am originally from America - well <i>originally</i> from India (I was born there but adopted as a baby into an Indian American family). Fast forward to 2018, a year after graduating from uni and 6 months after finishing a marketing internship for <a className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out" href="https://webershandwick.com/">Weber Shandwick</a> in Washington D.C., I decided I needed to leave the U.S. The general culture, way of living, and societal interests were no longer aligning with me.
                            <br />
                            <br />
                            I wanted to go to a part of the world that I hadn&#39;t been yet and where I wouldn&#39;t be able to speak the language: South East Asia. I chose to check out Vietnam, Cambodia, Thailand and Bali and do a bit of solo exploration. Fast forward to arriving in Bali, my last spot and near end of my trip - oh, and meeting my now-husband that evening. Only meant to stay in Bali for 5 days and then return home, I actually chose to not get on my flight and stay an additional month. 
                            <br />
                            <br />
                            Of course he was Australian and swooned me back to Byron Bay where we eventually stayed for another 8 months before returning to America to tie up affairs and finalize my move over to Australia permanently. Once settled in Byron atfer sorting out a proper visa, I had to adapt and integrate into the Australian culture which took some getting used to.
                            <br />
                            <br />
                            Things like the nuances between social conversation etiquette and differences in celebrating holidays stumped me for a while. But I was ready to leave America and Australia was the perfect fit; laid-back, convivial, unostentatious, and appreciation for nature resonated with me. The purity of whole foods in Australia and general aptitude for a healthy lifestyle synthesized perfectly with my lifestyle choices. Australia&#39;s dedication to holistic living has significantly enhanced my well-being and zest for life.  
                            <br />
                            <br />
                            Through debugging my life, I&#39;ve had the opportunity to immerse myself in a new way of living, forge meaningful connections, and continue my personal and professional growth. I&#39;m excited to continue to thrive in an environment that supports my pursuit of a fulfilling and balanced life. Australia&#39;s beauty has truly captured my heart.
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
                        <p>Transitioning from the rigid and demanding work culture around marketing in America, my arrival in Australia, particularly in Byron Bay, was a stark contrast but a pleasant surprise. I realized no one even knew my uni and that was okay! As briefly mentioned before, Byron Bay is known for its beautiful beaches, crystal blue waters, and country lifestyle and not so much its corporate job opportunities.
                        <br />
                        <br />
                        So what was I to do for work, I thought? Little did I know this was actually a pot of gold in disguise - I could do anything and excel at it! So I worked in a cleaning role, then worked my way to managing the cleaning team, and then working alongside the owner of the cleaning business on more admin tasks and higher management. But I wasn&#39;t excited by my work or proud to say what I did. I moved on to then working for a luxury property rental company, managing a portfolio properties. I found this job fun as each day was different and I got to spend a lot of time in a lot of <i>really</i> beautiful homes around the hinterland region. I also enjoyed speaking to guests and checking all the small details before their arrival. 
                        <br />
                        <br />
                        However, I found myself in the same situation as before and thinking, I&#39;m just not passionate about this nor am I being challenged. This job was off the back of covid so I actually had&#39;t been back to America since moving away, and I was beginning to think maybe Byron is just <i>too</i> small. My husband and I decided to go back and do a big trip as many of my friends actually hadn&#39;t met him before and also to decide what needed to change.
                        <br />
                        <br />
                        One of my husband&#39;s closest friends had just sold his business for multimillions and suggested my husband actually look into coding and web development as a career. My husband looked into it for a while but didn&#39;t think it would hold his attention but in that time, it piqued mine. I recalled doing a semester of computer science in uni and lovimg it and coupled with my love for languages and tetris-like brain, I thought it may actually be a better fit for me. 
                        <br />
                        <br />
                        Enrolling in the bootcamp allowed me to upskill and become potent in my web development career. I&#39;m the type that gives everything to my work and won&#39;t settle for MVP. I find myself getting into little rabbit holes of bugs and just chipping away until I get the small-win satisfaction when I resolve it. I realize I must like it enough to spend hours and hours doing it each day!
                        <br />
                        <br />
                        Mainly, I am proud to be working in web development, and excited by the daily challenges. I feel great joy in being able to create functional and visually appealing websites that have a real impact on users. It&#39;s incredibly fulfilling to see my work come to life and contribute to the digital landscape in one way or another. 
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
                        <button id="pdf" className="bg-sky-300 hover:bg-sky-400 hover:scale-105 ease-out duration-200 text-white font-poppins py-2 px-4 rounded w-96 h-16 mb-10">
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
