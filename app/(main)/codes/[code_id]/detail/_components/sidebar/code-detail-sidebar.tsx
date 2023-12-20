import React, { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { UserInfoCard } from "../../../../../../../src/components/organisms/users/user-info-card";
import { CodeDetailSidebarToolsCard } from "./code-detail-sidebar-tools-card";
import { actionGetFiles } from "@/src/actions/files";
import { CodeDetailFileListCard } from "../CodeDetailFileListCard";

interface Props {
  codeId: number;
}

export const CodeDetailSidebar = async ({ codeId }: Props) => {
  noStore();

  const badCode = await actionGetBadCodeById(codeId);
  const files = await actionGetFiles(codeId);

  if (!badCode) {
    throw new Error("コードが見つかりません");
  }

  return (
    <div className="sticky top-10 h-fit flex flex-col gap-6">
      <UserInfoCard user={badCode.user} />
      <Suspense>
        <CodeDetailFileListCard files={files} />
      </Suspense>
      <CodeDetailSidebarToolsCard badCode={badCode} />
    </div>
  );
};
