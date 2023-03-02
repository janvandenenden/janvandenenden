import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "framer-motion-carousel";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiContentful,
  SiEthereum,
} from "react-icons/si";
import Slideshow from "./Slideshow";

const ProjectCard = ({ projectInfo }) => {
  const GetTechIcons = () => {
    return projectInfo.tools.map((tool, index) => {
      switch (tool) {
        case "React":
          return (
            <SiReact
              title="React"
              key={index}
              className="text-3xl inline-block ml-6"
            />
          );
        case "Tailwind":
          return (
            <SiTailwindcss
              title="Tailwind"
              key={index}
              className="text-3xl inline-block ml-6"
            />
          );
        case "Bootstrap":
          return (
            <SiBootstrap
              title="Bootstrap"
              key={index}
              className="text-3xl inline-block ml-6"
            />
          );
        case "Next.js":
          return (
            <SiNextdotjs
              title="Next.JS"
              key={index}
              className="text-3xl inline-block ml-6"
            />
          );
        case "Contentful":
          return (
            <SiContentful
              title="Contentful"
              key={index}
              className="text-3xl inline-block ml-6"
            />
          );
        case "Javascript":
          return (
            <SiJavascript
              title="JavaScript"
              key={index}
              className="text-3xl inline-block ml-6"
            />
          );
        case "Ethereum":
          return (
            <SiEthereum
              title="Ethereum"
              key={index}
              className="text-3xl inline-block ml-6"
            />
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
      <div className="bg-slate-100 p-3 rounded-t ">
        <Carousel
          autoPlay={false}
          interval="5000"
          renderArrowLeft={() => null}
          renderArrowRight={() => null}
        >
          {projectInfo.images.map((item, index) => {
            return (
              <Image
                key={index}
                src={item}
                draggable={false}
                alt={`mockup of ${projectInfo.name}`}
                width="200"
                height="200"
                sizes="100vw"
                className="aspect-[3/2]"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            );
          })}
        </Carousel>
      </div>
      <div className="pt-6 px-2 md:px-4 relative flex flex-col h-full">
        <h1 className="font-extrabold">{projectInfo.name}</h1>
        <p className="text-sm mb-8">{projectInfo.description}</p>
        <div className="mt-auto flex items-center">
          <a
            className="px-4 my-2 block py-1 text-sm text-center bg-blue-900 text-white dark:bg-emerald-600 hover:dark:bg-emerald-500 rounded cursor-pointer mr-auto"
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
