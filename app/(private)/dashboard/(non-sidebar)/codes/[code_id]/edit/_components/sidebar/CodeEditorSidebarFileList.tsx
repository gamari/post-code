import React, { useState } from "react";

import { File } from "@/src/types";
import { cn } from "@/src/libs/utils";
import { FileIcon } from "../../../../../../../../../src/components/molecules/displays/file-icon";
import { convertFilenameToFiletype } from "@/src/libs/editors";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/src/components/ui/context-menu";
import { Typo } from "@/src/components/atoms/texts/typo";
import { sortAscByName } from "@/src/libs/sortes";
import { limitString } from "@/src/libs/strings";
import { FILE_TEXT_LIMIT } from "@/src/libs/constants/limits";
import { useDeleteFileInSidebar } from "../../../../../../../../../src/hooks/codes/editors/sidebar/useDeleteFileInSidebar";
import { useCodeEditorFiles } from "@/src/hooks/codes/editors/useCodeEditorFiles";
import { useCodeEditorSelectedFile } from "@/src/hooks/codes/editors/useCodeEditorSelectedFile";
import { useCodeEditorTargetRenameFile } from "@/src/hooks/codes/editors/useCodeEditorTargetRenameFile";
import { useCodeEditorModalContext } from "@/src/contexts/CodeEditorModalProvider";

interface Props {
  className?: string;
}

// TODO リファクタリングする
export const CodeEditorSidebarFileList = ({ className }: Props) => {
  const { isRenameOpen, toggleRenameModal, setTargetFile } =
    useCodeEditorModalContext();

  const { files, updateFile } = useCodeEditorFiles();
  const { selectedFile, setSelectedFile } = useCodeEditorSelectedFile();

  const { onDeleteFile } = useDeleteFileInSidebar();

  const handleClickFile = (file: File) => {
    if (selectedFile?.id === file.id) return;
    if (selectedFile) updateFile(selectedFile);
    setSelectedFile(file);
  };

  const handleRename = (file: File) => {
    setTargetFile(file);
    toggleRenameModal();
  };

  if (!files?.length) return <NoFiles />;

  return (
    <div
      className={cn(
        "flex flex-col gap-1 max-h-[200px] scroll-auto overflow-scroll",
        className
      )}
    >
      {files?.sort(sortAscByName).map((file) => (
        <ContextMenu key={file.id}>
          <ContextMenuTrigger>
            <div
              className={cn(
                "flex flex-row items-center cursor-pointer hover:bg-gray-200 p-2 rounded-lg gap-2 select-none",
                selectedFile?.id === file.id && "bg-gray-200"
              )}
              onClick={() => handleClickFile(file)}
            >
              <FileIcon fileType={convertFilenameToFiletype(file.name)} />
              {limitString(file.name, FILE_TEXT_LIMIT)}
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem
              onClick={() => {
                handleRename(file);
              }}
              className="cursor-pointer hover:bg-gray-100"
            >
              名前を変更
            </ContextMenuItem>

            <ContextMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onDeleteFile?.(file);
              }}
              className="mt-3 cursor-pointer"
            >
              <Typo className="text-red-500" text="削除" />
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  );
};

const NoFiles = () => {
  return (
    <div className="p-2 text-gray-600 flex items-center gap-3 my-3">
      ファイルがありません
    </div>
  );
};
