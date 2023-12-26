import React from "react";
import { FaXTwitter } from "react-icons/fa6";

import { IconProps } from "@/src/types/components";
import { cn } from "@/src/libs/utils";
import { getIconSizeClassName } from "@/src/libs/components";

interface Props extends IconProps {}

export const XIcon = ({ size = "md", className, onClick }: Props) => {
  return <FaXTwitter className={cn(getIconSizeClassName(size), className)} />;
};
