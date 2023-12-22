import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return <div className="bg-sky-100">{children}</div>;
};

export default MainLayout;
