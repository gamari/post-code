"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/libs/utils";

interface Props {
  isActive?: boolean;
  url: string;
  label: string;
}

export const ActiveLink = ({ url, label }: Props) => {
  const pathname = usePathname();
  const isActive = pathname == url;

  return (
    <Link
      href={url}
      className="relative flex flex-row items-center justify-center p-2"
    >
      <span className={cn("text-lg text-gray-700", isActive && "font-bold")}>{label}</span>
      {isActive && (
        <span className="absolute bottom-0 w-full h-[3px] rounded-md bg-sky-600"></span>
      )}
    </Link>
  );
};
