import { cn } from "@/src/libs/utils";
import { BaseProps, ContainerProps } from "@/src/types/components";
import React from "react";

interface Props extends ContainerProps {
  direction?: "row" | "column";
  gap?: number;
  alignItems?: "center" | "start" | "end";
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
        alignItems == "center" && "items-center",
        alignItems == "start" && "items-start",
        alignItems == "end" && "items-end",
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
