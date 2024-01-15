"use client";

import React from "react";
import Link from "next/link";

import { LeftIcon } from "../../../atoms/icons/left-icon";
import { Typo } from "../../../atoms/texts/typo";
import { useRouter } from "next/navigation";

interface Props {
  url: string;
  className?: string;
  label?: string;
}

export const BackButton = ({ url, label, className }: Props) => {
  const router = useRouter();
  if (!url)
    return (
      <LeftIcon
        onClick={() => {
          router.back();
        }}
      />
    );

  return (
    <Link
      href={url}
      className={`py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm ${className}`}
    >
      <LeftIcon />
      {label && <Typo text={label || ""} className="ml-2 text-gray-700" />}
    </Link>
  );
};
