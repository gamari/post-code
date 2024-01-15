import React from "react";
import { Center } from "@/src/components/atoms/containers/Center";
import { BackButton } from "@/src/components/molecules/forms/buttons/back-button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full">
      <BackButton className="absolute top-4 left-4" url="/dashboard" />
      <Center className="py-4">{children}</Center>
    </div>
  );
};

export default Layout;
