import React, { Suspense } from "react";

import { Center } from "@/src/components/atoms/containers/Center";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { CodeDetailFileViewer } from "./CodeDetailFileViewer";
import { CodeDetailInfo } from "./code-detail-info";
import { CodeDetailCommentList } from "./comments/CodeDetailCommentList";
import { CodeDetailSidebar } from "./sidebar/code-detail-sidebar";
import { actionGetBadCodeById } from "@/src/actions/codes";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { unstable_noStore } from "next/cache";

interface Props {
  codeId: number;
}

export const revalidate = 0;

export const CodeDetail = async ({ codeId }: Props) => {
  unstable_noStore();
  
  const code = await actionGetBadCodeById(codeId);

  if (!code) return <NoContent text="コードが見つかりませんでした" />;

  return (
    <Center>
      <div className="p-10 flex flex-row gap-10 ">
        <Suspense fallback={<Skeleton className="w-[700px]" />}>
          <div className="flex-1 flex flex-col gap-6 w-[700px] pb-32 border-b">
            <CodeDetailInfo code={code} />
            <CodeDetailFileViewer className="mb-10" />
            <CodeDetailCommentList code={code} />
          </div>

          <div className="w-[300px]">
            <CodeDetailSidebar code={code} />
          </div>
        </Suspense>
      </div>
    </Center>
  );
};
