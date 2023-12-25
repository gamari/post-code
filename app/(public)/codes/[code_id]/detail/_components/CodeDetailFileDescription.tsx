import { Heading } from "@/src/components/atoms/texts/heading";
import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  className?: string;
}

export const CodeDetailFileDescription = ({ className = "" }) => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile) return null;

  return (
    <div className={cn("", className)}>
      {selectedFile?.description && (
        <div className="bg-white p-6">
          <MarkdownPreviewer content={selectedFile?.description || ""} />
        </div>
      )}
    </div>
  );
};
