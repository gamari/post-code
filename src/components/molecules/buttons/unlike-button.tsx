import React from "react";
import { Button } from "../../atoms/buttons/button";
import { MdOutlineStar } from "react-icons/md";
import { cn } from "@/src/libs/utils";

interface Props {
  onClick: () => void;
  className?: string;
}

export const UnlikeButton = ({ onClick, className }: Props) => {
  return (
    <Button variant="secondary" onClick={onClick} className={cn(className)}>
      <MdOutlineStar className="h-6 w-6 text-yellow-500 cursor-pointer" />
      お気に入り
    </Button>
  );
};
