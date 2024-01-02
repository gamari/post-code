import { Flex } from "@/src/components/atoms/containers/Flex";
import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  gap?: number;
}

export const AboutSentence = ({ children, className, gap = 12 }: Props) => {
  return (
    <Flex
      alignItems="start"
      justifyContent="start"
      direction="column"
      gap={gap}
      className={cn("max-w-2xl text-xl text-gray-600", className)}
    >
      {children}
    </Flex>
  );
};
