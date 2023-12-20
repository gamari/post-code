import { cn } from "@/src/libs/utils";
import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  className?: string;
}

export const Typo: FunctionComponent<Props> = ({ text, className = "" }) => {
  return <span className={cn("text-gray-700", className)}>{text}</span>;
};
