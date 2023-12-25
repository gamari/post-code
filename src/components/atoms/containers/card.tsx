import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: Props) => {
  return (
    <div className={cn("bg-white p-4 border rounded-lg", className)}>{children}</div>
  );
};
