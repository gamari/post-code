import { Sidebar } from "@/components/common/sidebar/sidebar";
import { Header } from "@/components/dashboard/header/header";
import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="w-full flex flex-row">
        <Sidebar />
        <div className="border-l min-h-screen flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
