import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { DiGithubAlt } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";
import useDarkMode from "../hooks/useDarkMode";
import Nav from "../components/Nav";

export default function Home() {
  const size = useWindowSize();
  return (
    <div>
      <Head>
        <title>Jan Van den Enden | Digital Developer</title>
        <meta
          name="description"
          content="Hi! I'm Jan, a social scientist turned developer. I'm experienced in building customer-facing SaaS, websites and setting up lean business operations."
        />
      </Head>

      <main
        style={{
          minHeight: `${size.height - 112}px`,
        }}
        className="container relative flex mx-auto px-4"
      >
        <div className="h-full my-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="w-full flex flex-col my-auto order-last lg:order-first lg:col-span-7 overflow-hidden ">
              <motion.h1
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "tween" }}
                className="text-3xl font-extrabold my-4 md:text-5xl lg:text-5xl xl:text-6xl"
                exit={{ opacity: 0 }}
              >
                I&apos;m a{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
                  front-end developer
                </span>{" "}
                based in Brussels, Belgium
              </motion.h1>

              <motion.div
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, type: "tween", delay: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-lg md:text-2xl font-light mb-3">
                  I love to code creative and functional websites that scale and
                  help projects go from zero to one using lean strategies.
                </p>
                <p className="text-lg md:text-2xl font-light mb-3">
                  Get in touch if you have a project in mind or would like to
                  discuss potential opportunities.
                </p>

                <div className="my-6 flex flex-col md:flex-row">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:jan@enden.be"
                    rel="noreferrer"
                    target="_blank"
                    className="bg-white dark:bg-indigo-600 hover:text-indigo-700 hover:dark:text-white hover:dark:bg-indigo-500 shadow-xl flex items-center text-xl py-2 cursor-pointer dark:text-white px-6 md:mr-6 mb-3 md:mb-0 rounded font-extrabold justify-center"
                  >
                    <MdOutlineMail className="text-2xl  mr-3 dark:hover:text-white" />
                    Let&apos;s talk
                  </motion.a>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-indigo-600 hover:text-indigo-700 hover:dark:text-white hover:dark:bg-indigo-500 shadow-xl text-xl py-2 cursor-pointer dark:text-white px-6 md:mr-6 mb-3 md:mb-0 rounded font-extrabold"
                  >
                    <Link
                      href="/projects"
                      className="flex items-center justify-center "
                    >
                      <AiFillEye className="text-2xl  mr-3 dark:hover:text-white" />
                      See projects
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="order-first lg:order-last px-16 hidden md:px-36 lg:px-0 lg:grid lg:col-span-5"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              transition={{ delay: 2.5 }}
            >
              <Image
                src="/jan-2.webp"
                alt="3d image of a developer"
                width="300"
                height="300"
                priority
                sizes="100vw"
                className="filter dark:hue-rotate-180 contrast-100 opacity-100 rounded-2xl"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
