import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center py-20">
      <h1 className="text-center text-4xl font-bold text-white">
        Welcome to Our Law Firm
      </h1>
      <p className="mt-4 text-center text-lg text-gray-300">
        We provide expert legal services to help you navigate your legal
        challenges.
      </p>
      <div className="flex w-full items-center justify-center">
        <Button className="mt-6" variant={"default"} size={"lg"}>
          Get a Schedule
        </Button>
      </div>
    </main>
  );
};

export default Hero;
