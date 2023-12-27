import React from "react";

import { Section } from "@/src/components/atoms/containers/section";
import { cn } from "@/src/libs/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TopSection = ({ className, children }: Props) => {
  return (
    <Section className={cn("px-10 lg:px-0 py-16", className)}>
      <div className="max-w-5xl w-full mx-auto">{children}</div>
    </Section>
  );
};
