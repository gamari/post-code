"use client";

import React from "react";

import { useCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditor";
import { TextareaWithPreview } from "@/src/components/organisms/TextareaWithPreview";
import { useUploadImage } from "@/src/hooks/useUploadImage";
import { useAlert } from "@/src/hooks/useAlert";

interface Props {
  className?: string;
}

export const CodeEditorContentDescription = ({ className }: Props) => {
  const { errorAlert } = useAlert();
  const { uploadImage, loading, startLoading, stopLoading } = useUploadImage();
  const { code, setDescription } = useCodeEditor();

  const onPaste = async (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();

        if (file) {
          try {
            startLoading();
            const imageUrl = await uploadImage(file);
            const markdownImage = `![uploaded image](${imageUrl})`;
            setDescription((code?.description || "") + markdownImage);
          } catch (e) {
            errorAlert("画像がアップロードできませんでした。", e);
          } finally {
            stopLoading();
          }
        }
      }
    }
  };

  return (
    <TextareaWithPreview
      value={code?.description || ""}
      setValue={setDescription}
      placeholder="全体を通したコード解説（マークダウン形式）"
      rows={20}
      maxLength={15000}
      className={className}
      onPaste={onPaste}
      disabled={loading}
    />
  );
};
