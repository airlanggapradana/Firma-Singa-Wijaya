"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import foto2 from "../../public/IMG-20250512-WA0017.webp";

const About = () => {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-slate-800 md:text-4xl">
            About Our Firm
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-amber-700"></div>
          <p className="mx-auto max-w-3xl text-slate-600">
            Founded in 1995, Firma Singa Wijaya has been providing exceptional
            legal services to clients across the country. Our commitment to
            excellence and client satisfaction has made us one of the most
            respected law firms.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex h-[35rem] w-full items-center justify-center overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={foto2}
              alt="Law firm team"
              priority
              className="rounded-lg object-contain object-center shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-slate-800">
              Our Mission
            </h3>
            <p className="text-slate-600">
              Our mission is to provide exceptional legal representation while
              maintaining the highest standards of ethics and professionalism.
              We are committed to achieving the best possible outcomes for our
              clients through strategic advocacy and personalized service.
            </p>

            <h3 className="pt-4 font-serif text-2xl font-bold text-slate-800">
              Our Values
            </h3>
            <ul className="space-y-3">
              {[
                "Excellence in legal representation",
                "Integrity in all professional dealings",
                "Compassion for clients' situations",
                "Commitment to justice and fairness",
              ].map((value, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <ChevronRight className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-amber-700" />
                  <span className="text-slate-600">{value}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              variant="default"
              size={"lg"}
              className="mt-4 bg-amber-700 font-semibold hover:bg-amber-800"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
