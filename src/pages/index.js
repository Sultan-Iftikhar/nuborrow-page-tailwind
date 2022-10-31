import * as React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default IndexPage;

// export const Head = () => <title>Nuborrow</title>;
export const Head = () => <link rel="icon" type="image/x-icon" href="../images/favicon.ico"></link>;
