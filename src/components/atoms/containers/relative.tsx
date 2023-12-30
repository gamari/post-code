import React from "react";

import { ContainerProps } from "@/src/types/components";
import { cn } from "@/src/libs/utils";

interface Props extends ContainerProps {}

export const Relative = ({ children, className }: Props) => {
  return <div className={cn("relative", className)}>{children}</div>;
};
