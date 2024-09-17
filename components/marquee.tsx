"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import React from "react";
import { SiNodedotjs, SiReact, SiJavascript, SiNextdotjs, SiCsharp, SiAngular, SiHtml5, SiCss3, SiPostgresql, SiDbeaver, SiMicrosoftsqlserver, SiMongodb, SiPrisma, SiTailwindcss, SiMysql, SiTypescript } from "react-icons/si";
import { FaSpaceShuttle } from 'react-icons/fa'; // Importar o ícone de espaço vazio

const StarIcon = () => (
  <Image
    src="/star.png"
    alt="Star"
    width={24}
    height={24}
    className="mx-8"
  />
);

const techIcons = [
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiCsharp,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiDbeaver,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  
];

const Marquee = () => {
  return (
    <div className="max-w-7xl mx-auto mt-4 lg:py-6 overflow-hidden flex justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <div className="relative flex items-center whitespace-nowrap overflow-hidden">
          {/* Cria um wrapper que garante que o conteúdo está visível */}
         <div className="flex gap-4">
          <motion.div
            className="flex items-center gap-4 space-x-16"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          >
            {techIcons.map((Icon, index) => (
              <React.Fragment key={index}>
                <Icon className="text-white text-6xl" />
                {index < techIcons.length - 1 && (
                  <StarIcon />
                )}
              </React.Fragment>
            ))}
            <StarIcon />
          </motion.div>
          </div>
          {/* Duplicar o conteúdo para garantir a rolagem contínua */}
          <motion.div
            className="absolute top-0 gap-4 flex items-center space-x-16"
            initial={{ x: "105%" }}
            animate={{ x: 0 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10  }}
          
          >
            {techIcons.map((Icon, index) => (
              <React.Fragment key={index}>
                <Icon className="text-white text-6xl" />
                {index < techIcons.length - 1 && (
                  <StarIcon />
                )}
              </React.Fragment>
            ))}
            <StarIcon />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
 