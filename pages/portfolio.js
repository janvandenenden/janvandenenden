import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../components/Nav";

import ProjectCard from "../components/ProjectCard";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const projects = [
  {
    name: "Mockup Mark",
    description:
      "An online mockup generator that allows you to create and download high-quality apparel mockups right in your browser.",
    images: ["/mockup-mark.png", "/mockup-mark.png"],
    url: "https://mockupmark.com",
    tools: ["React", "Next.js", "Bootstrap"],
  },
  {
    name: "Supermeme",
    description:
      "Create your own Supreme T-Shirt in seconds that gets delivered to your doorstep",
    images: ["/supermeme.png", "/mockup-mark.png"],
    url: "https://supermeme.co",
    tools: ["React", "Bootstrap"],
  },
  {
    name: "NFT Snapshot",
    description:
      "Take a snapshot of NFT token holders on the Ethereum and Polygon blockchain",
    images: ["/nftsnapshot.png", "/mockup-mark.png"],
    url: "https://nftsnapshot.io",
    tools: ["React", "Next.js", "Tailwind"],
  },
  {
    name: "Rare Folk",
    description:
      "Rare Folk is a series of programmatically generated characters based on the ERC-721 standard and consists of 10,000 non-fungible tokens on the Ethereum blockchain.",
    images: ["/rare-folk.png", "/mockup-mark.png"],
    url: "https://rarefolknft.com",
    tools: ["React", "Next.js", "Bootstrap", "Ethereum"],
  },
  {
    name: "Yannick Joos",
    description: "lol",
    images: ["/rare-folk.png", "/mockup-mark.png"],
    url: "https://yannickjoos.com",
    tools: ["React", "Next.js", "Bootstrap"],
  },
];

export default function Portfolio() {
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
                <motion.h1
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-5xl font-extrabold my-4 md:text-5xl lg:text-7xl xl:text-8xl"
                >
                  Projects
                </motion.h1>
                <div className="ml-auto my-auto">
                  <Nav />
                </div>

                {/* <motion.div
                  className="ml-auto"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <Link
                    href="/"
                    className=" text-white text-sm font-thin flex items-center"
                  >
                    <FiChevronsLeft className="text-xl font-thin inline mr-2" />{" "}
                    <span>Back</span>
                  </Link>
                </motion.div> */}
              </div>

              {/* HERO TEXT */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 py-3 md:py-5">
                {projects.map((project, index) => {
                  return <ProjectCard key={index} projectInfo={project} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
