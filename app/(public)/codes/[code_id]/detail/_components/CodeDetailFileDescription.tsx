import React from "react";

import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { cn } from "@/src/libs/utils";
import { Relative } from "@/src/components/atoms/containers/relative";
import { Badge } from "@/src/components/atoms/badges/badge";

interface Props {
  className?: string;
}

export const CodeDetailFileDescription = ({ className = "" }: Props) => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile) return null;

  return (
    <div className={cn("", className)}>
      {selectedFile?.description && (
        <Relative className="bg-white py-12 px-8 rounded-lg">
          <Badge className="absolute -top-2 left-2">コード説明</Badge>
          <MarkdownPreviewer content={selectedFile?.description || ""} />
        </Relative>
      )}
    </div>
  );
};
