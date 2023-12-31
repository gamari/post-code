import { cn } from "@/src/libs/utils";
import { Tag } from "@/src/types";
import React from "react";

interface Props {
  size?: "sm" | "md" | "lg";
  tag: Tag;
}

export const TagBadge = ({ size = "md", tag }: Props) => {
  return (
    <span className={cn(
        "rounded-full bg-gray-200 text-gray-700",
        size == "sm" && "text-xs px-2 py-1",
        size == "md" && "text-sm px-2 py-1",
        size == "lg" && "text-base px-3 py-1",
    )}>
      {tag?.name}
    </span>
  );
};
