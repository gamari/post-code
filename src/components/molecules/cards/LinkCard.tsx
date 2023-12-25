"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
  url: string;
}

export const LinkCard = ({ children, className, url }: Props) => {
  const router = useRouter();

  return (
    <div
      className={cn("p-4 bg-white border rounded-lg cursor-pointer hover:opacity-80", className)}
      onClick={() => {
        router.push(url);
      }}
    >
      {children}
    </div>
  );
};
