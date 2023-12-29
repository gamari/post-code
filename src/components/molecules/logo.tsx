import React from "react";

import { HiCodeBracket } from "react-icons/hi2";
import { cn } from "@/src/libs/utils";

interface Props {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const Logo = ({ size = "md", className }: Props) => {
  return (
    <HiCodeBracket
      className={cn(
        "inline-block",
        size == "sm" && "h-6 w-6",
        size == "md" && "h-8 w-8",
        size == "lg" && "h-12 w-12",
        size == "xl" && "h-16 w-16",
        className
      )}
    />
  );
};
