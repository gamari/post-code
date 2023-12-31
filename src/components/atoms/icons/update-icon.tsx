import { getIconSizeClassName } from "@/src/libs/components";
import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";
import React from "react";
import { MdUpdate } from "react-icons/md";

interface Props extends IconProps {}

export const UpdateIcon = ({ size = "md", className, onClick }: Props) => {
  return (
    <MdUpdate
      className={cn(getIconSizeClassName(size), className)}
      onClick={onClick}
    />
  );
};
