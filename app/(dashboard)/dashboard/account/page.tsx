import React from "react";

import { actionGetMySelf } from "@/actions/users";
import { AccountForm } from "@/components/auth/client/AccountForm";

const AccountPage = async () => {
  const user = await actionGetMySelf();

  if (!user) {
    return <div>ログインしてください</div>;
  }

  return (
    <div className="p-6">
      <AccountForm user={user} />
    </div>
  );
};

export default AccountPage;
