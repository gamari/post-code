import React from "react";
import { UserIcon } from "../../atoms/icons/user-icon";
import { User } from "@/src/types";

interface Props {
  user: User;
}

export const UserInfoCard = ({ user }: Props) => {
  return (
    <div className="border rounded-md bg-white p-5">
      <div className="flex flex-row gap-2 items-center">
        <UserIcon />
        <div>
          <div>{user.username}</div>
        </div>
      </div>

      <div className="mt-2 border-t py-2">{user.description}</div>
    </div>
  );
};
