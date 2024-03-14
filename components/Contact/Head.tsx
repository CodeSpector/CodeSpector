"use client";

import { Button, Input } from "@nextui-org/react";

const ContactHead = () => {
  return (
    <div className="bg-get-started-v md:bg-get-started-h bg-no-repeat bg-cover h-screen w-screen justify-center content-center align-middle">
      <div className="flex flex-col align-middle">
          <div
            className="flex flex-col justify-center items-center"
          >
            <h1 className="text-6xl font-bold">Contact Us Now</h1>
          </div>
        
        <div className="p-5 flex flex-col md:flex-row m-5 justify-center content-center md:mr-[30%] md:ml-[30%]">
          <form action="https://formsubmit.co/codespector.buildedge@gmail.com" method="POST" className="flex flex-col">
            {" "}
            <Input type="email" label="Email" labelPlacement="outside" color="primary" radius="sm" isRequired />
            <Input type="text" label="Name" labelPlacement="outside" color="primary" radius="sm" isRequired />
            <Button type="submit" color="primary" className="mt-5 text-white">Send</Button>
          </form>
          <div className="mx-5">
            <h1>Or</h1>
            <p>Phone: +91-9826011274</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactHead;