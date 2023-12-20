import React from "react";

import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { FileItemListCard } from "../../../../../../../src/components/organisms/files/file-item-list-card";
import { UserInfoCard } from "../../../../../../../src/components/organisms/users/user-info-card";
import { CodeDetailSidebarToolsCard } from "./code-detail-sidebar-tools-card";
import { actionGetFiles } from "@/src/actions/files";
import { CodeDetailCommentModalButton } from "../CodeDetailCommentModalButton";

interface Props {
  codeId: number;
}

export const CodeDetailSidebar = async ({ codeId }: Props) => {
  const badCode = await actionGetBadCodeById(codeId);
  const files = await actionGetFiles(codeId);

  if (!badCode) {
    throw new Error("コードが見つかりません");
  }

  return (
    <div className="sticky top-10 h-fit flex flex-col gap-6">
      <UserInfoCard user={badCode.user} />
      <FileItemListCard files={files} />
      <CodeDetailSidebarToolsCard badCode={badCode} />
    </div>
  );
};
