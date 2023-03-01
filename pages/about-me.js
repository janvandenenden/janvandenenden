import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Image from "next/image";
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
        <div className="container mx-auto h-full px-4">
          <div className="h-full w-full flex flex-col">
            <div className="w-full h-full p-2 my-auto overflow-hidden">
              <div className="flex items-center">
                <motion.h1
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-5xl font-extrabold my-4 md:text-5xl lg:text-7xl xl:text-8xl"
                >
                  About Me
                </motion.h1>
                <div className="ml-auto my-auto">
                  <Nav />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="font-thin text-lg">
                <p className="mb-3">
                  I am a social scientist turned developer from Belgium.
                  I&apos;ve co-founded Mockup Mark, an apparel mockup generator
                  and more recently I&apos;ve been dabbling in all that is Web3.
                </p>
                <p className="mb-3">
                  Currently I&apos;m looking for a new professional adventure.
                  You can find my resume here and reach me at jan@enden.be.
                </p>
              </div>

              <div>
                <Image
                  src="/about-me-4.png"
                  width="800"
                  height="800"
                  alt="portrait of Jan"
                  className="filter dark:hue-rotate-180  contrast-75 opacity-90 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
