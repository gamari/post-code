import { cn } from "@/src/libs/utils";
import React, { FunctionComponent } from "react";

interface Props {
  text: any;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Typo: FunctionComponent<Props> = ({
  text,
  className = "",
  size = "md",
}) => {
  return (
    <span
      className={cn(
        className,
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-md",
        size === "lg" && "text-lg",
        size === "xl" && "text-xl"
      )}
    >
      {text}
    </span>
  );
};
