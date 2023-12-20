import React from "react";

import { actionGetCommentsByCodeId } from "@/src/actions/comments";
import { CodeCommentListProvider } from "@/src/contexts/CodeCommentListProvider";
import { CodeDetailProvider } from "@/src/contexts/CodeDetailProvider";
import { CodeDetailFileViewer } from "./CodeDetailFileViewer";
import { CodeDetailCommentList } from "./code-detail-comment-list";
import { CodeDetailInfo } from "./code-detail-info";
import { CodeDetailSidebar } from "./sidebar/code-detail-sidebar";

interface CodeDetailProps {
  codeId: number;
}

export const CodeDetail = async ({ codeId }: CodeDetailProps) => {
  const comments = await actionGetCommentsByCodeId(codeId);

  return (
    <CodeCommentListProvider comments={comments}>
      <CodeDetailProvider>
        <div className="flex flex-col items-center">
          <div className="p-10 flex flex-row gap-10">
            <div className="flex-1 flex flex-col gap-6 w-[650px]">
              <CodeDetailInfo id={codeId} />
              <CodeDetailFileViewer />
              <CodeDetailCommentList />
            </div>

            <CodeDetailSidebar codeId={codeId} />
          </div>
        </div>
      </CodeDetailProvider>
    </CodeCommentListProvider>
  );
};
