import React, { Suspense } from "react";
import { unstable_noStore } from "next/cache";

import { Center } from "@/src/components/atoms/containers/Center";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { CodeDetailFileViewer } from "./CodeDetailFileViewer";
import { CodeDetailInfo } from "./code-detail-info";
import { CodeDetailCommentList } from "./comments/CodeDetailCommentList";
import { CodeDetailSidebar } from "./sidebar/code-detail-sidebar";
import { actionGetCodeById } from "@/src/actions/codes";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeDetailFileDescription } from "./CodeDetailFileDescription";

interface Props {
  codeId: number;
}

export const revalidate = 0;

export const CodeDetail = async ({ codeId }: Props) => {
  unstable_noStore();
  const code = await actionGetCodeById(codeId);

  if (!code)
    return (
      <div className="max-w-5xl mx-auto py-20">
        <NoContent text="コードが見つかりませんでした" />
      </div>
    );

  return (
    <Center>
      <Flex gap={40} className="p-10 w-full" justifyContent="center">
        <Suspense fallback={<Skeleton className="w-[700px]" />}>
          <Flex
            direction="column"
            alignItems="stretch"
            gap={24}
            className="flex-1 pb-80 max-w-4xl w-full border-b"
          >
            <CodeDetailInfo code={code} />
            <CodeDetailFileViewer className="mb-10 w-full" />
            <CodeDetailCommentList code={code} className="w-full mb-6" />
            <CodeDetailFileDescription />
          </Flex>

          <CodeDetailSidebar code={code} />
        </Suspense>
      </Flex>
    </Center>
  );
};
