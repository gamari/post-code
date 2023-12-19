"use client";

import React from "react";

import { File } from "@/src/types";
import { CodeFileList } from "../BadCodeEditorFileList";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { CodeEditorSaveButton } from "../BadCodeEditorSaveButton";
import { fetchDeleteFile } from "@/src/libs/externals/supabase/queries/files";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useAlert } from "@/src/hooks/useAlert";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { Typo } from "@/src/components/atoms/texts/typo";
import { SelectRadioButtonList } from "@/src/components/molecules/forms/select-radio-button-list";
import { CodeEditorNewFileModalButton } from "../BadCodeEditorNewFileModalButton";

export const CodeEditorSidebar = () => {
  const { client } = useSupabase();
  const { infoAlert } = useAlert();

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
      infoAlert("ファイル名を入力してください");
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
      <div className="flex flex-row items-center gap-2 pb-2 border-b">
        <Typo type="h4" text="ファイル一覧" />
        <CodeEditorNewFileModalButton />
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
        <SelectRadioButtonList
          defaultValue={badCode?.is_public ? "public" : "private"}
          items={[
            { label: "非公開", value: "private" },
            { label: "公開", value: "public" },
          ]}
          onChange={(value) => {
            console.log(value);
            setIsPublic(value === "public");
          }}
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <CodeEditorSaveButton />

        <LinkButton
          url={`/codes/${badCode?.id}/detail`}
          label="詳細画面へ"
          target="_blank"
        />
      </div>
    </div>
  );
};
