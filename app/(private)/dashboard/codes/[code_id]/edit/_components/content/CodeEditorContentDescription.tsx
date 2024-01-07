"use client";

import React from "react";

import { Textarea } from "@/src/components/atoms/forms/textarea";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useCodeEditorSelectedFile } from "@/src/hooks/codes/editors/useCodeEditorSelectedFile";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { PreviewButton } from "@/src/components/molecules/preview-button";
import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";

export const CodeEditorContentDescription = () => {
  const [isPreview, setIsPreview] = React.useState(false);
  const { selectedFile, setDescription } = useCodeEditorSelectedFile();

  if (!selectedFile) return;

  return (
    <div className="mt-6">
      <Heading className="mb-3">コード説明(空欄可)</Heading>

      {isPreview ? (
        <div className="h-[250px] bg-white p-6 border overflow-y-scroll">
          <MarkdownPreviewer content={selectedFile?.description || ""} />
        </div>
      ) : (
        <Textarea
          className="w-full"
          value={selectedFile?.description || ""}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          rows={12}
          placeholder="上記コードの説明を書いてください（マークダウン形式）"
        />
      )}
      <Flex direction="row-reverse" className="mt-3">
        <PreviewButton isPreview={isPreview} setIsPreview={setIsPreview} />
      </Flex>
    </div>
  );
};
