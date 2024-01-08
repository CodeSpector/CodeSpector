"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-center items-center -translate-y-10"
    >
      <div className="bg-hero w-[99vw]">
        <div className="h-screen  md:ml-[20%] md:mr-[20%] p-2 translate-y-[-3rem] flex flex-col justify-center text-center">
          <h1 className="text-6xl md:text-7xl">CodeSpector</h1>
          <p className="text-2xl">
            Helping Businesses and Individuals Globally Build a Strong Online Presence
          </p>
          <span className="text-md text-slate-500 md:translate-y-[150%]">
            Scroll To Learn More
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
