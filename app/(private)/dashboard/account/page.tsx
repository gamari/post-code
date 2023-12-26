import React from "react";
import { unstable_noStore } from "next/cache";

import { actionGetMySelf } from "@/src/actions/users";
import { AccountForm } from "@/src/components/organisms/users/AccountForm";
import { LogoutButton } from "@/src/components/organisms/users/logout-button";
import { Heading } from "@/src/components/atoms/texts/heading";

const Page = async () => {
  unstable_noStore();
  const user = await actionGetMySelf();

  return (
    <div className="p-10">
      <Heading className="mb-6">アカウント設定</Heading>
      <AccountForm user={user} className="w-[600px]" />
      <LogoutButton />
    </div>
  );
};

export default Page;
