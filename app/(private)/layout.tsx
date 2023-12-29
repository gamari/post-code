import React from "react";

import { actionGetMySelf } from "@/src/actions/users";

interface Props {
  children: React.ReactNode;
}

const PrivateLayout = async ({ children }: Props) => {
  const user = await actionGetMySelf();

  if (!user) {
    return <div>ログインしてください</div>;
  }

  return <>{children}</>;
};

export default PrivateLayout;
