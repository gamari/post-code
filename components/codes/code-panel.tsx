import React, { FunctionComponent } from "react";
import { MockBlock } from "@/components/common/mock-block/mock-block";
import { BadCodeWithUser } from "@/libs/types";
import { cn } from "@/libs/utils";

import { PersonIcon } from '@radix-ui/react-icons'

interface Props {
  code: BadCodeWithUser;
  className?: string;
}

export const CodePanel: FunctionComponent<Props> = ({ code, className }) => {
  return (
    <div className={cn("p-4 border rounded-lg flex flex-row items-center gap-4", className)}>
      <MockBlock width={50} height={50} />

      <div>
        <div className="text-lg font-bold">{code.title}</div>
        <div className="text-sm">{code.description}</div>
        <div className="flex flex-row items-center gap-2">
          <PersonIcon className="h-6 w-6" />
          <div>{code.user.username}</div>
        </div>
      </div>
    </div>
  );
};
