/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Meteors } from "../ui/meteors";

const Hero = () => {
  return (
    <> {/* Open JSX fragment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center content-center items-center align-middle -translate-y-10"
      >
        <div className="bg-hero-wave-v md:bg-hero-wave-h bg-no-repeat bg-cover h-screen w-[99vw]">
          <div className="flex  flex-row"><Meteors /><Meteors className="sm:hidden"/></div>
          <div className="h-full w-full p-2 -translate-y-12 flex flex-col justify-center align-center items-center">
            <div className="text-center m-5 flex flex-col md:flex-row">
              {/* <h1 className="text-4xl md:text-7xl">CodeSpector</h1> */}
              <div className=" p-5 m-5 rounded-xl flex flex-col">
                <span className="text-4xl md:text-8xl">Level up your <span className="font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">online presence</span></span>
                <p className="text-2xl md:text-5xl mt-5">With <span className="font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Fast and Beautiful{" "}</span> websites <span>Tailored{" "}</span>to <span className="font-bold">you</span></p>
              </div>
            </div>
            <div>
              <Button
                as={Link}
                href="/getstarted"
                className="m-5 text-white"
                color="primary"
                variant="bordered"
              >
                Get Started
              </Button>
            </div>
            <span className="animate-sc-animation flex justify-end align-bottom">{"V"}</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
