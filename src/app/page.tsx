import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Tools from "@/components/Tools";
// import Join from "@/components/Join";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          What&#39;s The Rush? | A Humane Alternative to Accelerationism
        </title>
        <meta
          name="description"
          content="Challenging accelerationist tech culture with ethical, sustainable, humane alternatives. Tech should serve life — not accelerate it."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Add custom fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600&family=Spectral:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="antialiased">
        <Hero />
        <Manifesto />
        <Tools />
        {/* <Join /> */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
