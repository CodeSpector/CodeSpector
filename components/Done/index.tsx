"use client";

import { Meteors } from "../ui/meteors";

const DoneComponect = () => {
  return (
    <div className="h-screen w-screen flex flex-col content-center justify-center items-center align-middle bg-get-started-v md:bg-get-started-h bg-no-repeat bg-cover">
      <Meteors />
      <h1 className="text-3xl">Thank you for submitting your information!</h1>
      <p className="text-lg">We will be in touch with you shortly.</p>
    </div>
  );
}

export default DoneComponect;