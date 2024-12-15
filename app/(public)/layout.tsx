import React from "react";
import { TopFooter } from "../_components/top-footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="bg-sky-100">
      <div className="min-h-screen">{children}</div>
      <TopFooter />
    </div>
  );
};

export default MainLayout;
