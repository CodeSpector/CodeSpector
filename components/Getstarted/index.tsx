"use client";

import { BackgroundBeams } from "@components/ui/background-beams";
import { TypewriterEffectSmooth } from "../ui/typewriter-effects";

import { Input, Textarea } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

import { motion } from "framer-motion";
import { ServicesOffered } from "@/utils/SiteConfig";
import { useState } from "react";
import { UserData } from "@/utils/dataformats";
import { Meteors } from "../ui/meteors";

const GetStarted = () => {
  const [data, setData] = useState<UserData>({
    name: "string",
    mail: "string",
    phone: "string",
    contactm: "string | number",
    web: "string | number",
    use: "string",
    color: "string",
    addinfo: "string",
  });

  const handleSubmit = () => {
    console.log("A new webiste entry!");
    console.log(data);
  }

  const words = [
    {
      text: "Get",
    },
    {
      text: "started",
    },
  ];
  const contactMethod = [
    { key: 1, lable: "Phone/Whatsapp" },
    { key: 2, lable: "Email" },
  ]

  return (
    <div className="w-screen h-screen bg-get-started-v md:bg-get-started-h flex flex-col contents-center items-center bg-no-repeat bg-cover">
      <Meteors />
      <div className="mt-14">
        <TypewriterEffectSmooth words={words} />
      </div>

      <div className="flex flex-col md:flex-row">
        <div>
          <h1 className="text-xl">Basic Info</h1>
          <Input
            aria-label="lable1"
            name="name"
            type="name"
            color="primary"
            required={true}
            placeholder="Enter your name"
            radius="sm"
            className="w-80 py-5 bg-transparent text-white"
            onChange={(e) => setData({ ...data, name: e.target.value })}

          />
          <Input
            aria-label="lable1"
            name="email"
            type="email"
            color="primary"
            required={true}
            placeholder="Enter your email"
            radius="sm"
            className="w-80 py-5 text-white"
            onChange={(e) => setData({ ...data, mail: e.target.value })}
          />
          <Input
            aria-label="lable1"
            name="phone"
            type="text"
            color="primary"
            required={true}
            placeholder="Enter your phone number"
            radius="sm"
            className="w-80 py-5 text-white"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <Select
            aria-label="lable1"
            color="primary"
            items={contactMethod}
            name="contactmethod"
            placeholder="Method of contact"
            radius="sm"
            className="w-80 py-5 text-white"
            onChange={(e) => setData({ ...data, contactm: e.target.value })}
          >
            {(contactMethod) => <SelectItem key={contactMethod.key}>{contactMethod.lable}</SelectItem>}
          </Select>
        </div>
        <div className="md:pl-5">
          <h1 className="text-xl">Site Setup</h1>
          <Select
            aria-label="lable1"
            items={ServicesOffered}
            name="sitetype"
            color="primary"
            placeholder="Select a type of website"
            radius="sm"
            className="w-80 py-5 text-white"
            onChange={(e) => setData({ ...data, web: e.target.value })}
          >
            {(ServicesOffered) => <SelectItem key={ServicesOffered.key}>{ServicesOffered.lable}</SelectItem>}
          </Select>
          <Input
            aria-label="lable1"
            name="use"
            type="text"
            color="primary"
            placeholder="Use of website"
            className="py-5 text-white"
            radius="sm"
            onChange={(e) => setData({ ...data, use: e.target.value })}
          />
          <Input
            aria-label="lable1"
            name="color"
            type="text"
            color="primary"
            placeholder="Base Color scheme"
            className="py-5 text-white"
            radius="sm"
            onChange={(e) => setData({ ...data, color: e.target.value })}
          />
          <Textarea
            aria-label="lable1"
            color="primary"
            placeholder="Additional information"
            radius="sm"
            className="py-5 text-white"
            onChange={(e) => setData({ ...data, addinfo: e.target.value })}
          />
        </div>
      </div>
      <button onClick={handleSubmit} className="bg-light-purple rounded-md text-white py-2 px-4 mt-4">
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
