"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useInitCommentList } from "@/src/hooks/comments/useInitCommentList";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { CodeDetailCommentPanelList } from "@/app/(public)/codes/[code_id]/detail/_components/comments/CodeDetailCommentPanelList";
import { CommentIcon } from "@/src/components/atoms/icons/comment-icon";

interface Props {
  className?: string;
  codeId: number;
}

export const CodeDetailCommentList = ({ className, codeId }: Props) => {
  const { loading } = useInitCommentList(codeId);

  return (
    <div className={cn("rounded-md bg-white", className)}>
      <div className="flex flex-row gap-2 items-center p-6 border-b mb-3">
        <CommentIcon />
        <Heading type="h3" className="text-gray-700">
          議論
        </Heading>
      </div>

      {loading ? <Skeleton /> : <CodeDetailCommentPanelList />}

      <div className="p-6">{/* TODO */}</div>
    </div>
  );
};
