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
    <div className="flex flex-col font-poppins font-extralight pt-10 w-5/12 pr-8">
      <div className="text-5xl italic">{project.title}</div>
      <p className="text-2xl">{project.abstract}</p>
      <br />
      <p>{project.description}</p>
      <br />
      <p>{project.date}</p>
      <p>
        <a href={project.repo}>Repository </a>
      </p>
      <p>
        <a href={project.live}>Demo</a>
      </p>
    </div>
    <div className="flex flex-col w-7/12">
        <img src={project.image} alt={project.title} />
    </div>
    </div>
  );
};

export default SoloProject;
