import React from "react";

import { IoMdClose } from "react-icons/io";

import { IconProps } from "@/src/types/components";
import { cn } from "@/src/libs/utils";
import { getIconSizeClassName } from "@/src/libs/components";

interface Props extends IconProps {}

export const CloseIcon = ({ size="md", className, onClick }: Props) => {
  return <IoMdClose className={cn(getIconSizeClassName(size), className)} onClick={onClick} />;
};
