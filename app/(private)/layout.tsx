import React from "react";

interface Props {
  children: React.ReactNode;
}

const PrivateLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default PrivateLayout;
