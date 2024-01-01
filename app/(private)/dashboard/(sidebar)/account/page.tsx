import React from "react";
import { unstable_noStore } from "next/cache";

import { actionGetMySelf } from "@/src/actions/users";
import { AccountForm } from "@/src/components/organisms/users/AccountForm";
import { LogoutButton } from "@/src/components/organisms/users/logout-button";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Flex } from "@/src/components/atoms/containers/Flex";
import Link from "next/link";

const Page = async () => {
  unstable_noStore();
  const user = await actionGetMySelf();

  return (
    <div className="p-10">
      <Heading className="mb-6">アカウント設定</Heading>
      <AccountForm user={user} className="w-[600px]" />

      <Flex alignItems="center" justifyContent="between" className="mt-4 w-[600px]">
        <LogoutButton />
        <Link href="/dashboard/account/other" className="text-gray-600 cursor-pointer">
          その他の操作
        </Link>
      </Flex>
    </div>
  );
};

export default Page;
