import React, { FunctionComponent } from "react";

import { CodeDetail } from "@/src/types";
import { cn } from "@/src/libs/utils";

import { DateIcon } from "@/src/components/atoms/icons/date-icon";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";
import { FileType } from "@/src/libs/editors";
import { Typo } from "@/src/components/atoms/texts/typo";
import { TimeAgo } from "@/src/components/molecules/time-ago";
import { Avatar } from "@/src/components/molecules/avatar";
import { CommentCount } from "../../comments/comment-count";
import { FavoriteCount } from "../../favorites/favorite-count";
import { Flex } from "@/src/components/atoms/containers/Flex";

interface Props {
  code: CodeDetail;
  className?: string;
}

export const CodePanel: FunctionComponent<Props> = ({ code, className }) => {
  return (
    <Flex
      alignItems="center"
      gap={20}
      className={cn("px-6 py-8 rounded-lg bg-white ", className)}
    >
      <CodeIcon fileType={code?.language?.name as FileType} size="lg" />

      <div className="flex flex-col justify-between gap-2 h-full w-full">
        <Typo text={code.title} size="lg" isBold />
        <CodePanelFooter code={code} />
      </div>
    </Flex>
  );
};

const CodePanelFooter = ({ code }: { code: CodeDetail }) => {
  return (
    <div className="flex flex-row justify-between w-full items-center text-gray-600">
      <div className="flex flex-row gap-2">
        <div className="flex flex-row items-center gap-2">
          <Avatar size="sm" iconType={code?.user?.icon_type} />
          <Typo
            text={code?.user?.username}
            size="md"
            className="text-gray-700"
          />
        </div>

        <FavoriteCount count={code?.favorites_count} />
        <CommentCount count={code?.comments_count} />
      </div>

      <div className="flex flex-row items-center gap-2">
        <DateIcon size="sm" />
        <TimeAgo date={code?.updated_at} className="pr-2" />
      </div>
    </div>
  );
};
