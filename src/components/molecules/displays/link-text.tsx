import Link from "next/link";
import React from "react";
import { Typo } from "../../atoms/texts/typo";
import { cn } from "@/src/libs/utils";

interface Props {
  label: string;
  url: string;
  className?: string;
}

export const LinkText = ({ url, label, className }: Props) => {
  return (
    <Link href={url} className={cn("text-gray-700 hover:text-sky-500", className)}>
      <Typo text={label} />
    </Link>
  );
};
