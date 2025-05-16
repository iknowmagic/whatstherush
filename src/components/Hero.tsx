"use client";

import React, { useEffect, useState } from "react";
import { useScroll, motion, useTransform } from "@/components/Motion";

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effect values
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Handle client-side mounting for Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("manifesto");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative bg-[#172625] w-full h-screen overflow-hidden text-white">
      {/* Parallax background */}
      <motion.div className="z-0 absolute inset-0" style={{ y, opacity }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/earth-poster.jpg")',
            filter: "brightness(0.7) contrast(1.1)",
          }}
        />
      </motion.div>

      {/* Overlay gradient */}
      <div className="z-10 absolute inset-0 bg-gradient-to-b from-[#172625]/30 to-[#172625]/80" />

      {/* Content */}
      <div className="z-20 relative flex flex-col justify-center items-center px-4 h-full text-center">
        <motion.h1
          className="font-['Anton'] text-[#F2DCB3] text-6xl md:text-8xl lg:text-9xl tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          WHAT'S THE RUSH?
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl font-['Inter'] text-[#BF9D5E] text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A humane alternative to accelerationism.
        </motion.p>

        <motion.button
          className="hover:bg-[#2C7373] mt-16 px-6 py-2 border-[#2C7373] border-2 rounded-none font-['Inter'] text-[#F2DCB3] transition-colors duration-300"
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
