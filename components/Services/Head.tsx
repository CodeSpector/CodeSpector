"use client";

import { motion } from "framer-motion";

const ServicesHead = () => {
  return (
    <div>
      <div className="bg-about h-[40vh] p-5">
        <motion.div
          className="h-full w-full flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold">Our Services</h1>
        </motion.div>
      </div>
      <div className="m-5 mt-10 flex flex-col md:flex-row gap-6 md:gap-10">
        <motion.div
          className="cnt flex flex-col justify-center items-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mt-5">Static Sites</h1>
          <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quidem, voluptatum, quas voluptate voluptas quod
            voluptates quibusdam quia quae illo? Quisquam voluptatem, quidem,
            voluptatum, quas voluptate voluptas quod voluptates quibusdam quia
            quae illo?
          </p>
        </motion.div>
        <motion.div
          className="cnt flex flex-col justify-center items-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mt-5">E-commerce Sites</h1>
          <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quidem, voluptatum, quas voluptate voluptas quod
            voluptates quibusdam quia quae illo? Quisquam voluptatem, quidem,
            voluptatum, quas voluptate voluptas quod voluptates quibusdam quia
            quae illo?
          </p>
        </motion.div>
        <motion.div
          className="cnt flex flex-col justify-center items-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mt-5">Dynamic Sites</h1>
          <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quidem, voluptatum, quas voluptate voluptas quod
            voluptates quibusdam quia quae illo? Quisquam voluptatem, quidem,
            voluptatum, quas voluptate voluptas quod voluptates quibusdam quia
            quae illo?
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesHead;