"use client";

import { BackgroundBeams } from "@components/ui/background-beams";
import { TypewriterEffectSmooth } from "../ui/typewriter-effects";

import { Input, input } from "@nextui-org/react";

const GetStarted = () => {
  const words = [
    {
      text: "Get",
    },
    {
      text: "started",
    },
    {
      text: "with",
    },
    {
      text: "CodeSpector.",
      className: "text-light-purple",
    },
  ];

  return (
    <div className="flex flex-col max-w-5xl">
      <TypewriterEffectSmooth words={words} className="text-left"/>
      <div>

      </div>
      {/* INFO: turn on when in production */}
      <BackgroundBeams />
    </div>
  );
};

export default GetStarted;
