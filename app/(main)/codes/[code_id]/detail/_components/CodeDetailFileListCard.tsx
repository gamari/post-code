"use client";

import React from "react";

import { File } from "@/src/types";
import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { Typo } from "@/src/components/atoms/texts/typo";
import { FileItemList } from "@/src/components/organisms/files/file-item-list";
import { MdOutlineInsertDriveFile } from "react-icons/md";

interface Props {
  files: File[];
}

export const CodeDetailFileListCard = ({ files }: Props) => {
  const { setSelectedFile, selectedFile } = useCodeDetailContext();

  const onSelectFile = (file: File) => {
    setSelectedFile && setSelectedFile(file);
  };

  return (
    <div className="border rounded-md bg-white w-[240px] p-5">
      <div>
        <Typo
          text="ファイル一覧"
          type="h3"
          className="text-gray-700 border-b pb-1"
        />

        {!files?.length ? (
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2 rounded-md p-2 select-none text-sm">
              <MdOutlineInsertDriveFile className="w-4 h-4" />
              <Typo text="ファイルがありません" />
            </div>
          </div>
        ) : (
          <FileItemList
            files={files}
            selectedFile={selectedFile}
            className="mt-2"
            onClick={(file) => onSelectFile(file)}
          />
        )}
      </div>
    </div>
  );
};
