import { PlusIcon as PIcon } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
}

export const PlusIcon = ({ className, onClick }: Props) => {
  return <PIcon className={className} onClick={onClick} />;
};
