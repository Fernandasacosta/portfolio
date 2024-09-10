import React from "react";
import ProjectCard from "./project-card";
import projectData from "../mockProjects";


const ProjectList = () => {
  return (
    <section className="container mx-auto py-32 grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-12">
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
