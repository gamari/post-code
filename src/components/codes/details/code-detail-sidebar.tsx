import React from "react";
import dayjs from "dayjs";

import { Typo } from "@/src/components/base/typo";
import { CodeDetailFileList } from "../../files/code-detail-file-list";
import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { actionGetFiles } from "@/src/actions/files";
import { FavoriteCodeDetailButton } from "./favorite-code-detail-button";
import { actionGetAuthUser } from "@/src/actions/users";
import { UserIcon } from "../../users/user-icon";
import { CodeDetailShareButton } from "./client/CodeDetailShareButton";
import { CodeDetailCommentDialogButton } from "./client/CodeDetailCommentDialogButton";
import { FileListCard } from "../../files/file-list-card";
import { UserDetailCard } from "../../users/user-detail-card";
import { CodeDetailToolCard } from "./code-detail-tool-card";

interface Props {
  codeId: number;
}

export const CodeDetailSidebar = async ({ codeId }: Props) => {
  const badCode = await actionGetBadCodeById(codeId);

  if (!badCode) {
    throw new Error("BadCodeが取得できませんでした");
  }

  return (
    <div className="sticky top-10 h-fit flex flex-col gap-6">
      <UserDetailCard user={badCode.user} />
      <FileListCard codeId={codeId} />
      <CodeDetailToolCard badCode={badCode} />
    </div>
  );
};
