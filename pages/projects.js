import Head from "next/head";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import useWindowSize from "../hooks/useWindowSize";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Mockup Mark",
    description:
      "A SaaS apparel mockup generator with over 12k monthly users. It allows you to create and download high-quality apparel mockups right in your browser.",
    images: ["/mockup-mark.webp", "/mockup-mark-devices.webp"],
    url: "https://mockupmark.com",
    tools: ["React", "Next.js", "Bootstrap"],
    tags: ["Co-founder", "Front-end", "UX", "SaaS", "SEO"],
  },
  {
    name: "Yannick Joos",
    description:
      "A website with content management system integration for stand up comedian Yannick Joos.",
    images: ["/yannick-joos.webp", "/yannick-joos-devices.webp"],
    url: "https://yannickjoos.com",
    tools: ["React", "Next.js", "Bootstrap", "Contentful"],
    tags: ["UX / UI", "Front-end", "CMS", "Google Analytics"],
  },
  {
    name: "Mintboost",
    description:
      "A service that optimizes an NFT project's allowlist. It uses blockchain data in a logistical regression model and determines the wallets' likelihoods of minting.",
    images: ["/mintboost.webp", "/mintboost-devices.webp"],
    url: "https://mintboost.ai",
    tools: ["React", "Tailwind", "Ethereum", "Python"],
    tags: ["UX / UI", "Front-end", "Data analytics"],
  },
  {
    name: "NFT Refresh",
    description:
      "A website that lets you update the metadata of your ERC-721 collection on Opensea. It looks at the mint events to obtain the tokenIds of the NFT collection to subsequently update them using the Opensea API.",
    images: ["/nftrefresh.webp", "/nftrefresh-device.webp"],
    url: "https://www.nftrefresh.xyz/",
    tools: ["React", "Next.js", "Tailwind", "Ethereum"],
    tags: ["UX / UI", "Front-end", "API"],
  },

  {
    name: "NFT Snapshot",
    description:
      "A website that lets you take trait specific snapshots of NFT token holders on the Ethereum and Polygon blockchain.",
    images: ["/nftsnapshot.webp", "/nft-snapshot-devices.webp"],
    url: "https://nftsnapshot.io",
    tools: ["React", "Next.js", "Tailwind", "Ethereum"],
    tags: ["UX / UI", "Front-end"],
  },
  {
    name: "Supermeme",
    description:
      "An E-commerce website that lets you create your own Supreme T-Shirt in seconds and get it delivered to your doorstep. Over 200 T-shirts sold worldwide!",
    images: ["/supermeme.webp", "/supermeme-devices.webp"],
    url: "https://supermeme.co",
    tools: ["React", "Bootstrap"],
    tags: ["UX / UI", "Front-end"],
  },

  {
    name: "Rare Folk",
    description:
      "A website with mint experience for a web3 community that uses the ERC-721 standard on the Ethereum blockchain.",
    images: ["/rarefolk.webp", "/rarefolk-devices.webp"],
    url: "https://rarefolknft.com",
    tools: ["React", "Next.js", "Bootstrap", "Ethereum"],
    tags: ["UX / UI", "Front-end", "Community"],
  },
];

export default function Projects() {
  const size = useWindowSize();
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Jan Van den Enden | Projects</title>
        <meta
          name="description"
          content="Hi! I'm Jan, a front-end developer based in Brussels, Belgium. Check out some of my projects!"
        />
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
