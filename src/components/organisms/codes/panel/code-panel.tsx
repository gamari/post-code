import React, { FunctionComponent } from "react";

import { MockBlock } from "@/src/components/molecules/displays/mock-block";
import { CodeDetail } from "@/src/types";
import { cn } from "@/src/libs/utils";

import { HeartIcon, PersonIcon } from "@radix-ui/react-icons";
import { DateString } from "@/src/components/atoms/texts/date-string";

interface Props {
  code: CodeDetail;
  className?: string;
}

export const CodePanel: FunctionComponent<Props> = ({ code, className }) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg flex flex-row items-center gap-4 bg-white h-[100px]",
        className
      )}
    >
      <MockBlock width={50} height={50} />

      <div className="flex flex-col justify-between h-full w-full">
        <div className="text-lg font-bold">{code.title}</div>

        <div className="flex flex-row justify-between w-full items-center">
          <div className="flex flex-row gap-4 text-gray-600">
            <div className="flex flex-row items-center gap-2">
              <PersonIcon className="h-5 w-5" />
              <div>{code?.user?.username}</div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <HeartIcon className="h-5 w-5" />
              <span>{code?.favorites_count || 0}</span>
            </div>
          </div>

          <DateString value={code?.created_at} className="pr-2 text-gray-600" />
        </div>
      </div>
    </div>
  );
};
