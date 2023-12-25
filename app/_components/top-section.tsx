import { Center } from "@/src/components/atoms/containers/Center";
import { Section } from "@/src/components/atoms/containers/section";
import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TopSection = ({ className, children }: Props) => {
  return (
    <Section className={cn("py-12", className)}>
      <Center>{children}</Center>
    </Section>
  );
};
