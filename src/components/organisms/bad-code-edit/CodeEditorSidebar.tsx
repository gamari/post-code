"use client";

import React from "react";

import { File } from "@/src/types";
import { CodeFileList } from "./CodeEditorFileList";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { useToast } from "@/src/components/ui/use-toast";
import { CodeEditorFileDialog } from "./CodeEditorFileDialog";
import { CodeEditorSaveButton } from "./CodeEditorSaveButton";
import { fetchDeleteFile } from "@/src/libs/externals/supabase/queries/files";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export const CodeEditorSidebar = () => {
  const { client } = useSupabase();
  const { toast } = useToast();
  const {
    badCode,
    files,
    selectedFile,
    updateFile,
    setSelectedFile,
    deleteFile,
    setIsPublic,
  } = useCodeEditor();

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
    <div className="w-[250px] h-fit border p-5 rounded-md bg-white">
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

      <div className="my-6">
        <RadioGroup
          defaultValue={badCode?.is_public ? "public" : "private"}
          className="flex flex-row"
        >
          <div className="flex items-center space-x-2">
            <Label htmlFor="private" className="cursor-pointer">
              <RadioGroupItem
                value="private"
                id="private"
                onClick={() => {
                  setIsPublic(false);
                }}
              />
              非公開
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="public" className="cursor-pointer">
              <RadioGroupItem
                value="public"
                id="public"
                onClick={() => {
                  setIsPublic(true);
                }}
              />
              公開
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <CodeEditorSaveButton />

        <Button variant="outline">
          <Link href={`/codes/${badCode?.id}/detail`}>詳細画面へ</Link>
        </Button>
      </div>
    </div>
  );
};