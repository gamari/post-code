import React, { FunctionComponent } from "react";

import { DashboardSidebar } from "@/app/(private)/dashboard/_components/dashboard-sidebar";
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
    <div className="max-w-7xl mx-auto flex flex-row pt-4 gap-6 w-full">
      <div className="pl-8 pt-6">
        <DashboardSidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
