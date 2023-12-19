"use client";

import React from "react";

import { File } from "@/src/types";
import { CodeFileList } from "../BadCodeEditorFileList";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { CodeEditorSaveButton } from "../BadCodeEditorSaveButton";
import { useAlert } from "@/src/hooks/useAlert";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { Typo } from "@/src/components/atoms/texts/typo";
import { SelectRadioButtonList } from "@/src/components/molecules/forms/select-radio-button-list";
import { CodeEditorNewFileModalButton } from "../BadCodeEditorNewFileModalButton";
import { useDeleteCodeFile } from "@/src/hooks/bad-codes-edit/useDeleteCodeFile";
import { useSelectCodeFile } from "@/src/hooks/bad-codes-edit/useSelectCodeFile";

export const CodeEditorSidebar = () => {
  const { errorAlert } = useAlert();
  const { badCode, files, selectedFile, setIsPublic } = useCodeEditor();
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
