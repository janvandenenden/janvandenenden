import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import bgImage from "../public/bg2.jpeg";
import useDarkMode from "../hooks/useDarkMode";

function MyApp({ Component, pageProps }) {
  const isDarkMode = useDarkMode();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence mode="wait">
        <div
          style={{
            backgroundImage: `${
              isDarkMode
                ? "linear-gradient(to right,rgba(0,0,0,.8) 40%, rgba(0,0,0,.7))"
                : "linear-gradient(to right,rgba(255,255,255,.9) 40%, rgba(255,255,255,.8))"
            }, url(${bgImage.src})`,
          }}
          className="text-indigo-900 bg dark:text-white "
        >
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
