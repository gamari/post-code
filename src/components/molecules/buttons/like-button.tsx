import React from "react";
import { Button } from "../../atoms/forms/button";
import { MdOutlineStarBorder } from "react-icons/md";
import { cn } from "@/src/libs/utils";

interface Props {
  onClick: () => void;
  className?: string;
  count?: number;
}

export const LikeButton = ({ onClick, className, count }: Props) => {
  return (
    <Button variant="outline" onClick={onClick} className={cn(className)}>
      <MdOutlineStarBorder className="h-6 w-6 cursor-pointer" />
      <div className="flex flex-row items-center gap-2">
        <span>お気に入り</span>
        <span className="ml-1 text-sm text-gray-600">{count}</span>
      </div>
    </Button>
  );
};
