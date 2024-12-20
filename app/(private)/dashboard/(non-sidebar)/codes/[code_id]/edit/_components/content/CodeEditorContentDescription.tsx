"use client";

import React from "react";

import { useCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditor";
import { TextareaWithTools } from "@/src/components/organisms/TextareaWithTools";
import { useUploadImage } from "@/src/hooks/useUploadImage";
import { useAlert } from "@/src/hooks/useAlert";
import { useCodeEditorFiles } from "../../_hooks/useCodeEditorFiles";
import { useCodeEditorSelectedFile } from "../../_hooks/useCodeEditorSelectedFile";

interface Props {
  className?: string;
}

export const CodeEditorContentDescription = ({ className }: Props) => {
  const { errorAlert } = useAlert();
  const { uploadImage, loading } = useUploadImage();
  const { code, setDescription } = useCodeEditor();
  const { selectedFile } = useCodeEditorSelectedFile();
  const { updateFile } = useCodeEditorFiles();

  const onPasteImage = async (file: File) => {
    if (file) {
      try {
        const maxFileSize = 5 * 1024 * 1024;
        if (file.size > maxFileSize) {
          errorAlert("ファイルサイズが大きすぎます。5MB以下にしてください。");
          return;
        }

        const imageUrl = await uploadImage(file);
        const markdownImage = `![image](${imageUrl})`;
        return markdownImage;
      } catch (e) {
        errorAlert("画像がアップロードできませんでした。", e);
      } finally {
        // 
      }
    }
  };

  const onTogglePreview = () => {
    if (selectedFile) {
      updateFile(selectedFile);
    }
  };

  return (
    <TextareaWithTools
      value={code?.description || ""}
      setValue={setDescription}
      placeholder="全体を通したコード解説（マークダウン形式）"
      rows={28}
      maxLength={15000}
      className={className}
      onPasteImage={onPasteImage}
      disabled={loading}
      onTogglePreview={onTogglePreview}
    />
  );
};
