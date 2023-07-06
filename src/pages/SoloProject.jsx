import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../assets/projectData";
import { LeftArrow } from "../assets/nav_arrows/LeftArrow";
import { RightArrow } from "../assets/nav_arrows/RightArrow";

export function SoloProject() {

  const { title } = useParams();
  const currentIndex = projects.findIndex(
    (project) => project.title.toLowerCase() === title.toLowerCase()
  );

  if (currentIndex === -1) {
    return (
    <div className="font-poppins font-extralight text-2xl">
      Oops, looks like that one doesn&#39;t exist. < br/>
      <Link className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out"
      to="/projects">Let&#39;s go back...
      </Link>
    </div>
    );
  }

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const project = projects[currentIndex];
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];


  return (
    <div className="flex flex-col lg:flex-row-reverse"
      data-aos="fade-in" data-aos-easing="ease-in" data-aos-duration="1700">
      <div className="flex h-60 md:h-auto pt-5 pb-8 md:flex-col lg:w-6/12 lg:pb-0 lg:pt-0">
          <img src={project.image} alt={project.title} className="object-cover object-center"/>
      </div>
      <div className="flex flex-col font-poppins font-extralight md:pr-8 lg:w-6/12 lg:pt-5">
        <div className="text-5xl italic">{project.title}</div>
        <div className="md:h-60 lg:h-72 overflow-hidden"> 
          <p className="text-2xl">{project.abstract}</p>
          <p>{project.date}</p>
          <br />
          <p>{project.description}</p>
          <br />
      </div>
      <div className="font-semibold pt-2">
        {project.repo && (
          <p>
            <a
              className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </p>
        )}
        {project.demo && (
          <p>
            <a
              className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </p>
        )}
        <br />
        </div>
        {/* below links currently coded for continuously iterating thru array */}
        <div className="flex justify-evenly">
          <div className="hover:scale-125 ease-out duration-200"> 
              {/* if wanting the buttons to stop at first and last, uncomment below 
              use below in place of line 70 */}
              {/* {currentIndex > 0 && ( */}
              {prevProject && (
              <Link
                  to={`/projects/${prevProject.title}`}
              >
                  <LeftArrow />
              </Link>
              )}
           </div>
          <p className="font-semibold hover:scale-125 ease-out duration-200"> 
              <br />
              <Link to="/projects">back to all</Link>
          </p>
          <div className="hover:scale-125 ease-out duration-200"> 
              {/* if wanting the buttons to stop at first and last, uncomment below
              use below in place of line 85 */}
              {/* {currentIndex < projects.length - 1 &&  ( */}
              {nextProject && (
              <Link to={`/projects/${nextProject.title}`}>
                  <RightArrow />
              </Link>
              )}
          </div>
        </div>
          {/* <p>
            <br />
            <Link to="/projects">all projects</Link>
          </p> */}
      </div>
    </div>
  );
}