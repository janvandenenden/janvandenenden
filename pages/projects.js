import Head from "next/head";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import useWindowSize from "../hooks/useWindowSize";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Mockup Mark",
    description:
      "A SaaS apparel mockup generator that allows you to create and download high-quality apparel mockups right in your browser. Currently Mockup Mark has over 12k monthly users, coming from all corners of the world.",
    images: ["/mockup-mark.webp", "/mockup-mark-devices.webp"],
    url: "https://mockupmark.com",
    tools: ["React", "Next.js", "Bootstrap"],
  },
  {
    name: "Supermeme",
    description:
      "An E-commerce website that lets you create your own Supreme T-Shirt in seconds and get it delivered to your doorstep. Over 200 T-shirts sold worldwide!",
    images: ["/supermeme.webp", "/supermeme-devices.webp"],
    url: "https://supermeme.co",
    tools: ["React", "Bootstrap"],
  },
  {
    name: "Mintboost",
    description:
      "Filter out wallets that are unlikely to convert and optimize your NFT project's allowlist.",
    images: ["/mintboost.webp", "/mintboost-devices.webp"],
    url: "https://mintboost.ai",
    tools: ["React", "Tailwind", "Ethereum", "Python"],
  },
  {
    name: "NFT Snapshot",
    description:
      "Take a snapshot of NFT token holders on the Ethereum and Polygon blockchain",
    images: ["/nftsnapshot.webp", "/nft-snapshot-devices.webp"],
    url: "https://nftsnapshot.io",
    tools: ["React", "Next.js", "Tailwind", "Ethereum"],
  },
  {
    name: "NFT Refresh",
    description:
      "Update the metadata of your whole ERC-721 collection on Opensea. It is built using Alchemy, Ethers and the Opensea API.",
    images: ["/nftrefresh.webp", "/nftrefresh-device.webp"],
    url: "https://www.nftrefresh.xyz/",
    tools: ["React", "Next.js", "Tailwind", "Ethereum"],
  },
  {
    name: "Rare Folk",
    description:
      "Programmatically generated characters based on the ERC-721 standard on the Ethereum blockchain.",
    images: ["/rarefolk.webp", "/rarefolk-devices.webp"],
    url: "https://rarefolknft.com",
    tools: ["React", "Next.js", "Bootstrap", "Ethereum"],
  },
  {
    name: "Yannick Joos",
    description: "Website for stand up comedian Yannick Joos",
    images: ["/yannick-joos.webp", "/yannick-joos-devices.webp"],
    url: "https://yannickjoos.com",
    tools: ["React", "Next.js", "Bootstrap"],
  },
];

export default function Portfolio() {
  const size = useWindowSize();

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Jan Van den Enden | Projects</title>
        <meta name="description" content="Website of Jan Van den Enden" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          minHeight: `${size.height - 112}px`,
        }}
        className="flex items-center min-h-screen"
      >
        <div className="container mx-auto h-full px-4">
          <div className="h-full w-full flex flex-col">
            <div className="w-full h-full my-auto overflow-hidden">
              <div className="flex items-center justify-center overflow-hidden">
                <motion.h1
                  initial={{ y: "100vh" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-5xl font-extrabold my-6 md:text-5xl lg:text-7xl xl:text-8xl"
                >
                  Projects
                </motion.h1>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 py-3 md:py-5">
                {projects.map((project, index) => {
                  return <ProjectCard key={index} projectInfo={project} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
