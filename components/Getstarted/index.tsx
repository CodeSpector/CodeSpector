"use client";

import { BackgroundBeams } from "@components/ui/background-beams";
import { TypewriterEffectSmooth } from "../ui/typewriter-effects";

import { Input, input } from "@nextui-org/react";

const GetStarted = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("A new webiste entry!");
  }

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
      <div>
        <TypewriterEffectSmooth words={words} className="text-left"/>
      </div>
      <form action={handleSubmit}>
      <Input
          name="name"
          type="name"
          required={true}
          placeholder="Enter your name"
          radius="sm"
          className="w-80 py-5"
        />
        <Input
          name="email"
          type="email"
          required={true}
          placeholder="Enter your email"
          radius="sm"
          className="w-80 py-5"
        />
        <button type="submit" className="bg-light-purple rounded-md text-white py-2 px-4 mt-4">
          Get Started
        </button>
      </form>

    </div>
  );
};

export default GetStarted;
