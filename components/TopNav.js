import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DiGithubAlt } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
const TopNav = () => {
  return (
    <div className="flex container mx-auto justify-end items-center p-4">
      <Link
        href="/"
        className="mr-auto text-xl font-extrabold hover:text-indigo-700 hover:dark:text-white"
      >
        Jan Van den Enden
      </Link>
      <motion.a
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/janvandenenden"
        rel="noreferrer"
        target="_blank"
        title="Github"
        className="hover:text-indigo-700 hover:dark:text-white cursor-pointer dark:text-white rounded text-xl ml-6 "
      >
        <DiGithubAlt className="text-4xl p-1" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.linkedin.com/in/jan-van-den-enden-410b7820/"
        rel="noreferrer"
        target="_blank"
        title="LinkedIn"
        className="hover:text-indigo-700 hover:dark:text-white cursor-pointer dark:text-white rounded text-xl ml-6  "
      >
        <FaLinkedinIn className="text-4xl p-2" />
      </motion.a>
    </div>
  );
};

export default TopNav;
