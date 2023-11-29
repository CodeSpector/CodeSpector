"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AboutUS = () => {
  return (
    <div className="-translate-y-10">
      <div className="cnt-container pb-2 w-screen bg-[#030b0f] xl:pl-[5%] md:pr-[25%]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mb-7"
        >
          <div className="cnt p-5 flex flex-col text-right mb-32  ml-5 md:ml-[20%] lg:ml-[30%]">
            <span>
              <h1 className="text-3xl font-bold">Why</h1>
            </span>
            <p className="pl-0">
              A well-designed website and active social media presence can help
              businesses be found by potential customers and build relationships
              with them. This can lead to repeat business and referrals.
              Additionally, businesses can use their online presence to promote
              their products and services, and even sell them directly online.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mb-7"
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
          className="max-w-7xl mb-7"
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
          className="max-w-7xl mb-7 flex justify-center items-center"
        >
          <div className="cnt p-5 flex flex-col text-center mb-32 ml-5 md:ml-[40%] md:mr-[10%] lg:ml-[50%] lg:mr-[20%]">
            <span>
              <h1 className="text-3xl text-center font-bold">Get Started</h1>
            </span>
            <Link href="/services" className="rounded-xl bg-[#06161f] p-4 px-10 m-5">Get Started</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUS;
