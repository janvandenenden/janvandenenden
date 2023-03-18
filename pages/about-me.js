import Head from "next/head";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Image from "next/image";

export default function aboutMe() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Jan Van den Enden | About me</title>
        <meta name="description" content="Website of Jan Van den Enden" />
      </Head>

      <main>
        <div className="container mx-auto h-full px-4">
          <div className="min-h-screen flex flex-col">
            <div className="w-full h-full overflow-hidden">
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
            <div className="grid md:grid-cols-2 gap-12 items-center my-auto">
              <div className="font-light lg:text-2xl">
                <p className="mb-3">
                  Hey there, I&apos;m a social scientist turned developer from
                  Belgium.
                </p>
                <p className="mb-3">
                  {" "}
                  My go-to tools are React, Next.js, and Tailwind, and I love
                  using Python to crunch data. Lately, I&apos;ve been diving
                  into the wild world of Web3 and having a blast learning all
                  about it.
                </p>
                <p className="mb-3">
                  Currently, I&apos;m happily working on some exciting projects,
                  but I&apos;m always open to new professional adventures. You
                  can find{" "}
                  <a
                    href="/resume.pdf"
                    // download="Jan Van den Enden - Resume"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold"
                  >
                    my resume
                  </a>{" "}
                  here and reach me at{" "}
                  <a
                    href="mailto:jan@enden.be"
                    rel="noreferrer"
                    target="_blank"
                    className=" font-extrabold "
                  >
                    jan@enden.be
                  </a>
                  .
                </p>
              </div>

              <div className="pb-5">
                <Image
                  src="/about-me-4.png"
                  width="800"
                  height="800"
                  alt="portrait of Jan"
                  className="filter hue-rotate-180  contrast-75 opacity-90 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
