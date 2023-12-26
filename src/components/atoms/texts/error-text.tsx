import { cn } from "@/src/libs/utils";
import { TextProps } from "@/src/types/components";
import React from "react";

interface Props extends TextProps {}

export const ErrorText = ({ text, className }: Props) => {
  if (!text) return null;
  return <span className={cn("text-red-500", className)}>{text}</span>;
};
