import { Avatar } from "@/src/components/molecules/avatar";
import { cn } from "@/src/libs/utils";
import React from "react";
import { SelectAvatarItem } from "./SelectAvatarItem";

interface Props {
  iconType: string | null;
  selectIcon: (iconType: string | null) => void;
}

const avatarList = ["panda", "rabbit", "cat", "wolf"];

const SelectAvatarList = ({ iconType, selectIcon }: Props) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <div
        onClick={() => selectIcon(null)}
        className={cn(
          "border-2 border-gray-200 rounded-full cursor-pointer",
          iconType == null && "border-blue-500"
        )}
      >
        <Avatar />
      </div>

      {avatarList.map((avatar) => (
        <SelectAvatarItem
          selectIcon={selectIcon}
          iconType={avatar}
          isActive={iconType == avatar}
        />
      ))}
    </div>
  );
};

export default SelectAvatarList;
