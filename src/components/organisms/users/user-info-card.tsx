import React from "react";
import Link from "next/link";

import { User } from "@/src/types";
import { XIcon } from "../../atoms/icons/x-icon";
import { X_URL } from "@/src/libs/constants/urls";
import { Typo } from "../../atoms/texts/typo";
import { Avatar } from "../../molecules/avatar";
import { Description } from "../../atoms/texts/description";

interface Props {
  user: User;
}

export const UserInfoCard = ({ user }: Props) => {
  console.log(user);
  return (
    <div className="rounded-md bg-white px-5 py-6 whitespace-pre-wrap">
      <div className="flex flex-row gap-2 items-center">
        <Avatar src={user?.avatar_url} size="md" iconType="" />
        <Typo text={user?.username} size="xs" />
      </div>

      {user?.description && <Description size="sm" className="mt-3 pt-2 border-t">{user.description}</Description>}

      {user.x_url && (
        <div>
          <Link href={X_URL(user?.x_url)} target="_blank">
            <XIcon className="p-2 h-9 w-9 cursor-pointer rounded-full hover:bg-slate-100" />
          </Link>
        </div>
      )}
    </div>
  );
};
