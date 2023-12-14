import React from "react";

import { actionGetMySelf } from "@/src/actions/users";
import { AccountForm } from "@/src/components/auth/client/AccountForm";

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
