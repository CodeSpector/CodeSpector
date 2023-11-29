"use client";

import { motion } from "framer-motion";

const AboutHead = () => {
  return (
    <div>
      <div className="h-[40vh] w-screen bg-about">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="flex flex-col justify-center items-center h-full w-full"
        >
          <h1 className="text-6xl text-white font-bold">About Us</h1>
          <p className="text-slate-400 text-lg">{`"A startup is everything what the people behind them are"`}</p>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="p-5" 
      >
        <div className="cnt p-10 flex flex-col justify-center items-center">
          <p className="text-slate-100 text-lg">
            {`We are a part of BuildEdge, an organization initiated by 3 high-school students on 26th October 2023. Even though we are still minors, the impact we aspire to make on local businesses' sales is significant. We hail from the City of Lakes, Bhopal in India. Nevertheless, we are up     for challenges even if our client is a thousand miles away.`}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHead;
