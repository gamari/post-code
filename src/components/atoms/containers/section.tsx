import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: Props) => {
  return (
    <section className={cn("max-w-7xl mx-auto w-full px-6 xl:px-0", className)}>
      {children}
    </section>
  );
};
