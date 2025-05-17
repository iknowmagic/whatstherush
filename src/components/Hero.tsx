"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "@/components/Motion";

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Enhanced parallax effect values
  const starsY = useTransform(scrollY, [0, 600], [0, 20]);
  const grainY = useTransform(scrollY, [0, 600], [0, 40]);
  const earthY = useTransform(scrollY, [0, 600], [0, 80]);
  const titleY = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const earthScale = useTransform(scrollY, [0, 300], [1, 1.08]);

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
    <section className="relative flex flex-col justify-start items-center bg-poster w-full h-screen overflow-hidden">
      {/* Stars background layer */}
      <motion.div
        className="z-0 absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/stars-bg.png")',
          y: starsY,
          opacity: 0.6,
        }}
      />

      {/* Vintage texture overlay */}
      <motion.div
        className="z-5 absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url("/images/vintage-texture.png")',
          mixBlendMode: "overlay",
          opacity: 0.2,
          y: grainY,
        }}
      />

      <div className="z-10 relative flex flex-col justify-between items-center mx-auto px-4 py-16 h-full container">
        {/* Title Section */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          style={{ y: titleY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex flex-col justify-center items-center hero-content">
            <h1 className="font-display lg:text-[8rem] 2xl:text-[10rem] xl:text-[9rem] text-base-100 text-5xl sm:text-6xl md:text-7xl leading-none tracking-wide">
              WHAT&apos;S THE F*CKING RUSH?
            </h1>
            <p className="mt-4 font-body text-sm text-base-100 md:text-lg uppercase tracking-wider">
              Technology in Earth Time
            </p>
          </div>
        </motion.div>

        {/* Earth Image */}
        <motion.div
          className="relative flex flex-grow justify-center items-center"
          style={{ opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <motion.div
            style={{ y: earthY, scale: earthScale }}
            className="relative w-[min(60vh,500px)] h-[min(60vh,500px)]"
          >
            <Image
              src="/images/earth.png"
              alt="Earth"
              fill
              className="w-full h-full object-contain"
              style={{
                filter: "brightness(1.05) contrast(1.1)",
              }}
              sizes="(max-width: 768px) 90vw, 500px"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.button
          className="mb-8 px-10 py-4 btn-outline font-display text-xl tracking-wide btn btn-accent"
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          EXPLORE
        </motion.button>
      </div>

      {/* Decorative stars */}
      <div className="top-20 left-16 absolute opacity-70 text-accent text-2xl">
        ★
      </div>
      <div className="top-1/4 right-1/4 absolute opacity-60 text-accent text-xl">
        ★
      </div>
      <div className="bottom-32 left-1/3 absolute opacity-70 text-accent text-lg">
        ★
      </div>
    </section>
  );
};

export default Hero;
