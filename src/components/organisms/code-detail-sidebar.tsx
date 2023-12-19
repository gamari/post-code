import React from "react";

import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { CodeDetailSidebarFileItemListCard } from "./code-detail-sidebar-file-item-list-card";
import { UserDetailCard } from "./accounts/user-detail-card";
import { CodeDetailSidebarToolsCard } from "./code-detail-sidebar-tools-card";

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
      <CodeDetailSidebarFileItemListCard codeId={codeId} />
      <CodeDetailSidebarToolsCard badCode={badCode} />
    </div>
  );
};
