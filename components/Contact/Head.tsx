"use client";

import { motion } from "framer-motion";

const ContactHead = () => {
  return (
    <div>
      <div className="bg-about h-[40vh] p-5">
        <motion.div
          className="h-full w-full flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold">Contact Page</h1>
        </motion.div>
      </div>
      <div className="cnt p-5 flex flex-col m-5 md:mr-[30%] md:ml-[30%]">
        <form
          action="https://formsubmit.co/codespector.buildedge@gmail.com"
          method="POST"
          className="flex flex-col justify-center items-center gap-2 py-5 max-w-xs mx-auto"
        >
          {" "}
          <label htmlFor="name" className="text-left justify-start">Name</label>
          <input type="text" name="name" aria-label="Name" required={true} />{" "}
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required={true} />{" "}
          <button type="submit">Send</button>{" "}
        </form>
      </div>
    </div>
  );
};

export default ContactHead;
