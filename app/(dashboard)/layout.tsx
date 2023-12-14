import React, { FunctionComponent } from "react";

import { Sidebar } from "@/src/components/base/sidebar";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className=" w-full h-full flex flex-row ">
      <Sidebar />
      <div className="border-l h-full flex-1 bg-sky-50">{children}</div>
    </div>
  );
};

export default DashboardLayout;
