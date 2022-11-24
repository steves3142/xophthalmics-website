import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonials"; 

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Xenon Ophthalmics</title>
      </Head>

      {/* Header/Nav */}
      <Header/>

      {/* Hero */}

      <Hero/>

      {/*Testimonials */}
      <Testimonial/>

      {/* Footer */}
      <Footer/>



    </div>
  );
};

export default Home; 