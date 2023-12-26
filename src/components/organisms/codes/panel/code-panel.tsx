import React, { FunctionComponent } from "react";

import { MockBlock } from "@/src/components/molecules/displays/mock-block";
import { CodeDetail } from "@/src/types";
import { cn } from "@/src/libs/utils";

import { HeartIcon, PersonIcon } from "@radix-ui/react-icons";
import { DateString } from "@/src/components/atoms/texts/date-string";
import { Logo } from "@/src/components/molecules/logo";
import { DateIcon } from "@/src/components/atoms/icons/date-icon";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";
import { FileType } from "@/src/libs/editors";

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
      <CodeIcon
        fileType={code?.language?.name as FileType}
        size="lg"
      />

      <div className="flex flex-col justify-between h-full w-full">
        <div className="text-lg font-bold text-gray-700">{code.title}</div>
        <CodePanelFooter code={code} />
      </div>
    </div>
  );
};

const CodePanelFooter = ({ code }: { code: CodeDetail }) => {
  return (
    <div className="flex flex-row justify-between w-full items-center text-gray-600">
      <div className="flex flex-row gap-4 ">
        <div className="flex flex-row items-center gap-2">
          <PersonIcon className="h-5 w-5" />
          <div>{code?.user?.username}</div>
        </div>

        <div className="flex flex-row items-center gap-2">
          <HeartIcon className="h-5 w-5" />
          <span>{code?.favorites_count || 0}</span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <DateIcon size="sm" />
        <DateString value={code?.created_at} className="pr-2" />
      </div>
    </div>
  );
};
