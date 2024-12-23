import React from "react";
import { syne } from "@/public/fonts/fonts"; 
import ProjectList from "./project-list";

const Projects = () => {
  return (
    <section id="projetos" className="w-full h-auto bg-[#0E332A] flex flex-col items-center justify-center">
      <h2 className={`${syne.className} mt-20 text-center text-3xl md:text-4xl font-bold text-white`}>
        Projetos
      </h2>
      <ProjectList />
    </section>
  );
};

export default Projects;
