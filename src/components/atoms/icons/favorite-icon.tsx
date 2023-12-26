import { getIconSizeClassName } from "@/src/libs/components";
import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";
import { StarIcon } from "@radix-ui/react-icons";
import React from "react";

interface Props extends IconProps {}

export const FavoriteIcon = ({ className, onClick, size = "md" }: Props) => {
  return <StarIcon className={cn(getIconSizeClassName(size), className)} />;
};
