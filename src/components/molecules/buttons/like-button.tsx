import React from "react";
import { Button } from "../../atoms/buttons/button";
import { MdOutlineStarBorder } from "react-icons/md";
import { cn } from "@/src/libs/utils";

interface Props {
  onClick: () => void;
  className?: string;
}

export const LikeButton = ({ onClick, className }: Props) => {
  return (
    <Button variant="outline" onClick={onClick} className={cn(className)}>
      <MdOutlineStarBorder className="h-6 w-6 cursor-pointer" />
      お気に入り
    </Button>
  );
};
