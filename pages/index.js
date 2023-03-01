import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { DiGithubAlt } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";
import { useRouter } from "next/router";
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0, x: "100vw" },
};

import Nav from "../components/Nav";

export default function Home() {
  const size = useWindowSize();
  console.log(size);
  return (
    <div className="bg-slate-700">
      <Head>
        <title>Jan Van den Enden</title>
        <meta name="description" content="Website of Jan Van den Enden" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear", duration: 2.5 }}
        style={{ minHeight: `${size.height}px` }}
        className="flex items-center dark:text-white text-blue-900 bg-gradient-to-r from-[#ebe8d1] to-[#f7cccc] dark:to-slate-800 dark:from-gray-800"
      >
        <div className="container h-full mx-auto flex items-center px-4">
          <div className="grid grid-cols-1  lg:grid-cols-2">
            <div className="w-full flex flex-col my-auto order-last lg:order-first ">
              {/* HERO TEXT */}
              <motion.h1
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "tween" }}
                className="text-5xl font-extrabold my-4 md:text-5xl lg:text-7xl xl:text-8xl"
                exit={{ opacity: 0 }}
              >
                Hi, I am Jan
              </motion.h1>

              <motion.div
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, type: "tween", delay: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-xl md:text-4xl font-light">
                  I like to craft solid and scalable web applications with great
                  user experiences
                </p>

                <div className="my-6 flex">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:jan@enden.be"
                    rel="noreferrer"
                    target="_blank"
                    className="bg-white dark:bg-emerald-600 hover:dark:bg-emerald-500 shadow-xl flex items-center text-xl py-2 cursor-pointer dark:text-white px-6 mr-6  rounded font-extrabold "
                  >
                    <MdOutlineMail className="text-2xl  mr-3 dark:hover:text-white" />
                    Let&apos;s talk
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/janvandenenden"
                    rel="noreferrer"
                    target="_blank"
                    className="bg-white shadow-xl dark:bg-emerald-600 hover:dark:bg-emerald-500 cursor-pointer dark:text-white rounded text-xl mr-6 "
                  >
                    <DiGithubAlt className="text-5xl p-1" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/jan-van-den-enden-410b7820/"
                    rel="noreferrer"
                    target="_blank"
                    className="bg-white shadow-xl dark:bg-emerald-600 hover:dark:bg-emerald-500 cursor-pointer dark:text-white rounded text-xl mr-6  "
                  >
                    <FaLinkedinIn className="text-5xl p-2" />
                  </motion.a>
                </div>

                <p className="mt-8 font-thin">
                  Check some fun{" "}
                  <Link
                    href="/portfolio"
                    className="uppercase font-extrabold dark:text-emerald-600 hover:dark:text-emerald-500 cursor-pointer"
                  >
                    projects
                  </Link>{" "}
                  I&apos;ve worked on recently or learn a bit more{" "}
                  <Link
                    href="/about-me"
                    className="uppercase font-extrabold dark:text-emerald-600 hover:dark:text-emerald-500 cursor-pointer"
                  >
                    about me
                  </Link>
                </p>
              </motion.div>
            </div>
            <motion.div
              className="order-first lg:order-last px-16 hidden md:px-36 lg:px-0 lg:grid"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              transition={{ delay: 2.5 }}
            >
              <Image
                src="/jan-2.png"
                alt="3d image of a developer"
                width="300"
                height="300"
                priority
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
