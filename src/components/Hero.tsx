"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "@/components/Motion";

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Enhanced parallax effect values
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const earthScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const starOpacity = useTransform(scrollY, [0, 200], [1, 0.3]);

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
      {/* Stars background layer - static */}
      <div className="z-0 absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/stars-bg.png")',
            opacity: 0.6,
          }}
        />
      </div>

      {/* Parallax earth */}
      <motion.div
        className="z-10 absolute inset-0 flex justify-center items-center"
        style={{ y, opacity }}
      >
        <motion.div
          style={{ scale: earthScale }}
          className="relative w-[80vh] max-w-[500px] h-[80vh] max-h-[500px]"
        >
          <Image
            src="/images/earth.png"
            alt="Earth"
            fill
            className="w-full h-full object-contain"
            style={{
              filter: "brightness(0.85) contrast(1.2)",
            }}
            sizes="(max-width: 500px) 100vw, 500px"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Vintage overlay texture */}
      <div
        className="z-20 absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url("/images/vintage-texture.png")',
          opacity: 0.15,
          mixBlendMode: "overlay",
        }}
      />

      {/* Vignette effect */}
      <div className="z-20 absolute inset-0 bg-radial-gradient-to-transparent from-[#172625]/60 to-transparent" />

      {/* Content */}
      <div className="z-30 relative flex flex-col justify-center items-center px-4 h-full text-center">
        <motion.div className="relative" style={{ y: textY }}>
          {/* Decorative stars */}
          <motion.div
            className="-top-12 -left-8 absolute text-[#BF9D5E] text-2xl"
            style={{ opacity: starOpacity }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            ★
          </motion.div>
          <motion.div
            className="-top-6 -right-10 absolute text-[#BF9D5E] text-lg"
            style={{ opacity: starOpacity }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            ★
          </motion.div>

          {/* Main title */}
          <motion.h1
            className="font-['Anton'] text-[#F2DCB3] text-6xl md:text-8xl lg:text-9xl leading-tight tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WHAT&#39;S THE
            <br className="md:hidden" />
            <span className="inline-block relative">
              F
              <span className="top-1/2 left-1/2 absolute text-[#F2DCB3] -translate-x-1/2 -translate-y-1/2 transform">
                *
              </span>
              CKING
            </span>
            <br />
            RUSH?
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl font-['Inter'] text-[#BF9D5E] text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A humane alternative to accelerationism.
          </motion.p>
        </motion.div>

        <motion.button
          className="hover:bg-[#2C7373] mt-16 px-8 py-3 retro-border border-[#BF9D5E] border-2 font-['Anton'] text-[#F2DCB3] tracking-wide transition-colors duration-300"
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          EXPLORE
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
