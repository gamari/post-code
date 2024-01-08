import React from "react";
import Link from "next/link";

import { User } from "@/src/types";
import { XIcon } from "../../atoms/icons/x-icon";
import { X_URL } from "@/src/libs/constants/urls";
import { Typo } from "../../atoms/texts/typo";
import { Avatar } from "../../molecules/avatar";
import { Description } from "../../atoms/texts/description";
import { cn } from "@/src/libs/utils";

interface Props {
  user: User;
  className?: string;
}

export const UserInfoCard = ({ user, className }: Props) => {
  return (
    <div className={cn("rounded-md bg-white px-5 py-6 whitespace-pre-wrap", className)}>
      <div className="flex flex-row gap-2 items-center">
        <Link href={`/accounts/${user?.id}`}>
          <Avatar size="md" iconType={user?.icon_type} />
        </Link>
        <Typo
          text={user?.username}
          size="md"
          className="text-gray-700"
          isBold
        />
      </div>

      {user?.description && (
        <Description size="md" className="p-2 mt-3 pt-2 border-t">
          {user.description}
        </Description>
      )}

      {user?.x_url && (
        <div>
          <Link href={X_URL(user?.x_url)} target="_blank">
            <XIcon className="p-2 h-9 w-9 cursor-pointer rounded-full hover:bg-slate-100" />
          </Link>
        </div>
      )}
    </div>
  );
};
