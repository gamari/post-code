import React, { FunctionComponent } from "react";

import { DashboardSidebar } from "@/src/components/organisms/dashboard/dashboard-sidebar";
import { actionGetMySelf } from "@/src/actions/users";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: FunctionComponent<Props> = async ({ children }) => {
  const user = await actionGetMySelf();

  if (!user) {
    return <div>ログインしてください</div>;
  }

  return (
    <div className=" w-full flex flex-row bg-white">
      <DashboardSidebar />
      <div className="border-l flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
