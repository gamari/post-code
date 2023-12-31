import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const SearchSection = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-6xl mx-auto py-10", className)}>{children}</div>
  );
};
