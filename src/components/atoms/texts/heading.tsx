import { cn } from "@/src/libs/utils";
import React, { memo } from "react";

interface Props {
  type?: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
  children: React.ReactNode;
}

export const Heading = memo(
  ({ type = "h3", className = "", children }: Props) => {
    if (type === "h1")
      return (
        <h1 className={cn("text-4xl font-bold text-gray-700", className)}>
          {children}
        </h1>
      );
    if (type === "h2")
      return (
        <h2 className={cn("text-3xl font-bold text-gray-700", className)}>
          {children}
        </h2>
      );
    if (type === "h3")
      return (
        <h3 className={cn("text-xl font-bold text-gray-700", className)}>
          {children}
        </h3>
      );
    if (type === "h4")
      return (
        <h4 className={cn("text-base font-semibold text-gray-700", className)}>
          {children}
        </h4>
      );
    if (type === "h5")
      return <h5 className={cn("text-sm", className)}>{children}</h5>;

    return (
      <h3 className={cn("text-xl font-bold text-gray-700", className)}>
        {children}
      </h3>
    );
  }
);
