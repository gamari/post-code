"use client";

import React from "react";

import { CiCirclePlus, CiFileOn } from "react-icons/ci";

import { Button } from "@/components/common/ui/button";
import { File } from "@/libs/types";
import { cn } from "@/libs/utils";

interface Props {
  files: File[];
  selectedFile: File | undefined;
  onClickFile: (file: File) => void;
  onClickAddFile: () => void;
  onClickSave: () => void;
}

export const CodeEditorSidebar = ({
  files,
  onClickFile,
  onClickAddFile,
  onClickSave,
  selectedFile,
}: Props) => {
  return (
    <div className="w-[250px] border p-6 rounded-md ">
      <div className="flex flex-row gap-2">
        <span>ファイル一覧</span>
        <CiCirclePlus
          className="h-6 w-6 cursor-pointer hover:opacity-70"
          // TODO ファイル作成モーダルにしたい
          onClick={onClickAddFile}
        />
      </div>

      <div className="mt-6 flex flex-col gap-2 max-h-[400px] overflow-auto">
        {files?.map((file) => (
          <div
            key={file.id}
            className={cn(
              "flex flex-row items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg gap-2",
              selectedFile?.id === file.id && "bg-gray-100"
            )}
            onClick={() => onClickFile(file)}
          >
            <CiFileOn className="h-5 w-5" />
            {file.name}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Button onClick={onClickSave}>保存</Button>
      </div>
    </div>
  );
};
