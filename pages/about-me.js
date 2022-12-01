import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Image from "next/image";
import Slideshow from "../components/Slideshow";
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function aboutMe() {
  return (
    <div className=" bg-slate-700 overflow-hidden">
      <Head>
        <title>Jan Van den Enden</title>
        <meta name="description" content="Website of Jan Van den Enden" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        variant={variants}
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ duration: 2.5 }}
        className="min-h-screen dark:text-white text-blue-900 bg-gradient-to-r from-[#f1efda] to-[#e0cdc6] dark:to-slate-800 dark:from-gray-800"
      >
        <div className="container mx-auto h-full">
          <div className="h-full w-full flex flex-col">
            <div className="w-full h-full p-2 my-auto overflow-hidden">
              <div className="flex items-center">
                <div className="ml-auto my-auto">
                  <Nav />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2  items-center">
              <div className="font-thin text-lg">
                <motion.h1
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-5xl font-extrabold my-4 md:text-5xl lg:text-7xl xl:text-8xl"
                >
                  About me
                </motion.h1>
                <p className="mb-3">
                  I am a front end developer and project manager with hands-on
                  experience building user-friendly digital products. I am
                  interested in blockchain technology and DeFi, and have
                  experience working with JavaScript (ES6, React, Node.js) and
                  CSS frameworks. I am skilled in version control with Git and
                  have working knowledge of Solidity and smart contract
                  functionality. I have also worked remotely in international
                  teams and am familiar with agile methodologies.
                </p>
                <p className="mb-3">
                  I consider myself a generalist with a curious nature. I enjoy
                  learning and trying new things, and I believe this has helped
                  me to develop a broad range of skills and experiences. I am
                  always looking for ways to improve and grow, and I am open to
                  new challenges and opportunities.
                </p>
                <p className="mb-3">
                  My most recent venture is Mockup Mark, an apparel mockup
                  generator that I co-founded. I was responsible for designing
                  the UI, gathering user feedback, and optimizing the search
                  engine ranking. Before that, I worked as a web dev coach at
                  BeCode, where I helped a diverse group of learners gain the
                  necessary skills to land their first job in web development.
                  Earlier in my career, I worked as a project manager at Helion
                  Research, where I was responsible for designing
                  questionnaires, monitoring fieldwork, and conducting data
                  analysis and presentation.
                </p>
                <p className="mb-3">
                  I am currently looking for work opportunities where I can use
                  my skills and experience to build cutting-edge web
                  applications. I can be reached at jan@enden.be and my GitHub
                  profile can be found at https://github.com/janvandenenden. I
                  can also be reached by phone at +32485042624.
                </p>
              </div>
              <div className="p-12 ">
                <Image
                  src="/about-me-4.png"
                  width="800"
                  height="800"
                  alt="portrait of Jan"
                  className="filter dark:hue-rotate-180  contrast-75 opacity-90 rounded-2xl shadow-xl "
                />
              </div>
            </div>
            <Slideshow />
          </div>
        </div>
      </motion.main>
    </div>
  );
}
