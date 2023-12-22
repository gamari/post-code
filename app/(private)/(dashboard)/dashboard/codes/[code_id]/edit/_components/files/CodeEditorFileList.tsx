import React from "react";

import { File } from "@/src/types";
import { cn } from "@/src/libs/utils";
import { AiOutlineDelete } from "react-icons/ai";
import { FileIcon } from "../../../../../../../../../src/components/molecules/displays/file-icon";
import { getFileType } from "@/src/libs/editors";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/src/components/ui/context-menu";
import { Typo } from "@/src/components/atoms/texts/typo";

interface Props {
  files: File[];
  selectedFile: File | undefined;
  onClickFile: (file: File) => void;
  onDeleteFile?: (file: File) => void;
}

export const CodeEditorFileList = ({
  files,
  selectedFile,
  onClickFile,
  onDeleteFile,
}: Props) => {
  if (!files?.length)
    return <div className="p-2 text-gray-600">ファイルがありません</div>;

  return (
    <div className="flex flex-col gap-1">
      {files?.map((file) => (
        <ContextMenu key={file.id}>
          <ContextMenuTrigger>
            <div
              className={cn(
                "flex flex-row items-center cursor-pointer hover:bg-gray-200 p-2 rounded-lg gap-2",
                selectedFile?.id === file.id && "bg-gray-200"
              )}
              onClick={() => onClickFile(file)}
            >
              <FileIcon fileType={getFileType(file.name)} />
              <div className="flex-1">{file.name}</div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>名前変更</ContextMenuItem>
            <ContextMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onDeleteFile?.(file);
              }}
              className="border-t mt-3 cursor-pointer"
            >
              <Typo className="text-red-500" text="削除" />
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  );
};
