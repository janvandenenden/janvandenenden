import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <>
      <nav className="dark:text-white mt-auto flex flex-col bg-transparent py-5 w-full items-end">
        <Link
          className={`${
            router.pathname == "/"
              ? "line-through font-extrabold italic text-indigo-900 dark:text-indigo-600"
              : "dark:text-white font-light text-indigo-900"
          } uppercase mb-1 md:mb-3 `}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${
            router.pathname == "/projects"
              ? "line-through font-extrabold italic text-indigo-900 dark:text-indigo-600"
              : "dark:text-white font-light text-indigo-900"
          } uppercase mb-1 md:mb-3`}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={`${
            router.pathname == "/about-me"
              ? "line-through font-extrabold italic text-indigo-900 dark:text-indigo-600"
              : "dark:text-white font-light text-indigo-900"
          } uppercase mb-1 md:mb-3 block`}
          href="/about-me"
        >
          About me
        </Link>
      </nav>
    </>
  );
};

export default Nav;
