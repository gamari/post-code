import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  color?: "white" | "black";
  size: "sm" | "md" | "lg";
}

export const Loader = ({ size="sm", color="black" }: Props) => {
  return (
    <div
      className={cn(
        "animate-ping bg-gray-600 rounded-full",
        size === "sm" && "h-4 w-4" ,
        size === "md" && "h-8 w-8",
        size === "lg" && "h-12 w-12",
        color === "white" ? "border-white" : "border-black"
      )}
    ></div>
  );
};
