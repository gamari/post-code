import { getIconSizeClassName } from "@/src/libs/components";
import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";

interface Props extends IconProps {}

export const DownIcon = ({ size = "md", onClick, className }: Props) => {
  return (
    <FaArrowDown
      className={cn(getIconSizeClassName(size), className)}
      onClick={onClick}
    />
  );
};
