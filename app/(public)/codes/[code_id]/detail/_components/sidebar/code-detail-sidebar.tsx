import React, { Suspense } from "react";

import { UserInfoCard } from "../../../../../../../src/components/organisms/users/user-info-card";
import { CodeDetailSidebarToolsCard } from "./code-detail-sidebar-tools-card";
import { CodeDetailFileListCard } from "./CodeDetailFileListCard";
import { CodeDetail } from "@/src/types";
import { actionGetAuthUser } from "@/src/actions/users";
import { actionGetFiles } from "@/src/actions/files";

interface Props {
  code: CodeDetail;
}

export const revalidate = 0

export const CodeDetailSidebar = async ({ code }: Props) => {
  const authUser = await actionGetAuthUser();
  const files = await actionGetFiles(code.id);

  return (
    <div className="sticky top-8 h-fit flex flex-col gap-6 w-[250px] z-[110]">
      <UserInfoCard user={code.user} />
      <CodeDetailFileListCard
        files={files}
        isAuthor={code?.user_id === authUser?.id}
        codeId={code.id}
      />

      <CodeDetailSidebarToolsCard badCode={code} isLogin={!!authUser} />
    </div>
  );
};
