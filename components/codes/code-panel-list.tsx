import React from "react";
import Link from "next/link";

import { BadCodeWithUser } from "@/libs/types";
import { CodePanel } from "./code-panel";
import { cn } from "@/libs/utils";

interface Props {
  codes?: BadCodeWithUser[];
  className?: string;
}

export const CodePanelList = ({ codes, className }: Props) => {
  if (!codes) return null;

  return (
    <div
      className={cn("w-full grid grid-cols-1 md:grid-cols-2 gap-6", className)}
    >
      {codes.map((code) => (
        <Link href={`/codes/${code.id}/detail`} key={code.id}>
          <CodePanel code={code} className="cursor-pointer hover:opacity-80" />
        </Link>
      ))}
    </div>
  );
};
