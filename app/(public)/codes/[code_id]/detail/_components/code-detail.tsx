import React, { Suspense } from "react";

import { Center } from "@/src/components/atoms/containers/Center";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { CodeDetailFileViewer } from "./CodeDetailFileViewer";
import { CodeDetailInfo } from "./code-detail-info";
import { CodeDetailCommentList } from "./comments/CodeDetailCommentList";
import { CodeDetailSidebar } from "./sidebar/code-detail-sidebar";
import { actionGetBadCodeById } from "@/src/actions/codes";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { Flex } from "@/src/components/atoms/containers/Flex";

interface Props {
  codeId: number;
}

export const revalidate = 0;

export const CodeDetail = async ({ codeId }: Props) => {
  const code = await actionGetBadCodeById(codeId);

  if (!code) return <NoContent text="コードが見つかりませんでした" />;

  return (
    <Center>
      <Flex gap={40} className="p-10">
        <Suspense fallback={<Skeleton className="w-[700px]" />}>
          <Flex
            direction="column"
            gap={24}
            className="flex-1 w-[700px] pb-32 border-b"
          >
            <CodeDetailInfo code={code} />
            <CodeDetailFileViewer className="mb-10 w-full" />
            <CodeDetailCommentList code={code} className="w-full" />
          </Flex>

          <CodeDetailSidebar code={code} />
        </Suspense>
      </Flex>
    </Center>
  );
};
