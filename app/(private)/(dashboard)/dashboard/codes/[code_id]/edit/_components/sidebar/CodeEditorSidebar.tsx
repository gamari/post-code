"use client";

import React from "react";

import { File } from "@/src/types";
import { CodeEditorFileList } from "../files/CodeEditorFileList";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { CodeEditorSaveModalButton } from "../CodeEditorSaveModalButton";
import { useAlert } from "@/src/hooks/useAlert";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { SelectRadioButtonList } from "@/src/components/molecules/forms/select-radio-button-list";
import { CodeEditorNewFileModalButton } from "../CodeEditorNewFileModalButton";
import { useDeleteCodeFile } from "@/src/hooks/codes/useDeleteCodeEditorFile";
import { useSelectCodeFile } from "@/src/hooks/codes/useSelectCodeEditorFile";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Switch } from "@/src/components/ui/switch";
import { Typo } from "@/src/components/atoms/texts/typo";

export const CodeEditorSidebar = () => {
  const { errorAlert } = useAlert();
  const { code, files, selectedFile, setIsPublic } = useCodeEditor();
  const { deleteFile } = useDeleteCodeFile();
  const { selectFile } = useSelectCodeFile();

  const handleClickFile = (file: File) => {
    try {
      selectFile(file);
    } catch (e) {
      errorAlert("ファイル選択できませんでした。", e);
    }
  };

  const handleDeleteFile = async (file: File) => {
    if (!confirm("本当に削除しますか？")) return;
    deleteFile(file);
  };

  return (
    <div className="w-[250px] h-fit border p-5 rounded-md bg-white">
      <div className="flex flex-row items-center gap-2 pb-2 border-b">
        <Heading type="h4">ファイル一覧</Heading>
        <CodeEditorNewFileModalButton />
      </div>

      <div className="mt-6 flex flex-col gap-2 max-h-[400px] overflow-auto">
        <CodeEditorFileList
          files={files}
          selectedFile={selectedFile}
          onClickFile={handleClickFile}
          onDeleteFile={handleDeleteFile}
        />
      </div>

      <div className="my-6 flex items-center gap-2">
        <Typo text="公開" className="text-gray-700 font-semibold text-sm" />
        <Switch
          checked={code?.is_public || false}
          onCheckedChange={(value) => {
            setIsPublic(value);
          }}
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <CodeEditorSaveModalButton />

        <LinkButton
          url={`/codes/${code?.id}/detail`}
          label="詳細画面へ"
          target="_blank"
        />
      </div>
    </div>
  );
};
