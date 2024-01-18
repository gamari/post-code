import React from "react";

import { cn } from "@/src/libs/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TopSection = ({ className, children }: Props) => {
  return (
    <div className={cn("w-full px-10 lg:px-6 my-24 lg:my-16", className)}>
      <div className="max-w-7xl w-full mx-auto">{children}</div>
    </div>
  );
};
