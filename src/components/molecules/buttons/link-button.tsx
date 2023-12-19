import React from "react";
import { Button } from "../../atoms/buttons/button";
import Link from "next/link";

interface Props {
  url: string;
  label: string;
  isActive?: boolean;
}

export const LinkButton = ({ url, label, isActive }: Props) => {
  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "outline"}
      className="w-full"
    >
      <Link href={url}>{label}</Link>
    </Button>
  );
};
