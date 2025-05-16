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
      className="flex flex-col justify-center items-center bg-[#F2DCB3] px-4 py-24 w-full min-h-screen"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mb-12 font-['Anton'] text-[#172625] text-4xl md:text-5xl"
            variants={itemVariants}
          >
            MANIFESTO
          </motion.h2>

          <div className="space-y-8 font-['Spectral'] text-[#172625] text-xl md:text-2xl lg:text-3xl leading-relaxed">
            <motion.p variants={itemVariants} className="font-medium">
              Tech should serve life—not accelerate it.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col space-y-6 my-12"
            >
              <p className="font-light">
                <span className="font-medium text-[#2C7373]">
                  Sustainability
                </span>{" "}
                &gt; Growth
              </p>
              <p className="font-light">
                <span className="font-medium text-[#2C7373]">Ethics</span> &gt;
                Hype
              </p>
              <p className="font-light">
                <span className="font-medium text-[#2C7373]">Time</span> &gt;
                Metrics
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-12 text-[#868C54] text-lg md:text-xl italic"
            >
              "The greatest threat to our planet is the belief that someone else
              will save it."
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
