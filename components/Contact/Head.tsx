"use client";

import { motion } from "framer-motion";
import { Button, Input } from "@nextui-org/react";

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
      <div className="cnt p-5 flex flex-col md:flex-row m-5 justify-center content-center md:mr-[30%] md:ml-[30%]">
        <form action="https://formsubmit.co/codespector.buildedge@gmail.com" method="POST" className="flex flex-col">
          {" "}
          {/* <label htmlFor="name">Name & Message</label>{" "} */}
          {/* <input type="text" name="name" required={true} className="my-5 mt-0 rounded-md" />{" "} */}
          <Input type="email" label="Email" labelPlacement="outside" isRequired />
          <Input type="text" label="Name" labelPlacement="outside" isRequired />
          {/* <label htmlFor="email">email</label>{" "} */}
          {/* <input type="email" name="email" required={true} className="my-5 mt-0 rounded-md" />{" "} */}
          {/* <button type="submit">Send</button>{" "} */}
          <Button type="submit" color="success" className="mt-5">Send</Button>
        </form>
        <div className="mx-5">
          <h1>Or</h1>
          <p>Phone: +91-9826011274</p>
        </div>

      </div>
    </div>
  );
};

export default ContactHead;