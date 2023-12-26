import { getIconSizeClassName } from "@/src/libs/components";
import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";
import React from "react";

import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

interface Props extends IconProps {}

export const HeartIcon = ({ size = "md", className }: Props) => {
  return (
    <HiOutlineHeart className={cn(getIconSizeClassName(size), className)} />
  );
};
