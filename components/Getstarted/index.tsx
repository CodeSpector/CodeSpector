"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter-effects";

import { CircularProgress, Input, Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

import { ServicesOffered } from "@/utils/SiteConfig";
import { useState } from "react";
import { UserData } from "@/utils/dataformats";
import { Meteors } from "../ui/meteors";
import { useRouter } from "next/navigation";

const GetStarted = () => {
  const router = useRouter();
  const [isRunning, setRunning] = useState(false);
  const [failiure, setFailure] = useState(false);
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

  async function handleSubmit() {
    try {
      setRunning(true);
      const res = await fetch("/api/getstarted",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
        });
      if (!res.ok) {
        setFailure(true);
        setRunning(false);
      } else {
        router.push("/done");
      }
    } catch (error) {
      setFailure(true);
      console.log(error);
    }
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
      <div className="flex flex-col md:flex-row">
        <button onClick={handleSubmit} className="bg-light-purple rounded-md text-white py-2 px-4 mt-4">
          Get Started
        </button>
        <CircularProgress aria-label="Loading..." isDisabled={!isRunning} disableAnimation={!isRunning} />
      </div>
      <h1 className="mt-14 font-bold text-2xl" hidden={!failiure}>An Error Occured, please try again later</h1>
    </div>
  );
};

export default GetStarted;
