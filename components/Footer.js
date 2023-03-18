import React from "react";
import { motion } from "framer-motion";
import { DiGithubAlt } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex container mx-auto justify-center py-3">
      <p className="text-sm">
        &copy; Jan Van den Enden {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
