import React from "react";

import { NextPage } from "next";
import { unstable_noStore as noStore } from "next/cache";

import { actionGetCommentsByCodeId } from "@/src/actions/comments";
import { CodeCommentListProvider } from "@/src/contexts/CodeCommentListProvider";
import { CodeDetailProvider } from "@/src/contexts/CodeDetailProvider";
import { CodeDetailFileViewer } from "./_components/CodeDetailFileViewer";
import { CodeDetailCommentList } from "./_components/code-detail-comment-list";
import { CodeDetailInfo } from "./_components/code-detail-info";
import { CodeDetailSidebar } from "./_components/sidebar/code-detail-sidebar";
import { Center } from "@/src/components/atoms/containers/Center";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeDetailPage: NextPage<Props> = async ({ params: { code_id } }) => {
  noStore();

  const comments = await actionGetCommentsByCodeId(code_id);

  return (
    <CodeCommentListProvider comments={comments}>
      <CodeDetailProvider>
        <Center>
          <div className="p-10 flex flex-row gap-10">
            <div className="flex-1 flex flex-col gap-6 w-[650px] pb-32">
              <CodeDetailInfo id={code_id} />
              <CodeDetailFileViewer />
              <CodeDetailCommentList />
            </div>

            <CodeDetailSidebar codeId={code_id} />
          </div>
        </Center>
      </CodeDetailProvider>
    </CodeCommentListProvider>
  );
};

export default CodeDetailPage;
