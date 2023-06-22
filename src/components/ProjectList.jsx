import React from "react";
import { Link } from "react-router-dom";
import projects from "../assets/projectData";

    
const ProjectList = () => {
    return (
      <div
      className="flex flex-col text-8xl tracking-wide mb-4 items-end pl-10" 
      data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-out">
        {projects.map((project) => (
          <Link key={project.title} to={`/projects/${project.title}`} className="flex hover:italic hover:translate-x-4 transition-transform duration-700">
            {project.title}
          </Link>
        ))}
      </div>
    );
  };

export default ProjectList;
