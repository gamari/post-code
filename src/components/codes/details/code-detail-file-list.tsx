"use client";

import React from "react";

import { Typo } from "@/src/components/base/typo";
import { useCodeDetailContext } from "@/src/components/providers/code-detail-provider/code-detail-provider";
import { File } from "@/src/types";
import { CodeDetailFile } from "./client/CodeDetailFile";
import { MdOutlineInsertDriveFile } from "react-icons/md";

interface Props {
  files: File[];
}

export const CodeDetailFileList = ({ files }: Props) => {
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
    <div className="mt-2 flex flex-col gap-2">
      {files.map((file) => (
        <CodeDetailFile
          key={file.id}
          className={selectedFile?.id === file.id ? "bg-slate-200" : ""}
          file={file}
          onClick={(file) => onSelectFile(file)}
        />
      ))}
    </div>
  );
};
