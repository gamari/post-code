"use client";

import React from "react";

import { File } from "@/src/types";
import { CodeFileList } from "../../client/CodeFileList";
import { useCodeEditor } from "@/src/components/providers/CodeEditorProvider";
import { useToast } from "@/src/components/ui/use-toast";
import { CodeEditorFileDialog } from "./CodeEditorFileDialog";
import { CodeEditorSaveButton } from "./CodeEditorSaveButton";
import { fetchDeleteFile } from "@/src/libs/externals/supabase/queries/files";
import { useSupabase } from "@/src/components/providers/supabase-provider/supabase-provider";

export const CodeEditorSidebar = () => {
  const { client } = useSupabase();
  const { toast } = useToast();
  const { files, selectedFile, updateFile, setSelectedFile, deleteFile } =
    useCodeEditor();

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

  const handleDeleteFile = async (file: File) => {
    if (!client) return;
    const isOk = confirm("本当に削除しますか？");
    if (!isOk) return;
    await fetchDeleteFile(file?.id, client);
    deleteFile(file);
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
          onDeleteFile={handleDeleteFile}
        />
      </div>

      <div className="mt-6">
        <CodeEditorSaveButton />
      </div>
    </div>
  );
};
