import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Description = ({ children, className, size="md" }: Props) => {
  return (
    <p
      className={cn(
        "text-gray-600 whitespace-pre-wrap break-words",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-md",
        size === "lg" && "text-lg",
        size === "xl" && "text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};
