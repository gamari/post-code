import React from "react";

import { File } from "@/libs/types";
import { cn } from "@/libs/utils";
import { CiFileOn } from "react-icons/ci";

interface Props {
  files: File[];
  selectedFile: File | undefined;
  onClickFile: (file: File) => void;
}

export const CodeFileList = ({ files, selectedFile, onClickFile }: Props) => {

  if (!files?.length) return (
    <div className="border p-2 text-gray-600">ファイルがありません</div>
  )

  return (
    <div>
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
  );
};
