import { cn } from "@/src/libs/utils";
import { ContainerProps } from "@/src/types/components";
import React from "react";

interface Props extends ContainerProps {}

export const Container = ({ children, className }: Props) => {
  return <div className={cn("max-w-7xl mx-auto px-10 lg:px-0 pt-10", className)}>{children}</div>;
};
