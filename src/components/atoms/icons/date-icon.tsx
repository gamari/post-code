import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";
import React from "react";

import { CiCalendar } from "react-icons/ci";

interface Props extends IconProps {}

export const DateIcon = ({ size="md", className }: Props) => {
  return (
    <CiCalendar
      className={cn(
        size == "sm" && "h-6 w-6",
        size == "md" && "h-8 w-8",
        size == "lg" && "h-12 w-12",
        size == "xl" && "h-16 w-16",
        className
      )}
    />
  );
};
