import { getIconSizeClassName } from "@/src/libs/components";
import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";

interface Props extends IconProps {}

import React from "react";
import { VscAccount } from "react-icons/vsc";

export const AccountIcon = ({ className, size = "md" }: Props) => {
  return <VscAccount className={cn(getIconSizeClassName(size), className)} />;
};
