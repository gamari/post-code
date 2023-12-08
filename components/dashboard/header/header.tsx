import { Logo } from "@/components/common/logo/Logo";
import React from "react";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between border-b p-4">
      <div>
        <div>
          <Logo />
        </div>
      </div>
      <div>
        <div>UserIcon</div>
      </div>
    </header>
  );
};
