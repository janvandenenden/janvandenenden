import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
