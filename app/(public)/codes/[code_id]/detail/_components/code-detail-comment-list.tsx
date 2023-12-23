"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { Heading } from "@/src/components/atoms/texts/heading";
import { CodeCommentList } from "./CodeDetailCommentList";
import { useInitCommentList } from "@/src/hooks/comments/useInitCommentList";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";

interface Props {
  className?: string;
  codeId: number;
}

export const CodeDetailCommentList = async ({ className, codeId }: Props) => {
  const { loading } = useInitCommentList(codeId);

  return (
    <div className={cn("rounded-md bg-white", className)}>
      <div className="flex flex-row gap-2 items-center p-6 border-b">
        <Heading type="h3" className="text-gray-700 mb-3">
          議論
        </Heading>
      </div>

      {loading ? <Skeleton /> : <CodeCommentList />}

      <div className="p-6">{/* TODO */}</div>
    </div>
  );
};
