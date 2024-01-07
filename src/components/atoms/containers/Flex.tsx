import React from "react";
import { cn } from "@/src/libs/utils";
import { ContainerProps } from "@/src/types/components";

interface Props extends ContainerProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: number;
  alignItems?: "center" | "start" | "end" | "stretch";
  justifyContent?: "center" | "start" | "end" | "between";
}

export const Flex = ({
  children,
  className,
  direction = "row",
  gap = 0,
  alignItems = "start",
  justifyContent = "start",
}: Props) => {
  return (
    <div
      className={cn(
        "flex",
        direction == "column" && "flex-col",
        direction == "row" && "flex-row",
        direction == "row-reverse" && "flex-row-reverse",
        direction == "column-reverse" && "flex-col-reverse",
        alignItems == "center" && "items-center",
        alignItems == "start" && "items-start",
        alignItems == "end" && "items-end",
        alignItems == "stretch" && "items-stretch",
        justifyContent == "center" && "justify-center",
        justifyContent == "start" && "justify-start",
        justifyContent == "end" && "justify-end",
        justifyContent == "between" && "justify-between",
        className
      )}
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
};
