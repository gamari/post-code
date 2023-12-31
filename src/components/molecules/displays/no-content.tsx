import { cn } from "@/src/libs/utils";
import React, { useEffect } from "react";

interface Props {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export const NoContent = ({ text, className, children }: Props) => {
  return (
    <div
      className={cn(
        "p-6 bg-white rounded-md flex items-center justify-center text-gray-600",
        className
      )}
    >
      {children ? children : <>{text ? text : "ありません"}</>}
    </div>
  );
};
