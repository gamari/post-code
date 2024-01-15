import React, { ReactNode } from "react";
import Link from "next/link";

import { Button } from "../../../atoms/forms/button";
import { cn } from "@/src/libs/utils";

interface Props {
  url: string;
  label: string;
  isActive?: boolean;
  Icon?: ReactNode;
  className?: string;
  target?: "_blank";
}

export const LinkButton = ({
  url,
  label,
  isActive,
  Icon,
  className,
  target,
}: Props) => {
  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "outline"}
      className={cn("w-full flex items-center gap-2 text-gray-600", isActive && "font-bold text-gray-900", className)}
    >
      <Link href={url} target={target}>
        {Icon && Icon}
        {label}
      </Link>
    </Button>
  );
};
