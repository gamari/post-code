import React from "react";
import { TopFooter } from "../_components/top-footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="bg-sky-100">
      {children}
      <TopFooter />
    </div>
  );
};

export default MainLayout;
