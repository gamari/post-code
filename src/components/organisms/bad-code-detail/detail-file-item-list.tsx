"use client";

import React from "react";

import { Typo } from "@/src/components/atoms/texts/typo";
import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { File } from "@/src/types";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { FileItemList } from "../shared/file-item-list";

interface Props {
  files: File[];
}

export const DetailFileItemList = ({ files }: Props) => {
  const { selectedFile, setSelectedFile } = useCodeDetailContext();

  const onSelectFile = (file: File) => {
    setSelectedFile && setSelectedFile(file);
  };

  if (!files?.length)
    return (
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 rounded-md p-2 select-none text-sm">
          <MdOutlineInsertDriveFile className="w-4 h-4" />
          <Typo text="ファイルがありません" />
        </div>
      </div>
    );

  return (
    <FileItemList
      files={files}
      selectedFile={selectedFile}
      className="mt-2"
      onClick={(file) => onSelectFile(file)}
    />
  );
};
