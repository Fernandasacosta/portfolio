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

const projectData: Project[] = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição do Projeto 1",
    skills: "Next.js, Next Auth, Radiz, TypeScript, Prisma, React Query",
    technologies: ["Next.js", "Next Auth", "Radiz", "TypeScript", "Prisma", "React Query"],
    githubLink: "https://github.com/usuario/projeto1",
    vercelLink: "https://projeto1.vercel.app",
    images: ["/palete.png", "/paletee.png"]
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição do Projeto 2",
    skills: "React, Tailwind, Node.js",
    technologies: ["React", "Tailwind", "Node.js"],
    githubLink: "https://github.com/usuario/projeto2",
    vercelLink: "https://projeto2.vercel.app",
    images: ["/palete.png", "/paletee.png"]
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição do Projeto 3",
    skills: "Gatsby, GraphQL, Styled Components",
    technologies: ["Gatsby", "GraphQL", "Styled Components"],
    githubLink: "https://github.com/usuario/projeto3",
    vercelLink: "https://projeto3.vercel.app",
    images: ["/palete.png", "/paletee.png"]
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Descrição do Projeto 4",
    skills: "Angular, Firebase, RxJS",
    technologies: ["Angular", "Firebase", "RxJS"],
    githubLink: "https://github.com/usuario/projeto4",
    vercelLink: "https://projeto4.vercel.app",
    images: ["/palete.png", "/paletee.png"]
  }
];

export default projectData;
