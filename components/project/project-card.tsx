'use client'

import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { iconsMap } from "@/lib/icons";
import { oswald, syncopate, syne } from "@/public/fonts/fonts";

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string;
  technologies: string[];
  githubLink: string;
  vercelLink: string;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const skillIcons = project.skills.split(',').map(skill => skill.trim());

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative rounded-3xl w-full sm:w-[90%] lg:w-[80%] h-[300px] flex flex-col overflow-hidden border-2 border-transparent hover:border-white opacity-85 hover:opacity-100 transition-all mx-auto cursor-pointer">
          <div className="w-full h-full overflow-hidden">
            {project.images.length > 0 && (
              <Image
                width={360}
                height={180}
                src={project.images[0]} 
                alt={`${project.title} image 1`}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="absolute bottom-0 left-0 w-full flex flex-row justify-between items-center p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <strong className="group-hover:text-emerald-50 transition-all">
              {project.title}
            </strong>
            <div className="flex space-x-5">
              {skillIcons.map(skill => {
                const Icon = iconsMap[skill];
                return Icon ? <Icon key={skill} className="text-2xl" /> : null;
              })}
            </div>
          </div>
        </div>
      </SheetTrigger>

      {/* Permitir rolagem no conteúdo do sheet */}
      <SheetContent className="bg-[#0E332A] p-4 overflow-y-auto ">
        <SheetHeader>
          <SheetTitle className={`${syncopate.className} text-white text-2xl mt-5`}>
            {project.title}
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="text-white mt-2">
            {/* Carrossel de Imagens com centralização */}
            <div className="relative mt-10 flex flex-col items-center">
              {project.images.length > 0 && (
                <Image
                  width={300} // Definir largura menor
                  height={200}
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} image ${currentImageIndex + 1}`}
                  className="w-auto h-auto object-cover mx-auto rounded-lg" 
                />
              )}
            
              <button
                onClick={handlePreviousImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
              >
                &lt;
              </button>
              
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
          <div className="flex flex-col gap-y-8 mt-10">
            <h3 className={`${syncopate.className} text-white text-xl`}>Sobre o projeto</h3>
            <p>{project.description}</p>
            <h3 className={`${syncopate.className} text-white text-xl`}>Tecnologias</h3>
            <p>{project.technologies.join(', ')}</p>
            <h3 className={`${syncopate.className} text-white text-xl`}>Github</h3>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-lime-200 underline">
              Link do repositório
            </a>
            <h3 className={`${syncopate.className} text-white text-xl`}>Vercel</h3>
            <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="hover:text-lime-200 underline">
              Link da hospedagem
            </a>

          
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectCard;
