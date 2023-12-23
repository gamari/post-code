import { Heading } from "@/src/components/atoms/texts/heading";
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
      <Heading type="h3">コード説明</Heading>

      <div className="bg-white p-6">
        <div>{selectedFile?.description}</div>
        {!selectedFile?.description && (
          <p className="text-gray-600">説明がありません</p>
        )}
      </div>
    </div>
  );
};
