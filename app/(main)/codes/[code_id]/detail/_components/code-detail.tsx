import { actionGetCommentsByCodeId } from "@/src/actions/comments";
import { CodeCommentListProvider } from "@/src/contexts/CodeCommentListProvider";
import { CodeDetailProvider } from "@/src/contexts/CodeDetailProvider";
import React, { Suspense } from "react";
import { CodeDetailFileViewer } from "../../../../../../src/components/organisms/shared/bad-codes/CodeDetailFileViewer";
import { CodeDetailCommentList } from "./code-detail-comment-list";
import { CodeDetailInfo } from "./code-detail-info";
import { CodeDetailSidebar } from "./sidebar/code-detail-sidebar";
import { Skeleton } from "../../../../../../src/components/molecules/displays/skeleton";

interface CodeDetailProps {
  codeId: number;
}

export const CodeDetail = async ({ codeId }: CodeDetailProps) => {
  const comments = await actionGetCommentsByCodeId(codeId);

  return (
    <CodeDetailProvider>
      <CodeCommentListProvider comments={comments}>
        <div className="flex flex-col items-center">
          <div className="p-10 flex flex-row gap-10">
            <Suspense fallback={<Skeleton />}>
              <div className="flex-1 flex flex-col gap-6 w-[650px]">
                <CodeDetailInfo id={codeId} />
                <CodeDetailFileViewer />
                <CodeDetailCommentList />
              </div>

              <CodeDetailSidebar codeId={codeId} />
            </Suspense>
          </div>
        </div>
      </CodeCommentListProvider>
    </CodeDetailProvider>
  );
};
