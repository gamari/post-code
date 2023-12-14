import React, { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { CodeDetailSidebar } from "@/src/components/codes/details/code-detail-sidebar";
import { CodeDetail } from "@/src/components/codes/details/code-detail";
import { NextPage } from "next";
import { CodeDetailProvider } from "@/src/components/providers/code-detail-provider/code-detail-provider";
import { CodeDetailComments } from "@/src/components/codes/details/code-detail-comments";
import { CodeCommentListProvider } from "@/src/components/providers/CodeCommentListProvider";
import { actionGetCommentsByCodeId } from "@/src/actions/comments";

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
            <div className="flex-1 w-[650px]">
              <Suspense fallback={null}>
                <CodeDetail id={code_id} />
                <CodeDetailComments />
              </Suspense>
            </div>

            <CodeDetailSidebar codeId={code_id} />
          </div>
        </div>
      </CodeCommentListProvider>
    </CodeDetailProvider>
  );
};

export default CodeDetailPage;
