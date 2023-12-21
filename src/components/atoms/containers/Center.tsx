import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Center = ({ children, className = "" }: Props) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {children}
    </div>
  );
};
