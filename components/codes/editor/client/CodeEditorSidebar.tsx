"use client";

import React from "react";

import { File } from "@/libs/types";
import { CodeFileList } from "../../client/CodeFileList";
import { useCodeEditor } from "@/components/providers/CodeEditorProvider";
import { useToast } from "@/components/ui/use-toast";
import { CodeEditorFileDialog } from "./CodeEditorFileDialog";
import { CodeEditorSaveButton } from "./CodeEditorSaveButton";

interface Props {
  files: File[];
}

export const CodeEditorSidebar = ({ files }: Props) => {
  const { toast } = useToast();
  const { selectedFile, updateFile, setSelectedFile } = useCodeEditor();

  const handleClickFile = (file: File) => {
    if (selectedFile && !selectedFile?.name) {
      toast({
        title: "ファイル名を入力してください",
      });
      return;
    }

    if (selectedFile?.id === file.id) return;
    if (selectedFile?.id !== file.id && selectedFile?.content) {
      updateFile(selectedFile);
    }
    setSelectedFile(file);
  };

  return (
    <div className="w-[250px] h-fit border p-6 rounded-md ">
      <div className="flex flex-row gap-2">
        <span>ファイル一覧</span>

        <CodeEditorFileDialog />
      </div>

      <div className="mt-6 flex flex-col gap-2 max-h-[400px] overflow-auto">
        <CodeFileList
          files={files}
          selectedFile={selectedFile}
          onClickFile={handleClickFile}
        />
      </div>

      <div className="mt-6">
        <CodeEditorSaveButton />
      </div>
    </div>
  );
};
