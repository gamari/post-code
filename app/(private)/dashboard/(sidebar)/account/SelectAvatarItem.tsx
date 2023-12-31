import { Avatar } from "@/src/components/molecules/avatar";
import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  iconType: string | null;
  selectIcon: (iconType: string | null) => void;
  isActive: boolean;
}

export const SelectAvatarItem = ({ iconType, selectIcon, isActive }: Props) => {
  return (
    <div
      onClick={() => selectIcon(iconType)}
      className={cn(
        "border-2 border-gray-200 rounded-full cursor-pointer",
        isActive && "border-blue-500"
      )}
    >
      <Avatar iconType={iconType} />
    </div>
  );
};
