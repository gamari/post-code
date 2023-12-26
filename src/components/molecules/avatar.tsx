import React from "react";
import Image from "next/image";

import { AccountIcon } from "../atoms/icons/account-icon";
import { IconProps } from "@/src/types/components";
import { cn } from "@/src/libs/utils";

interface Props extends IconProps {
  src?: string | null;
  className?: string;
}

export const Avatar = ({ src, className = "" }: Props) => {
  if (!src) return <AccountIcon className={cn("text-gray-700", className)} />;

  return <Image src={src} alt="avatar" width={40} height={40} />;
};
