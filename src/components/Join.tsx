"use client";

import React, { useState } from "react";
import { motion } from "@/components/Motion";

const Join: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");

    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-[#172625] py-24 w-full text-[#F2DCB3]">
      <div className="mx-auto px-4 md:px-8 max-w-4xl container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 font-['Anton'] text-4xl md:text-5xl">
            JOIN THE SIGNAL
          </h2>

          <div className="bg-[#2C7373]/20 mb-12 p-8 md:p-12 border-[#2C7373] border-l-4">
            <p className="mb-6 font-['Inter'] text-xl md:text-2xl leading-relaxed">
              This is not a startup. It&#39;s a stand.
            </p>
            <p className="font-['Inter'] text-lg md:text-xl leading-relaxed">
              Want to write, build, or support the movement?
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-md transition-all duration-300"
          >
            <div className="flex md:flex-row flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow bg-transparent px-4 py-3 border-[#BF9D5E] border-2 focus:border-[#F2DCB3] focus:outline-none font-['Inter'] text-[#F2DCB3] placeholder-[#BF9D5E]/60"
              />

              <motion.button
                type="submit"
                className="bg-[#BF9D5E] hover:bg-[#F2DCB3] px-8 py-3 font-['Anton'] text-[#172625] tracking-wide transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                JOIN
              </motion.button>
            </div>

            {submitted && (
              <motion.div
                className="mt-4 text-[#F2DCB3]"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                Thank you for joining. We&#39;ll be in touch.
              </motion.div>
            )}
          </form>

          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <a
              href="#"
              className="font-['Inter'] text-[#BF9D5E] hover:text-[#F2DCB3] transition-colors"
            >
              Read Our Principles
            </a>
            <a
              href="#"
              className="font-['Inter'] text-[#BF9D5E] hover:text-[#F2DCB3] transition-colors"
            >
              Meet The Community
            </a>
            <a
              href="#"
              className="font-['Inter'] text-[#BF9D5E] hover:text-[#F2DCB3] transition-colors"
            >
              Upcoming Events
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;
