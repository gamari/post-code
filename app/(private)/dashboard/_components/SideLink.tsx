"use client";

import React, { ComponentType, ReactNode } from "react";

import { usePathname } from "next/navigation";
import { LinkButton } from "../../../../src/components/molecules/buttons/link-button";

interface Props {
  url: string;
  label: string;
  Icon?: ReactNode
}

export const SideLink = ({ label, url, Icon }: Props) => {
  const pathname = usePathname();

  return (
    <LinkButton
      isActive={pathname == url}
      url={url}
      label={label}
      Icon={Icon}
    />
  );
};
