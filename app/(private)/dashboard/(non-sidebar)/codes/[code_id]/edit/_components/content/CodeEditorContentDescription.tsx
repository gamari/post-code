"use client";

import React from "react";

import { useCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditor";
import { TextareaWithPreview } from "@/src/components/organisms/TextareaWithPreview";

interface Props {
  className?: string;
}

export const CodeEditorContentDescription = ({ className }: Props) => {
  const { code, setDescription } = useCodeEditor();

  return (
    <TextareaWithPreview
      value={code?.description || ""}
      setValue={setDescription}
      placeholder="全体を通したコード解説（マークダウン形式）"
      rows={20}
      maxLength={15000}
      className={className}
    />
  );
};
