import React, { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { CodeDetailSidebar } from "@/src/components/codes/details/sidebar/code-detail-sidebar";
import { CodeDetailInfo } from "@/src/components/codes/details/code-detail-info";
import { NextPage } from "next";
import { CodeDetailProvider } from "@/src/contexts/CodeDetailProvider";
import { CodeDetailComments } from "@/src/components/comments/code-detail-comments";
import { CodeCommentListProvider } from "@/src/contexts/CodeCommentListProvider";
import { actionGetCommentsByCodeId } from "@/src/actions/comments";
import { CodeDetailFileViewer } from "@/src/components/files/details/client/CodeDetailFileViewer";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeDetailPage: NextPage<Props> = async ({ params: { code_id } }) => {
  noStore();

  // TODO commentsの取得をここでやりたくない
  const comments = await actionGetCommentsByCodeId(code_id);

  return (
    <CodeDetailProvider>
      <CodeCommentListProvider comments={comments}>
        <div className="flex flex-col items-center">
          <div className="p-10 flex flex-row gap-10">
            <Suspense fallback={null}>
              <div className="flex-1 flex flex-col gap-6 w-[650px]">
                <CodeDetailInfo id={code_id} />
                <CodeDetailFileViewer />
                <CodeDetailComments />
              </div>

              <CodeDetailSidebar codeId={code_id} />
            </Suspense>
          </div>
        </div>
      </CodeCommentListProvider>
    </CodeDetailProvider>
  );
};

export default CodeDetailPage;
