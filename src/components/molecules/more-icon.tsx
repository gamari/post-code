import React from "react";
import { DownIcon } from "../atoms/icons/down-icon";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
  onClick: () => void;
}

export const MoreIcon = ({ className, onClick }: Props) => {
  return <DownIcon className={cn("w-8 h-8 cursor-pointer hover:opacity-80", className)} onClick={onClick} />;
};
