import { cn } from "@/src/libs/utils";
import React, { useEffect } from "react";

interface Props {
  text?: string;
  className?: string;
}

export const NoContent = ({ text, className }: Props) => {
  return (
    <div
      className={cn(
        "p-6 bg-white border rounded-md flex items-center justify-center text-gray-600",
        className
      )}
    >
      {text ? text : "ありません"}
    </div>
  );
};
