import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence mode="wait">
        <div className="text-indigo-900 bg-[#FBFFFE] dark:text-white  dark:bg-[#16161d]">
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
