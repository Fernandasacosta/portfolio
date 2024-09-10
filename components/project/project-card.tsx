import Image from "next/image";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { iconsMap } from "@/lib/icons";

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string; // Lista de habilidades
  technologies: string[];
  githubLink: string;
  vercelLink: string;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Divide as habilidades em um array para mapear os ícones
  const skillIcons = project.skills.split(',').map(skill => skill.trim());

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative rounded-3xl w-full sm:w-[90%] lg:w-[80%] h-[300px] flex flex-col overflow-hidden border-2 border-transparent hover:border-white opacity-85 hover:opacity-100 transition-all mx-auto cursor-pointer">
          <div className="w-full h-full overflow-hidden">
            {project.images.length > 0 && (
              <Image
                width={360}
                height={180}
                src={project.images[0]} // Mostrar apenas a primeira imagem no preview
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
                return Icon ? <Icon key={skill} className="text-2xl" /> : null; // Ajuste o tamanho aqui
              })}
            </div>
          </div>
        </div>
      </SheetTrigger>

      <SheetContent className="bg-[#0E332A] p-4"> {/* Ajuste de tamanho para 40% da viewport */}
        <SheetHeader>
          <SheetTitle className="text-white">{project.title}</SheetTitle>
        </SheetHeader>
        <SheetDescription className="text-white mt-2">
          <div>
            <p>{project.description}</p>
            <p><strong>Tecnologias:</strong> {project.technologies.join(', ')}</p>
            <p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-emerald-500 underline">
                Ver no GitHub
              </a>
            </p>
            <p>
              <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="text-emerald-500 underline">
                Link na Vercel
              </a>
            </p>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectCard;
