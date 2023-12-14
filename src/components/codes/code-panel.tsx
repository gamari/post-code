import React, { FunctionComponent } from "react";
import { MockBlock } from "@/src/components/base/mock-block";
import { BadCodeDetail } from "@/src/types";
import { cn } from "@/src/libs/utils";

import { PersonIcon } from "@radix-ui/react-icons";

interface Props {
  code: BadCodeDetail;
  className?: string;
}

export const CodePanel: FunctionComponent<Props> = ({ code, className }) => {
  return (
    <div
      className={cn(
        "p-4 border rounded-lg flex flex-row items-center gap-4 bg-white h-[100px]",
        className
      )}
    >
      <MockBlock width={50} height={50} />

      <div className="flex flex-col justify-between h-full">
        <div className="text-lg font-bold">{code.title}</div>
        {/* <div className="text-sm">{code.description}</div> */}
        <div className="flex flex-row items-center gap-2">
          <PersonIcon className="h-6 w-6" />
          <div>{code?.user?.username}</div>
        </div>
      </div>
    </div>
  );
};
