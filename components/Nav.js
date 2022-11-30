import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <nav className="dark:text-white mt-auto flex flex-col bg-transparent py-5 w-full">
        <Link
          className={`${
            router.pathname == "/"
              ? "line-through font-extrabold italic"
              : "text-slate-200 font-light"
          } uppercase mb-1 md:mb-3   `}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${
            router.pathname == "/portfolio"
              ? "line-through font-extrabold italic text-white"
              : "text-slate-200 font-light"
          } uppercase mb-1 md:mb-3   `}
          href="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className={`${
            router.pathname == "/about-me"
              ? "line-through font-extrabold italic"
              : "text-slate-200 font-light"
          } uppercase mb-1 md:mb-3   `}
          href="/about-me"
        >
          About me
        </Link>
      </nav>
    </>
  );
};

export default Nav;
