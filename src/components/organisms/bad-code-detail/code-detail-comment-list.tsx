import React from "react";

import { Typo } from "@/src/components/atoms/texts/typo";
import { CodeCommentList } from "../shared/comments/CodeCommentList";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
}

export const CodeDetailCommentList = async ({ className }: Props) => {
  return (
    <div className={cn("rounded-md p-6 bg-white", className)}>
      <Typo text="議論" type="h3" className="text-gray-700 mb-3" />
      <CodeCommentList />
    </div>
  );
};