import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Title = ({ label, size = "md", className = "" }: Props) => {
  return (
    <span className={cn("text-xl font-bold text-gray-700", className)}>
      {label}
    </span>
  );
};
