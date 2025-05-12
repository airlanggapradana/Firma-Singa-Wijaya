import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Law firm office"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="z-10 container mx-auto px-4 text-center">
        <h1 className="mb-6 font-serif text-4xl leading-tight font-bold text-white md:text-6xl">
          Committed to Justice, <br />
          Dedicated to Results
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          With over 25 years of experience, our team of expert attorneys is
          committed to providing exceptional legal representation.
        </p>
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <Button
            size="lg"
            className="bg-amber-700 text-white hover:bg-amber-800"
          >
            Schedule Consultation
          </Button>
          <Button size="lg" variant="outline">
            Learn More <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
