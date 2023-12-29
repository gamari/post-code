import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ className = "", children }: Props) => {
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
};
