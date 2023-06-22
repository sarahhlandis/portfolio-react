import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../assets/projectData";
import { LeftArrow } from "../assets/nav_arrows/LeftArrow";
import { RightArrow } from "../assets/nav_arrows/RightArrow";

function SoloProject() {
  const { title } = useParams();
  const currentIndex = projects.findIndex(
    (project) => project.title.toLowerCase() === title.toLowerCase()
  );

  if (currentIndex === -1) {
    return <div>Project not found</div>;
  }

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const project = projects[currentIndex];
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  return (
    <div className="flex">
      <div className="flex flex-col font-poppins font-extralight pt-10 w-4/12 pr-8">
        <div className="text-5xl italic">{project.title}</div>
        <p className="text-2xl">{project.abstract}</p>
        <p>{project.date}</p>
        <br />
        <p>{project.description}</p>
        <br />
        <div className="pt-2 font-semibold">
          <p>
            {project.repo && (
              <a
                className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            )}
          </p>
          <p className="pt-2">
            {project.live && (
              <a
                className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
          </p>
          <br />
          {/* below links currently coded for continuous iterating thru array */}
          <div className="flex justify-evenly">
            <div className="hover:scale-125 ease-out duration-200"> 
                {/* if wanting the buttons to stop at first and last, uncomment below */}
                {/* {currentIndex > 0 && ( */}
                {prevProject && (
                <Link
                    to={`/projects/${prevProject.title}`}
                >
                    <LeftArrow />
                </Link>
                )}
            </div>
            <div>
                <br />
                <Link to="/projects">back to all</Link>
            </div>
            <div className="hover:scale-125 ease-out duration-200"> 
                {/* if wanting the buttons to stop at first and last, uncomment below */}
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
      <div className="flex flex-col w-8/12 pt-10">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
}

export default SoloProject;
