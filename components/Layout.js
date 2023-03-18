import React from "react";
import Footer from "./Footer";
import TopNav from "./TopNav";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
