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
      className={`bg-[#F2DCB3] p-6 md:p-8 ${comingSoon ? "opacity-70" : ""}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 text-[#172625] text-3xl">{icon}</div>
      <h3 className="mb-3 font-['Anton'] text-[#172625] text-xl md:text-2xl">
        {title}
      </h3>
      <p className="font-['Inter'] text-[#172625]/80 text-sm md:text-base">
        {description}
      </p>
      {comingSoon && (
        <div className="inline-block bg-[#868C54]/20 mt-4 px-3 py-1 font-['Inter'] font-medium text-[#868C54] text-xs">
          COMING SOON
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
    <section className="bg-[#868C54] py-20 w-full">
      <div className="mx-auto px-4 md:px-8 container">
        <motion.h2
          className="mb-16 font-['Anton'] text-[#F2DCB3] text-4xl md:text-5xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          THE TOOLS
        </motion.h2>

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
          className="mx-auto mt-16 max-w-2xl font-['Inter'] text-[#F2DCB3]/90 text-center"
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
