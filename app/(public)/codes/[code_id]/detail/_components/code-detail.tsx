import React, { Suspense } from "react";

import { Center } from "@/src/components/atoms/containers/Center";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { CodeDetailSidebar } from "./sidebar/code-detail-sidebar";
import { actionGetCodeById } from "@/src/actions/codes";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeDetailContent } from "./content/CodeDetailContent";
import { CodeDetailCommentModal } from "./comments/CodeDetailCommentModal";

interface Props {
  codeId: number;
}

export const revalidate = 0

export const CodeDetail = async ({ codeId }: Props) => {
  const code = await actionGetCodeById(codeId);

  if (!code)
    return (
      <div className="max-w-5xl mx-auto py-20">
        <NoContent text="記事が見つかりませんでした" />
      </div>
    );

  return (
    <Center>
      <Flex gap={40} className="p-10 w-full" justifyContent="center">
        <Suspense fallback={<Skeleton className="w-[700px]" />}>
          <CodeDetailContent code={code} />
          <CodeDetailSidebar code={code} />
          <CodeDetailCommentModal code={code}  />
        </Suspense>
      </Flex>
    </Center>
  );
};
