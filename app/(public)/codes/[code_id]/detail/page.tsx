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

interface Props {
  params: {
    code_id: number;
  };
}

const CodeDetailPage: NextPage<Props> = async ({ params: { code_id } }) => {
  unstable_noStore();
  
  return (
    <DetailCodeCommentListProvider comments={[]}>
      <CodeDetailProvider>
        <Center>
          <div className="p-10 flex flex-row gap-10 ">
            <Suspense fallback={<Skeleton className="w-[700px]" />}>
              <div className="flex-1 flex flex-col gap-6 w-[700px] pb-32 border-b">
                <CodeDetailInfo id={code_id} />
                <CodeDetailFileViewer className="mb-10" />
                <CodeDetailCommentList codeId={code_id} />
              </div>

              <div className="w-[300px]">
                <CodeDetailSidebar codeId={code_id} />
              </div>
            </Suspense>
          </div>

          {/* TODO */}
        </Center>
      </CodeDetailProvider>
    </DetailCodeCommentListProvider>
  );
};

export default CodeDetailPage;
