"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  url: string;
  label: string;
}

export const SideLink = ({ label, url }: Props) => {
    const pathname = usePathname();

  return (
    <Button asChild variant={pathname == url ? "secondary" : "outline"} className="w-full">
      <Link href={url}>{label}</Link>
    </Button>
  );
};
