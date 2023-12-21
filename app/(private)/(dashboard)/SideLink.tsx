"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { LinkButton } from "../../../src/components/molecules/buttons/link-button";

interface Props {
  url: string;
  label: string;
}

export const SideLink = ({ label, url }: Props) => {
  const pathname = usePathname();

  return <LinkButton isActive={pathname == url} url={url} label={label} />;
};
