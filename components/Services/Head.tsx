"use client";
import '../../app/globals.css'

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
          <h1 className="text-3xl font-bold mt-5">Genral Sites</h1>
          <p className="text-xl mt-5">
            General website are of two types: static and dynamic.
            Static websites deliver straightforward content without user interaction, ideal for simple information display. Dynamic websites, on the other hand, adapt and respond to user input, offering interactive features and personalized content. Choose the right approach for your online presence – simplicity or engagement, static or dynamic, we've got you covered.
          </p>
        </motion.div>
        <motion.div
          className="cnt flex flex-col justify-center items-center p-5 m-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mt-5">E-commerce Sites</h1>
          <p className="text-xl mt-5">
            Ecommerce stores empower businesses to sell products or services online, providing a seamless shopping experience. Static ecommerce sites offer straightforward product displays, while dynamic ones enhance user engagement with features like personalized recommendations and interactive shopping carts. Elevate your online retail game with our tailored ecommerce solutions – your gateway to digital success.
          </p>
        </motion.div>
        {/* <motion.div */}
        {/*   className="cnt flex flex-col justify-center items-center p-5" */}
        {/*   initial={{ opacity: 0 }} */}
        {/*   animate={{ opacity: 1 }} */}
        {/*   transition={{ duration: 1 }} */}
        {/* > */}
        {/*   <h1 className="text-3xl font-bold mt-5">Dynamic Sites</h1> */}
        {/*   <p className="text-xl mt-5"> */}
        {/*     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam */}
        {/*     voluptatem, quidem, voluptatum, quas voluptate voluptas quod */}
        {/*     voluptates quibusdam quia quae illo? Quisquam voluptatem, quidem, */}
        {/*     voluptatum, quas voluptate voluptas quod voluptates quibusdam quia */}
        {/*     quae illo? */}
        {/*   </p> */}
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default ServicesHead;