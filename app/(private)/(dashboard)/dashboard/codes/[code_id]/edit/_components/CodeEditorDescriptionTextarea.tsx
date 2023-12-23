"use client";

import React from "react";

import { Textarea } from "@/src/components/atoms/forms/textarea";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useGetEditorSelectedFile } from "@/src/hooks/codes/editors/getter/useGetEditorSelectedFile";
import { useSetEditorSelectedFile } from "@/src/hooks/codes/editors/setter/useSetEditorSelectedFile";

export const CodeEditorDescriptionTextarea = () => {
  const { selectedFile } = useGetEditorSelectedFile();
  const { setDescription } = useSetEditorSelectedFile();

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
        rows={10}
        placeholder="上記コードの説明を書いてください（マークダウン形式）"
      />
    </div>
  );
};
