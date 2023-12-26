import React from "react";

import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
}

export const CodeDetailFileDescription = ({ className = "" }: Props) => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile) return null;

  return (
    <div className={cn("", className)}>
      {selectedFile?.description && (
        <div className="bg-white py-12 px-8">
          <MarkdownPreviewer content={selectedFile?.description || ""} />
        </div>
      )}
    </div>
  );
};
