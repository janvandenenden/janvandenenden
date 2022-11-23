import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiChevronsLeft } from "react-icons/fi";

import Connect from "../components/Connect";
import ProjectCard from "../components/ProjectCard";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0, x: "100vw" },
};

const projects = [
  {
    name: "Mockup Mark",
    description:
      "An online mockup generator that allows you to create and download high-quality apparel mockups right in your browser.",
    image: "/mockup-mark.png",
    url: "https://mockupmark.com",
    tools: ["React", "Next.js", "Bootstrap"],
  },
  {
    name: "Supermeme",
    description:
      "Create your own Supreme T-Shirt in seconds that gets delivered to your doorstep",
    image: "/supermeme.png",
    url: "https://supermeme.co",
    tools: ["React", "Bootstrap"],
  },
  {
    name: "NFT Snapshot",
    description:
      "Take a snapshot of NFT token holders on the Ethereum and Polygon blockchain",
    image: "/nftsnapshot.png",
    url: "https://nftsnapshot.io",
    tools: ["React", "Next.js", "Tailwind"],
  },
  {
    name: "Rare Folk",
    description:
      "Rare Folk is a series of programmatically generated characters based on the ERC-721 standard and consists of 10,000 non-fungible tokens on the Ethereum blockchain.",
    image: "/rare-folk.png",
    url: "https://rarefolknft.com",
    tools: ["React", "Next.js", "Bootstrap"],
  },
];

export default function Portfolio() {
  return (
    <div className="bg-slate-900 overflow-hidden">
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
        transition={{ duration: 1.5 }}
        className="min-h-screen  text-white"
      >
        <div className="container mx-auto h-full">
          <div className="h-full w-full flex flex-col">
            <div className="w-full h-full p-2 my-auto overflow-hidden">
              <div className="flex items-center">
                <motion.h1
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-5xl font-extrabold my-4"
                >
                  Portfolio
                </motion.h1>
                <motion.div
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
                </motion.div>
              </div>
              {/* HERO TEXT */}

              {projects.map((project, index) => {
                return <ProjectCard key={index} projectInfo={project} />;
              })}

              {/* LETS CONNECT SECTION */}
              <Connect />
            </div>
            <div className="mt-auto p-2">
              <ul>
                <li>
                  <Link href="/">Portfolio</Link>
                </li>
                <li>
                  <Link href="/">About me</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link href="/">Back</Link>
      </motion.main>
    </div>
  );
}
