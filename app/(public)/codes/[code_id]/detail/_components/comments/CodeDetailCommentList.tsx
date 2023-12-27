"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useInitCommentList } from "@/src/hooks/comments/useInitCommentList";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { CodeDetailCommentItemList } from "@/app/(public)/codes/[code_id]/detail/_components/comments/CodeDetailCommentItemList";
import { CommentIcon } from "@/src/components/atoms/icons/comment-icon";
import { CodeDetail } from "@/src/types";

interface Props {
  className?: string;
  code: CodeDetail;
}

export const CodeDetailCommentList = ({ className, code }: Props) => {
  const { loading } = useInitCommentList(code);

  return (
    <div className={cn("rounded-md bg-white", className)}>
      <div className="flex flex-row gap-2 items-center p-6 border-b mb-3">
        <CommentIcon />
        <Heading type="h3" className="text-gray-700">
          議論
        </Heading>
      </div>

      {loading ? <Skeleton /> : <CodeDetailCommentItemList />}

      <div className="p-6">{/* TODO */}</div>
    </div>
  );
};
