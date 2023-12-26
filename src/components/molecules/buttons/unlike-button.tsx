import React from "react";
import { Button } from "../../atoms/buttons/button";
import { MdOutlineStar } from "react-icons/md";
import { cn } from "@/src/libs/utils";

interface Props {
  onClick: () => void;
  className?: string;
  count?: number;
}

export const UnlikeButton = ({ onClick, className, count }: Props) => {
  return (
    <Button variant="secondary" onClick={onClick} className={cn(className)}>
      <MdOutlineStar className="h-6 w-6 text-yellow-500 cursor-pointer" />
      <span>お気に入り</span>
      <span className="ml-1 text-sm text-gray-600">{count}</span>
    </Button>
  );
};
