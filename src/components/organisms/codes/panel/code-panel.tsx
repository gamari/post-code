import React, { FunctionComponent } from "react";

import { CodeDetail } from "@/src/types";
import { cn } from "@/src/libs/utils";

import { DateIcon } from "@/src/components/atoms/icons/date-icon";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";
import { FileType } from "@/src/libs/editors";
import { AccountIcon } from "@/src/components/atoms/icons/account-icon";
import { FavoriteIcon } from "@/src/components/atoms/icons/favorite-icon";
import { Typo } from "@/src/components/atoms/texts/typo";
import { TimeAgo } from "@/src/components/molecules/time-ago";

interface Props {
  code: CodeDetail;
  className?: string;
}

export const CodePanel: FunctionComponent<Props> = ({ code, className }) => {
  return (
    <div
      className={cn(
        "px-6 py-8 rounded-lg flex flex-row items-center gap-5 bg-white ",
        className
      )}
    >
      <CodeIcon fileType={code?.language?.name as FileType} size="lg" />

      <div className="flex flex-col justify-between gap-2 h-full w-full">
        <Typo text={code.title} size="lg" isBold />
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
          <AccountIcon size="sm" />
          <Typo
            text={code?.user?.username}
            size="md"
            className="text-gray-700"
          />
        </div>

        <div className="flex flex-row items-center gap-2">
          <FavoriteIcon size="sm" />
          <Typo text={code?.favorites_count || 0} />
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <DateIcon size="sm" />
        <TimeAgo date={code?.updated_at} className="pr-2" />
      </div>
    </div>
  );
};
