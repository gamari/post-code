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
}

export const LinkButton = ({
  url,
  label,
  isActive,
  Icon,
  className,
}: Props) => {
  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "outline"}
      className={cn("w-full", className)}
    >
      <Link href={url}>
        {Icon && Icon}
        {label}
      </Link>
    </Button>
  );
};
