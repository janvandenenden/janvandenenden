import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import useDarkMode from "../hooks/useDarkMode";
import Layout from "../components/Layout";
import useWindowSize from "../hooks/useWindowSize";

function MyApp({ Component, pageProps }) {
  const isDarkMode = useDarkMode();
  const size = useWindowSize();
  if (size.width == undefined || isDarkMode === undefined) {
    console.log(size);
    return <div className="min-h-screen bg"></div>;
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence mode="wait">
        <div className="text-indigo-900 bg dark:text-white ">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
