"use client";

import React from "react";

import { Textarea } from "@/src/components/atoms/forms/textarea";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useCodeEditorSelectedFile } from "@/src/hooks/codes/editors/useCodeEditorSelectedFile";
import { useCodeEditorDescription } from "@/src/hooks/codes/editors/useCodeEditorDescription";

export const CodeEditorContentDescription = () => {
  const { selectedFile, setDescription } = useCodeEditorSelectedFile();

  if (!selectedFile) return;

  return (
    <div className="mt-6">
      <Heading className="mb-3">コード説明(空欄可)</Heading>
      <Textarea
        className="w-full"
        value={selectedFile?.description || ""}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        rows={8}
        placeholder="上記コードの説明を書いてください（マークダウン形式）"
      />
    </div>
  );
};
