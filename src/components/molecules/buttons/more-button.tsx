import { BaseProps } from "@/src/types/components";
import React from "react";
import { Typo } from "../../atoms/texts/typo";
import { cn } from "@/src/libs/utils";
import Link from "next/link";

interface Props extends BaseProps {
  url: string;
}

export const MoreButton = ({ className, url }: Props) => {
  return (
    <Link
      className={cn(
        "inline-block px-10 py-3 text-lg font-semibold border-2 rounded-lg border-gray-500 cursor-pointer hover:bg-sky-50",
        className
      )}
      href={url}
    >
      <Typo text="もっと見る" />
    </Link>
  );
};
