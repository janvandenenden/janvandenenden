import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Connect from "../components/Connect";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0, x: "100vw" },
};
export default function Home() {
  const router = useRouter();
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
        transition={{ type: "linear", duration: 1.5 }}
        className="h-screen  text-white"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 4, delay: 4 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src="/bg3.jpeg"
            layout="fill"
            objectFit="cover"
            alt="abstract image"
            style={{
              opacity: 0.1,

              // filter: "blur(2px) grayscale(100%)",
              // filter: "blur(2px) grayscale(100%)",
            }}
          />
        </motion.div>
        <div className="container mx-auto h-full">
          <div className="h-full w-full flex flex-col">
            <div className="w-full p-2 my-auto">
              {/* HERO TEXT */}
              <motion.h1
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "tween" }}
                className="text-5xl font-extrabold my-4"
                exit={{ opacity: 0 }}
              >
                Hi, I am Jan
              </motion.h1>

              <motion.p
                className="text-4xl font-thin "
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, type: "tween", delay: 1 }}
                exit={{ opacity: 0 }}
              >
                I like to craft solid and scalable frontend products with great
                user experiences.
              </motion.p>
              <motion.div
                className="my-6 flex"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "tween", delay: 2 }}
                exit={{ opacity: 0 }}
              >
                <button
                  onClick={() => router.push("/portfolio")}
                  href="/portfolio"
                  className="bg-white text-black text-xl py-2 cursor-pointer px-6 mr-2 border border-slate-900 font-extrabold hover:bg-transparent hover:border hover:border-white hover:text-white"
                >
                  See portfolio
                </button>
                <button
                  href="/"
                  className="bg-transparent border border-white cursor-pointer text-white text-xl py-2 px-6 mr-2 font-extrabold hover:bg-white hover:border hover:border-slate-900 hover:text-black"
                >
                  About me
                </button>
              </motion.div>

              <motion.div
                className=""
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, delay: 2.5 }}
                exit={{ opacity: 0 }}
              >
                {/* LETS CONNECT SECTION */}
                <Connect />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
