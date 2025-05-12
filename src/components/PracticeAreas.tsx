"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ChevronRight,
  FileText,
  Home,
  Scale,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-slate-800 md:text-4xl">
            Our Practice Areas
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-amber-700"></div>
          <p className="mx-auto max-w-3xl text-slate-600">
            We offer comprehensive legal services across a wide range of
            practice areas, providing expert guidance and representation
            tailored to your specific needs.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Corporate Law",
              icon: <Briefcase className="h-10 w-10 text-amber-700" />,
              description:
                "Expert guidance on business formation, contracts, mergers and acquisitions, and corporate governance.",
            },
            {
              title: "Real Estate Law",
              icon: <Home className="h-10 w-10 text-amber-700" />,
              description:
                "Comprehensive legal services for property transactions, leases, zoning issues, and property disputes.",
            },
            {
              title: "Family Law",
              icon: <Users className="h-10 w-10 text-amber-700" />,
              description:
                "Compassionate representation in divorce, child custody, adoption, and other family matters.",
            },
            {
              title: "Civil Litigation",
              icon: <Scale className="h-10 w-10 text-amber-700" />,
              description:
                "Strategic advocacy in a wide range of civil disputes, from personal injury to contract disputes.",
            },
            {
              title: "Estate Planning",
              icon: <FileText className="h-10 w-10 text-amber-700" />,
              description:
                "Thoughtful planning for the future through wills, trusts, powers of attorney, and estate administration.",
            },
            {
              title: "Criminal Defense",
              icon: <Scale className="h-10 w-10 text-amber-700" />,
              description:
                "Vigorous defense against criminal charges, protecting your rights and freedom.",
            },
          ].map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4">{area.icon}</div>
                  <CardTitle className="font-serif text-xl">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{area.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="p-0 text-amber-700 hover:bg-amber-50 hover:text-amber-800"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
