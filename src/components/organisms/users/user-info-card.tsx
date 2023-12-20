import React from "react";
import { PersonIcon } from "../../atoms/icons/person-icon";
import { User } from "@/src/types";

interface Props {
  user: User;
}

export const UserInfoCard = ({ user }: Props) => {
  return (
    <div className="border rounded-md bg-white p-5">
      <div className="flex flex-row gap-2 items-center">
        <PersonIcon />
        <div>
          <div>{user.username}</div>
        </div>
      </div>

      {user?.description && <div className="mt-2 py-2 border-t">{user.description}</div>}
    </div>
  );
};
