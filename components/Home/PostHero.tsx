import { LampContainer } from "@components/ui/lamp";
import { BentoHome } from "@components/Home/HomeBento";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const PostHero = () => {
  return (
    <>
      {/* The Sparkle section */}
      <div>
        <LampContainer>
          <h1 className="text-4xl text-center">Give your place in the web</h1>
          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-4xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
              Boost
            </h1>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              <br />
              <br />
              <div className="text-center">
                <span className="text-3xl text-center">
                  Get rid of those{" "}
                  <span className="font-bold text-gray-600">old, dull</span>{" "}
                  corporate looking websites and get your{" "}
                  <span className="font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                    eye-catchy and mesmerizing
                  </span>{" "}
                  websites your customers will{" "}
                  <span className="font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                    love
                  </span>
                </span>
              </div>
            </div>
          </div>
        </LampContainer>
      </div>
      <div className="md:mb-10 flex flex-col justify-center items-center">
        <BentoHome />
        <div>
          <Button
            color="primary"
            size="lg"
            className="mt-8 text-white"
            as={Link}
            href="/getstarted"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default PostHero;
