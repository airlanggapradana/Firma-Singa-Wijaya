"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

const Back = () => {
  const router = useRouter();
  return (
    <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
      <ArrowLeft className="h-4 w-4" color="white" />
    </Button>
  );
};

export default Back;
