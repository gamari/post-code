import React from "react";

import { actionGetMySelf } from "@/src/actions/users";
import { AccountForm } from "@/src/components/organisms/users/AccountForm";
import { LogoutButton } from "@/src/components/organisms/users/logout-button";
import { Heading } from "@/src/components/atoms/texts/heading";

const Page = async () => {
  const user = await actionGetMySelf();
  console.log(user);

  return (
    <div className="p-10">
      <Heading className="mb-6">アカウント設定</Heading>
      <AccountForm user={user} className="max-w-md" />
      <LogoutButton />
    </div>
  );
};

export default Page;
