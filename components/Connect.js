import React from "react";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Connect = () => {
  return (
    <div className="overflow-hidden">
      <div className="border-4 mt-4"></div>
      <div
        className="w-full flex
    flex-col justify-center mt-3 py-4"
      >
        <p className="mb-3 text-sm">Let&apos;s connect</p>
        <div className="flex">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="/contact"
            className="mr-6"
          >
            <AiFillGithub className="text-5xl text-white" />
          </motion.a>
          <motion.a
            href="/contact"
            className="mr-6"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillLinkedin className="text-5xl text-white" />
          </motion.a>
          <motion.a
            href="/contact"
            className="mr-6"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdOutlineMail className="text-5xl text-white" />
          </motion.a>
        </div>
      </div>
      <div className="border-4 mt-4"></div>
    </div>
  );
};

export default Connect;
