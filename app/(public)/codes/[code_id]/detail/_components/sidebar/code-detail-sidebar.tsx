import React, { Suspense } from "react";

import { actionGetBadCodeById } from "@/src/actions/codes";
import { UserInfoCard } from "../../../../../../../src/components/organisms/users/user-info-card";
import { CodeDetailSidebarToolsCard } from "./code-detail-sidebar-tools-card";
import { actionGetFiles } from "@/src/actions/files";
import { CodeDetailFileListCard } from "../CodeDetailFileListCard";
import { actionGetAuthUser } from "@/src/actions/users";

interface Props {
  codeId: number;
}

export const CodeDetailSidebar = async ({ codeId }: Props) => {
  const badCode = await actionGetBadCodeById(codeId);
  const files = await actionGetFiles(codeId);
  const authUser = await actionGetAuthUser();
  console.log(authUser);

  if (!badCode) throw new Error("コードが見つかりません");

  return (
    <div className="sticky top-20 h-fit flex flex-col gap-6 w-[250px]">
      <UserInfoCard user={badCode.user} />
      <CodeDetailFileListCard
        files={files}
        isAuthor={badCode?.user_id === authUser?.id}
        codeId={badCode.id}
      />
      <CodeDetailSidebarToolsCard badCode={badCode} isLogin={!!authUser} />
    </div>
  );
};
