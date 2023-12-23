import React, { Suspense } from "react";

import { NextPage } from "next";

import { CodeCommentListProvider } from "@/src/contexts/CodeCommentListProvider";
import { CodeDetailProvider } from "@/src/contexts/CodeDetailProvider";
import { CodeDetailFileViewer } from "./_components/CodeDetailFileViewer";
import { CodeDetailCommentList } from "./_components/CodeDetailCommentList";
import { CodeDetailInfo } from "./_components/code-detail-info";
import { CodeDetailSidebar } from "./_components/sidebar/code-detail-sidebar";
import { Center } from "@/src/components/atoms/containers/Center";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeDetailPage: NextPage<Props> = async ({ params: { code_id } }) => {
  return (
    <CodeCommentListProvider comments={[]}>
      <CodeDetailProvider>
        <Center>
          <div className="p-10 flex flex-row gap-10 ">
            <Suspense fallback={<Skeleton className="w-[700px]" />}>
              <div className="flex-1 flex flex-col gap-6 w-[700px] pb-32 border-b">
                <CodeDetailInfo id={code_id} />
                <CodeDetailFileViewer className="mb-12" />
                <CodeDetailCommentList codeId={code_id} />
              </div>

              <div className="w-[300px]">
                <CodeDetailSidebar codeId={code_id} />
              </div>
            </Suspense>
          </div>
        </Center>
      </CodeDetailProvider>
    </CodeCommentListProvider>
  );
};

export default CodeDetailPage;
