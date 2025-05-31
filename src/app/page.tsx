"use client";

import React from "react";
import Hero from "@/components/Hero";
import Background from "@/components/Background";
import Stanzas from "@/components/Stanzas";

const Home: React.FC = () => {
  return (
    <main className="bg-light min-w-[320px] min-h-screen text-dark">
      <Hero />
      <Stanzas />
      <Background />
    </main>
  );
};

export default Home;
