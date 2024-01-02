import React from "react";

import { actionGetMySelf } from "@/src/actions/users";
import { PrivateProviders } from "./PrivateProviders";

interface Props {
  children: React.ReactNode;
}

const PrivateLayout = async ({ children }: Props) => {
  const user = await actionGetMySelf();

  if (!user) {
    return <div>ログインしてください</div>;
  }

  return <PrivateProviders>{children}</PrivateProviders>;
};

export default PrivateLayout;
