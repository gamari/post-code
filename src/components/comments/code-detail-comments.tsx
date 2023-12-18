import React from "react";

import { Typo } from "@/src/components/base/typo";
import { CodeCommentList } from "./client/CodeCommentList";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
}

export const CodeDetailComments = async ({ className }: Props) => {
  return (
    <div className={cn("rounded-md p-6 bg-white", className)}>
      <Typo text="議論" type="h3" className="text-gray-700" />
      <CodeCommentList />
    </div>
  );
};
