"use client";

import React from "react";
import { motion } from "@/components/Motion";

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  comingSoon?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  icon,
  comingSoon = false,
}) => {
  return (
    <motion.div
      className={`bg-[#F2DCB3] border-2 border-[#BF9D5E]/70 p-6 md:p-8 relative ${
        comingSoon ? "opacity-90" : ""
      }`}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Star accent in corner */}
      {!comingSoon && (
        <div className="-top-3 -right-3 absolute text-[#BF9D5E] text-xl">★</div>
      )}

      <div className="flex justify-center items-center mb-4 h-12 text-[#172625] text-3xl">
        {icon}
      </div>

      <h3 className="mb-3 font-['Anton'] text-[#172625] text-xl md:text-2xl text-center">
        {title}
      </h3>

      <p className="font-['Inter'] text-[#172625]/80 text-sm md:text-base text-center">
        {description}
      </p>

      {comingSoon && (
        <div className="flex justify-center mt-4">
          <div className="inline-block bg-[#868C54]/20 px-3 py-1 border border-[#868C54]/30 font-['Inter'] font-medium text-[#868C54] text-xs">
            COMING SOON
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Tools: React.FC = () => {
  const tools = [
    {
      title: "Time Unfolded",
      description:
        "Calendar software that prioritizes deep work and mindfulness over back-to-back meetings.",
      icon: "⏳",
      comingSoon: true,
    },
    {
      title: "The Friction Engine",
      description:
        "Adding intentional pauses to your digital interactions to prevent addictive scrolling patterns.",
      icon: "🔄",
      comingSoon: true,
    },
    {
      title: "Digital Sabbath Kit",
      description:
        "Tools and protocols to help teams and individuals implement tech-free time periods.",
      icon: "🌙",
      comingSoon: true,
    },
    {
      title: "Your Tool Here",
      description:
        "Have an idea for ethical, sustainable tech? Join our community of builders.",
      icon: "💡",
      comingSoon: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative bg-[#868C54] py-20 w-full">
      {/* Vintage texture overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url("/images/vintage-texture.png")',
          opacity: 0.1,
          mixBlendMode: "overlay",
        }}
      />

      {/* Corner stars decoration */}
      <div className="top-8 left-8 absolute text-[#F2DCB3] text-xl">★</div>
      <div className="top-8 right-8 absolute text-[#F2DCB3] text-xl">★</div>
      <div className="bottom-8 left-8 absolute text-[#F2DCB3] text-xl">★</div>
      <div className="right-8 bottom-8 absolute text-[#F2DCB3] text-xl">★</div>

      <div className="z-10 relative mx-auto px-4 md:px-8 container">
        <div className="mb-12 text-center">
          <motion.h2
            className="inline-block relative font-['Anton'] text-[#F2DCB3] text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            THE TOOLS
            <div className="right-0 -bottom-2 left-0 absolute bg-[#BF9D5E] h-1"></div>
          </motion.h2>
        </div>

        <motion.div
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tools.map((tool, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-16 p-6 border-[#F2DCB3]/30 border-2 max-w-2xl font-['Inter'] text-[#F2DCB3] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>
            We&#39;re building technology that respects human limitations and
            natural rhythms. No artificial urgency. No engagement hacking. Just
            tools that serve life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
