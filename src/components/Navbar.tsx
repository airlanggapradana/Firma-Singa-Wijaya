"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-white py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
        <div className="text-3xl font-bold">Logo</div>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-5">
            <NavigationMenuItem>
              <Link href="#" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-sm font-semibold`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-sm font-semibold`}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-sm font-semibold`}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
