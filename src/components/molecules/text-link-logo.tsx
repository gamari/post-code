import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { BaseProps } from "@/src/types/components";

interface Props extends BaseProps {
  url: string;
  label: string;
}

export const TextLinkLogo = ({ url, label }: Props) => {
  return (
    <Link href={url} className="flex flex-row gap-2 items-center">
      <Logo />
      <span className="text-2xl text-gray-700 font-bold">{label}</span>
    </Link>
  );
};
