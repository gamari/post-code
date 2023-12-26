import React, { FunctionComponent } from "react";

import { CodeDetail } from "@/src/types";
import { cn } from "@/src/libs/utils";

import { DateString } from "@/src/components/atoms/texts/date-string";
import { DateIcon } from "@/src/components/atoms/icons/date-icon";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";
import { FileType } from "@/src/libs/editors";
import { AccountIcon } from "@/src/components/atoms/icons/account-icon";
import { HeartIcon } from "@/src/components/atoms/icons/heart-icon";
import { FavoriteIcon } from "@/src/components/atoms/icons/favorite-icon";

interface Props {
  code: CodeDetail;
  className?: string;
}

export const CodePanel: FunctionComponent<Props> = ({ code, className }) => {
  return (
    <div
      className={cn(
        "p-4 py-8 rounded-lg flex flex-row items-center gap-4 bg-white ",
        className
      )}
    >
      <CodeIcon fileType={code?.language?.name as FileType} size="lg" />

      <div className="flex flex-col justify-between gap-2 h-full w-full">
        <div className="text-lg font-bold text-gray-700">{code.title}</div>
        <CodePanelFooter code={code} />
      </div>
    </div>
  );
};

const CodePanelFooter = ({ code }: { code: CodeDetail }) => {
  return (
    <div className="flex flex-row justify-between w-full items-center text-gray-600">
      <div className="flex flex-row gap-2">
        <div className="flex flex-row items-center gap-2">
          <AccountIcon />
          <div>{code?.user?.username}</div>
        </div>

        <div className="flex flex-row items-center gap-2">
          <FavoriteIcon />
          <span>{code?.favorites_count || 0}</span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <DateIcon />
        <DateString value={code?.created_at} className="pr-2" />
      </div>
    </div>
  );
};
