import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Xenon Ophthalmics</title>
      </Head>

      {/* Header/Nav */}
      <Header/>
      {/*About */}

      {/* Footer */}
      <Footer/>



    </div>
  );
};

export default Home; 