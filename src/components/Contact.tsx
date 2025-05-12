"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "./ui/separator";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-slate-800 md:text-4xl">
            Contact Us
          </h2>
          <div className="mb-6 h-1 w-20 bg-amber-700"></div>
          <p className="max-w-3xl text-slate-600">
            We're here to help with your legal needs. Contact us today to
            schedule a consultation with one of our expert attorneys.
          </p>
        </motion.div>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-slate-800">
                Office Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-amber-700" />
                  <div>
                    <h4 className="font-medium text-slate-800">Main Office</h4>
                    <p className="text-slate-600">
                      Jl Wonogiri Wuryantoro KM 07, Puri Joglo, Kamulyan
                      Sendang,
                      <br />
                      Kecamatan Wonogiri
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-amber-700" />
                  <div>
                    <h4 className="font-medium text-slate-800">Phone</h4>
                    <p className="text-slate-600">(+62) 8122625521</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-amber-700" />
                  <div>
                    <h4 className="font-medium text-slate-800">Email</h4>
                    <p className="text-slate-600">-</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="mb-2 font-medium text-slate-800">
                    Office Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-slate-600">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
