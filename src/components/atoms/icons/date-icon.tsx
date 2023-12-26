import { getIconSizeClassName } from "@/src/libs/components";
import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";
import React from "react";

import { CiCalendar } from "react-icons/ci";

interface Props extends IconProps {}

export const DateIcon = ({ size="md", className }: Props) => {
  return (
    <CiCalendar
      className={cn(
        getIconSizeClassName(size),
        className
      )}
    />
  );
};
