import React from "react";

import { Section } from "@/src/components/atoms/containers/section";
import { cn } from "@/src/libs/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TopSection = ({ className, children }: Props) => {
  return (
    <Section className={cn("py-12", className)}>
      <div className="max-w-5xl w-full mx-auto">{children}</div>
    </Section>
  );
};
