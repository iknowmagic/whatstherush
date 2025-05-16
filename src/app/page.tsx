import React from "react";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Tools from "@/components/Tools";
// import Join from "@/components/Join";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <main className="antialiased">
      <Hero />
      <Manifesto />
      <Tools />
      {/* <Join /> */}
      <Footer />
    </main>
  );
};

export default Home;
