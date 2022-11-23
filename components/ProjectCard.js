import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ projectInfo }) => {
  return (
    <div className="card mb-4 bg-slate-100 rounded-lg text-black border border-black">
      <div className="bg-sky-200 p-3 rounded-t">
        <Image
          src={projectInfo.image}
          alt={`mockup of ${projectInfo.name}`}
          layout="responsive"
          width="200"
          height="200"
        />
      </div>
      <div className="p-2 relative">
        <h1 className="font-extrabold">{projectInfo.name}</h1>
        <p className="text-sm">{projectInfo.description}</p>
        <div className="my-4">
          {projectInfo.tools.map((tool, index) => {
            return (
              <span
                key={index}
                className="rounded-xl text-xs bg-indigo-600 px-4 py-2 text-white my-2 mr-2"
              >
                {tool}
              </span>
            );
          })}
        </div>
        <a
          className="w-full px-6 my-2 block py-2 text-center bg-slate-900 text-white rounded cursor-pointer"
          href={projectInfo.url}
          target="_blank"
          rel="noreferrer"
        >
          visit website
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
