import { PlusIcon as PIcon } from "lucide-react";
import React, { memo } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
}

export const PlusIcon = memo(({ className, onClick }: Props) => {
  return <PIcon className={className} onClick={onClick} />;
})
