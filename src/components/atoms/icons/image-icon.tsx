import { getIconSizeClassName } from "@/src/libs/components";
import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";
import React from "react";
import { CiImageOn } from "react-icons/ci";

interface Props extends IconProps {}

export const ImageIcon = ({ size = "md", className, onClick }: Props) => {
  return (
    <CiImageOn
      className={cn(getIconSizeClassName(size), className)}
      onClick={onClick}
    />
  );
};
