import React from "react";

import { actionGetMySelf } from "@/src/actions/users";
import { AccountForm } from "@/src/components/auth/client/AccountForm";
import { LogoutButton } from "@/src/components/auth/logout-button";

const Page = async () => {
  const user = await actionGetMySelf();

  return (
    <div className="p-10">
      <AccountForm user={user} className="max-w-md" />
      <LogoutButton />
    </div>
  );
};

export default Page;
