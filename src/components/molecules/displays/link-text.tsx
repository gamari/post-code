import Link from "next/link";
import React from "react";
import { Typo } from "../../atoms/texts/typo";

interface Props {
  label: string;
  url: string;
  className?: string;
}

export const LinkText = ({ url, label }: Props) => {
  return (
    <Link href={url}>
      <Typo type="p" text={label} />
    </Link>
  );
};
