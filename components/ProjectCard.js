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

const ProjectCard = ({ projectInfo }) => {
  const GetTechIcons = () => {
    return projectInfo.tools.map((tool, index) => {
      switch (tool) {
        case "React":
          return (
            <SiReact
              title="React"
              key={index}
              className="text-2xl inline-block ml-6"
            />
          );
        case "Tailwind":
          return (
            <SiTailwindcss
              title="Tailwind"
              key={index}
              className="text-2xl inline-block ml-6"
            />
          );
        case "Bootstrap":
          return (
            <SiBootstrap
              title="Bootstrap"
              key={index}
              className="text-2xl inline-block ml-6"
            />
          );
        case "Next.js":
          return (
            <SiNextdotjs
              title="Next.JS"
              key={index}
              className="text-2xl inline-block ml-6"
            />
          );
        case "Contentful":
          return (
            <SiContentful
              title="Contentful"
              key={index}
              className="text-2xl inline-block ml-6"
            />
          );
        case "Javascript":
          return (
            <SiJavascript
              title="JavaScript"
              key={index}
              className="text-2xl inline-block ml-6"
            />
          );
        case "Ethereum":
          return (
            <SiEthereum
              title="Ethereum"
              key={index}
              className="text-2xl inline-block ml-6"
            />
          );
      }
    });
  };
  return (
    <motion.div
      className="card mb-4 bg-neutral-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-lg shadow-xl flex flex-col"
      whileHover={{ scale: 0.98 }}
      initial={{ scale: 1 }}
    >
      <div className="rounded-t">
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
                className="aspect-[3/2] rounded-t"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            );
          })}
        </Carousel>
      </div>
      <div className="p-4 relative flex flex-col h-full">
        <h1 className="font-extrabold dark:text-white text-black my-2">
          {projectInfo.name}
        </h1>
        <p className="text-sm mb-8 dark:text-white text-gray-800">
          {projectInfo.description}
        </p>
        <div className="mt-auto flex items-center">
          <a
            className="px-4 my-2 block py-1 text-sm text-center bg-indigo-900 hover:bg-indigo-800 text-white dark:bg-indigo-600 hover:dark:bg-indigo-500 rounded cursor-pointer mr-auto"
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
