"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutUS = () => {
  return (
    <div className="-translate-y-10">
      <div className="cnt-container pb-2 w-screen xl:pl-[5%] md:pr-[25%]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl flex align-middle h-[45vh] mb-7 md:mt-[25vh]"
        >
          <div className="cnt p-5 flex flex-col text-center mb-32  ml-5 md:ml-[20%] lg:ml-[30%]">
            <span>
              <h1 className="text-3xl font-bold">CodeSpector?</h1>
            </span>
            <br />
            <p className="pl-0">
              Your one-stop solution for cutting-edge website services. We specialize in crafting stunning, responsive websites that captivate your audience and elevate your online presence. From sleek designs to robust functionalities, we offer a comprehensive suite of services, including web development, hosting, and maintenance. Let us transform your vision into a compelling digital reality. Experience excellence in every click            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl flex align-middle h-[40vh] mb-7"
        >
          <div className="cnt p-5 flex flex-col text-left mb-32 mr-5 md:ml-[20%] lg:ml-[30%]">
            <span>
              <h1 className="text-3xl font-bold">Who</h1>
            </span>
            <p className="pr-0">
              We are a team of experienced web developers and designers who can
              help you create a website that is both visually appealing and easy
              to use. We will also help you optimize your website for search
              engines so that potential customers can easily find you online.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl flex align-middle h-[40vh] mb-7"
        >
          <div className="cnt p-5 flex flex-col text-right mb-32 ml-5 md:ml-[20%] lg:ml-[30%]">
            <span>
              <h1 className="text-3xl font-bold">What</h1>
            </span>
            <p className="pr-0">
              We are a team of experienced web developers and designers who can
              help you create a website that is both visually appealing and easy
              to use. We will also help you optimize your website for search
              engines so that potential customers can easily find you online.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl flex align-middle h-[40vh] mb-7  justify-center items-center"
        >
          <div className="cnt p-5 flex flex-col text-center mb-32 ml-5 md:ml-[40%] md:mr-[10%] lg:ml-[50%] lg:mr-[20%]">
            <span>
              <h1 className="text-3xl text-center font-bold">Get Started</h1>
            </span>
            <br />
            <Button color="primary" as={Link} href="/services">
              Lets get on board
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUS;
