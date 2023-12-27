import React, { Suspense } from "react";
import { unstable_noStore } from "next/cache";

import { NextPage } from "next";

import { DetailCodeCommentListProvider } from "@/src/contexts/CodeCommentListProvider";
import { CodeDetailProvider } from "@/src/contexts/CodeDetailProvider";
import { CodeDetailFileViewer } from "./_components/CodeDetailFileViewer";
import { CodeDetailCommentList } from "./_components/comments/CodeDetailCommentList";
import { CodeDetailInfo } from "./_components/code-detail-info";
import { CodeDetailSidebar } from "./_components/sidebar/code-detail-sidebar";
import { Center } from "@/src/components/atoms/containers/Center";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { CodeDetail } from "./_components/code-detail";

interface Props {
  params: {
    code_id: number;
  };
}

// TODO Code Detailにする
const CodeDetailPage: NextPage<Props> = async ({ params: { code_id } }) => {
  unstable_noStore();

  return (
    <DetailCodeCommentListProvider comments={[]}>
      <CodeDetailProvider>
        <CodeDetail codeId={code_id} />
      </CodeDetailProvider>
    </DetailCodeCommentListProvider>
  );
};

export default CodeDetailPage;
