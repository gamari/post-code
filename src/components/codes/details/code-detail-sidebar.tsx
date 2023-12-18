import React from "react";
import dayjs from "dayjs";

import { Typo } from "@/src/components/base/typo";
import { CodeDetailFileList } from "./code-detail-file-list";
import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { actionGetFiles } from "@/src/actions/files";
import { FavoriteCodeDetailButton } from "./favorite-code-detail-button";
import { actionGetAuthUser } from "@/src/actions/users";
import { UserIcon } from "../../auth/user-icon";
import { CodeDetailShareButton } from "./client/CodeDetailShareButton";
import { CodeDetailCommentDialogButton } from "./client/CodeDetailCommentDialogButton";
import { CodeFileListCard } from "../code-file-list-card";
import { UserDetailCard } from "../../auth/user-detail-card";
import { CodeDetailToolCard } from "./code-detail-tool-card";

interface Props {
  codeId: number;
}

export const CodeDetailSidebar = async ({ codeId }: Props) => {
  const badCode = await actionGetBadCodeById(codeId);

  return (
    <div className="sticky top-10 h-fit flex flex-col gap-6">
      <UserDetailCard user={badCode.user} />
      <CodeFileListCard codeId={codeId} />
      <CodeDetailToolCard badCode={badCode} />
    </div>
  );
};
