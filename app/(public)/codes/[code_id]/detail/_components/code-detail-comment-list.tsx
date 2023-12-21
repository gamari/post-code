import React from "react";

import { cn } from "@/src/libs/utils";
import { Heading } from "@/src/components/atoms/texts/heading";
import { CodeCommentList } from "./CodeDetailCommentList";

interface Props {
  className?: string;
}

export const CodeDetailCommentList = async ({ className }: Props) => {
  
  return (
    <div className={cn("rounded-md bg-white", className)}>
      <div className="flex flex-row gap-2 items-center p-6 border-b">
        <Heading type="h3" className="text-gray-700 mb-3">
          議論
        </Heading>
      </div>
      <CodeCommentList />

      <div className="p-6">{/* TODO */}</div>
    </div>
  );
};
