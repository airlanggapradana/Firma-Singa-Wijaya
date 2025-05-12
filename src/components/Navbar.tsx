"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, Scale } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-fuchsia-900 py-4 shadow-md" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-amber-700" />
          <span className="font-serif text-2xl font-bold text-white">
            JUSTICE LAW
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {["Home", "About", "Practice Areas", "Attorneys", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-medium text-white transition-colors hover:text-amber-700"
              >
                {item}
              </Link>
            ),
          )}
          <Button variant="default" className="bg-amber-700 hover:bg-amber-800">
            Free Consultation
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col space-y-4">
              {["Home", "About", "Practice Areas", "Attorneys", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="py-2 text-lg font-medium text-slate-700 transition-colors hover:text-amber-700"
                  >
                    {item}
                  </Link>
                ),
              )}
              <Button
                variant="default"
                className="mt-4 bg-amber-700 hover:bg-amber-800"
              >
                Free Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
