"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-center content-center items-center -translate-y-10"
    >
      <div className="bg-hero w-[99vw]">
        <div className="h-[85vh]   p-2 translate-y-[-3rem] flex flex-col justify-center text-center md:ml-[20%] mr-[20%]">
          <h1 className="text-6xl md:text-7xl">CodeSpector</h1>
          <p className="text-2xl">
            Helping Bussinesses & Individuals Established On The Internet
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
