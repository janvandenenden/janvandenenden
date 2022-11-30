import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiContentful,
  SiEthereum,
} from "react-icons/si";

const ProjectCard = ({ projectInfo }) => {
  const GetTechIcons = () => {
    return projectInfo.tools.map((tool, index) => {
      switch (tool) {
        case "React":
          return <SiReact key={index} className="text-3xl inline-block ml-6" />;
        case "Tailwind":
          return (
            <SiTailwindcss key={index} className="text-3xl inline-block ml-6" />
          );
        case "Bootstrap":
          return (
            <SiBootstrap key={index} className="text-3xl inline-block ml-6" />
          );
        case "Next.js":
          return (
            <SiNextdotjs key={index} className="text-3xl inline-block ml-6" />
          );
        case "Contentful":
          return (
            <SiContentful key={index} className="text-3xl inline-block ml-6" />
          );
        case "Javascript":
          return (
            <SiJavascript key={index} className="text-3xl inline-block ml-6" />
          );
        case "Ethereum":
          return (
            <SiEthereum key={index} className="text-3xl inline-block ml-6" />
          );
      }
    });
  };
  return (
    <motion.div
      className="card mb-4 bg-gradient-to-b from-neutral-100 to-zinc-200 text-slate-900 dark:from-neutral-700 dark:to-zinc-800 dark:text-white rounded-lg shadow-xl flex flex-col"
      whileHover={{ scale: 0.98 }}
      initial={{ scale: 1 }}
    >
      <div className="bg-slate-100 p-3 rounded-t">
        <Image
          src={projectInfo.images[0]}
          alt={`mockup of ${projectInfo.name}`}
          layout="responsive"
          width="200"
          height="200"
        />
      </div>
      <div className="pt-6 px-2 md:px-4 relative flex flex-col h-full">
        <h1 className="font-extrabold">{projectInfo.name}</h1>
        <p className="text-sm mb-8">{projectInfo.description}</p>
        <div className="mt-auto flex items-center">
          <a
            className="px-4 my-2 block py-1 text-sm text-center bg-blue-900 text-white dark:bg-emerald-600 rounded cursor-pointer mr-auto"
            href={projectInfo.url}
            target="_blank"
            rel="noreferrer"
          >
            visit website
          </a>
          <GetTechIcons />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
