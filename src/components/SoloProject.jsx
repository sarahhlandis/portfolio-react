import React from "react";
import { useParams } from "react-router-dom";
import projects from "../assets/projectData";

const SoloProject = () => {
  const { title } = useParams();
  const project = projects.find(
    (project) => project.title.toLowerCase() === title.toLowerCase()
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex">
        <div className="flex flex-col font-poppins font-extralight pt-10 w-4/12 pr-8">
        <div className="text-5xl italic">{project.title}</div>
        <p className="text-2xl">{project.abstract}</p>
        <br />
        <p>{project.description}</p>
        <br />
        <p>{project.date}</p>
        <div className="pt-2 font-semibold">
            <p>
                <a className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out" href={project.repo} target="_blank" rel="noopener noreferrer">Repository</a>
            </p>
            <p className="pt-2">
                <a className="relative inline-block bg-gradient-to-t from-sky-300 from-35% to-transparent to-40% hover:bg-sky-300 transition duration-100 ease-in-out" href={project.live} target="_blank" rel="noopener noreferrer">Demo</a>
            </p>
        </div>
        </div>
        <div className="flex flex-col w-8/12 pt-10">
            <img src={project.image} alt={project.title} />
        </div>
        <div>

        </div>
    </div>
  );
};

export default SoloProject;
