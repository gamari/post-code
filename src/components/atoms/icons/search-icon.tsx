import { getIconSizeClassName } from "@/src/libs/components";
import { cn } from "@/src/libs/utils";
import { IconProps } from "@/src/types/components";
import React from "react";
import { IoIosSearch } from "react-icons/io";

interface Props extends IconProps {}

export const SearchIcon = ({ className, onClick, size = "md" }: Props) => {
  return (
    <IoIosSearch
      className={cn(getIconSizeClassName(size), className)}
      onClick={onClick}
    />
  );
};
