"use client";

import React from "react";
import { motion } from "@/components/Motion";

const Manifesto: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="manifesto"
      className="relative flex flex-col justify-center items-center bg-base-100 px-4 py-24 w-full min-h-screen"
    >
      {/* Vintage texture overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url("/images/vintage-texture.png")',
          opacity: 0.15,
          mixBlendMode: "overlay",
        }}
      />

      {/* Corner stars decoration */}
      <div className="top-8 left-8 absolute text-accent text-xl">★</div>
      <div className="top-8 right-8 absolute text-accent text-xl">★</div>
      <div className="bottom-8 left-8 absolute text-accent text-xl">★</div>
      <div className="right-8 bottom-8 absolute text-accent text-xl">★</div>

      <div className="z-10 mx-auto w-full max-w-4xl">
        <motion.div
          className="relative mx-4 md:mx-8 p-10 md:p-16 retro-border text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="inline-block relative mb-12 font-display text-base-content text-4xl md:text-5xl"
            variants={itemVariants}
          >
            <span className="z-10 relative">MANIFESTO</span>
            <div className="right-0 -bottom-2 left-0 z-0 absolute bg-accent h-1"></div>
          </motion.h2>

          <div className="space-y-8 font-body text-base-content text-xl md:text-2xl lg:text-3xl leading-relaxed">
            <motion.p variants={itemVariants} className="font-medium">
              Tech should serve life, not accelerate it.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="relative flex flex-col space-y-10 my-16"
            >
              {/* Decorative stars */}
              <div className="top-8 -left-4 absolute text-primary text-sm">
                ★
              </div>
              <div className="top-20 -right-4 absolute text-primary text-sm">
                ★
              </div>
              <div className="bottom-8 -left-4 absolute text-primary text-sm">
                ★
              </div>

              <p className="font-light">
                <span className="font-medium text-primary">Sustainability</span>{" "}
                &gt; Growth
              </p>
              <p className="font-light">
                <span className="font-medium text-primary">Ethics</span> &gt;
                Hype
              </p>
              <p className="font-light">
                <span className="font-medium text-primary">Time</span> &gt;
                Metrics
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="inline-block relative mx-auto mt-12 text-secondary text-lg md:text-xl italic"
            >
              <span className="-top-2 -left-6 absolute text-secondary text-xl">
                ❝
              </span>
              The greatest threat to our planet is the belief that someone else
              will save it.
              <span className="-right-6 -bottom-2 absolute text-secondary text-xl">
                ❞
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
