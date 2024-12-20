import { getIconSizeClassName } from "@/src/libs/components";
import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";
import React from "react";
import { FaRegComment } from "react-icons/fa6";

interface Props extends IconProps {}

export const CommentIcon = ({ size = "md", className }: Props) => {
  return <FaRegComment className={cn("text-gray-700", getIconSizeClassName(size), className)} />;
};
