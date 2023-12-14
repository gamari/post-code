import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  color?: "white" | "black";
}

export const Loader = ({ color="black" }: Props) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full h-6 w-6 border-b-2",
        color === "white" ? "border-white" : "border-black"
      )}
    ></div>
  );
};
