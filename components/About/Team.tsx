"use client";

import { motion } from "framer-motion";

const AboutTeam = () => {
  return (
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
  );
};

export default AboutTeam;
