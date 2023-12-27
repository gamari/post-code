import { cn } from "@/src/libs/utils";
import React, { FunctionComponent } from "react";

interface Props {
  text: any;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isBold?: boolean;
}

export const Typo: FunctionComponent<Props> = ({
  text,
  className = "",
  size = "md",
  isBold = false,
}) => {
  return (
    <span
      className={cn(
        className,
        isBold && "font-bold",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-md",
        size === "lg" && "text-xl",
        size === "xl" && "text-3xl"
      )}
    >
      {text}
    </span>
  );
};
