import { 
  SiNextdotjs, SiTypescript, SiPrisma, SiReact, SiTailwindcss, 
  SiNodedotjs, SiGatsby, SiGraphql, SiStyledcomponents, SiAngular, 
  SiFirebase, SiNestjs, SiGoogle, SiFigma, SiFramer, SiVercel 
} from "react-icons/si"; 
import { FaDatabase } from "react-icons/fa"; 

export const iconsMap: { [key: string]: React.ElementType } = {
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Prisma": SiPrisma,
  "React": SiReact,
  "Tailwind": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Gatsby": SiGatsby,
  "GraphQL": SiGraphql,
  "Styled Components": SiStyledcomponents,
  "Angular": SiAngular,
  "Firebase": SiFirebase,
  "Nest": SiNestjs,
  "Postgres": FaDatabase,
  "Google OAuth": SiGoogle,
  "Figma": SiFigma,
  "Framer": SiFramer,
  "TurboRepo": SiVercel, 
};
