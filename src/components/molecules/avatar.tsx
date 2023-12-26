import React from "react";
import Image from "next/image";

import { AccountIcon } from "../atoms/icons/account-icon";
import { IconProps } from "@/src/types/components";
import { cn } from "@/src/libs/utils";

interface Props extends IconProps {
  src?: string | null;
  className?: string;
}

export const Avatar = ({ src, size = "md", className = "" }: Props) => {
  if (!src)
    return (
      <AccountIcon
        className={cn(
          "text-gray-700",
          size == "sm" && "h-5 w-5",
          size == "md" && "h-8 w-8",
          size == "lg" && "h-12 w-12",
          className
        )}
      />
    );

  return <Image src={src} alt="avatar" width={40} height={40} />;
};
