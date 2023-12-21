import React, { ReactNode } from "react";
import Link from "next/link";

import { Button } from "../../atoms/buttons/button";
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
      className={cn("w-full", isActive && "font-bold text-gray-700", className)}
    >
      <Link href={url} target={target}>
        {Icon && Icon}
        {label}
      </Link>
    </Button>
  );
};
