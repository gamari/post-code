import React from "react";

import { File } from "@/src/types";
import { cn } from "@/src/libs/utils";
import { CiFileOn } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FileIcon } from "../../molecules/displays/file-icon";
import { getFileType } from "@/src/libs/editors";

interface Props {
  files: File[];
  selectedFile: File | undefined;
  onClickFile: (file: File) => void;
  onDeleteFile?: (file: File) => void;
}

export const CodeFileList = ({
  files,
  selectedFile,
  onClickFile,
  onDeleteFile,
}: Props) => {
  if (!files?.length)
    return <div className="p-2 text-gray-600">ファイルがありません</div>;

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
          <FileIcon fileType={getFileType(file.name)} />
          <div className="flex-1">{file.name}</div>
          {onDeleteFile && (
            <AiOutlineDelete
              className="h-6 w-6 p-1 cursor-pointer border border-gray-300 hover:bg-gray-500 rounded-lg hover:opacity-50"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteFile(file);
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
