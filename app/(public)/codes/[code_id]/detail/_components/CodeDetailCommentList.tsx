"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useInitCommentList } from "@/src/hooks/comments/useInitCommentList";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { useGetCommentList } from "@/src/hooks/comments/useGetCommentList";
import { CommentPanelList } from "@/src/components/organisms/comments/comment-panel-list";

interface Props {
  className?: string;
  codeId: number;
}

export const CodeDetailCommentList = ({ className, codeId }: Props) => {
  const { loading } = useInitCommentList(codeId);
  const { commentList } = useGetCommentList();

  return (
    <div className={cn("rounded-md bg-white", className)}>
      <div className="flex flex-row gap-2 items-center p-6 border-b">
        <Heading type="h3" className="text-gray-700 mb-3">
          議論
        </Heading>
      </div>

      {loading ? <Skeleton /> : <CommentPanelList comments={commentList} />}

      <div className="p-6">{/* TODO */}</div>
    </div>
  );
};
