import React, { useState } from "react";

import { File } from "@/src/types";
import { cn } from "@/src/libs/utils";
import { FileIcon } from "../../../../../../../../src/components/molecules/displays/file-icon";
import { getFileExtensionType } from "@/src/libs/editors";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/src/components/ui/context-menu";
import { Typo } from "@/src/components/atoms/texts/typo";
import { sortAscByName } from "@/src/libs/sortes";
import { useModal } from "@/src/hooks/useModal";
import { CodeEditorRenameFileModal } from "../modal/CodeEditorRenameFileModal";
import { limitString } from "@/src/libs/strings";
import { FILE_TEXT_LIMIT } from "@/src/libs/constants/limits";
import { useDeleteFileInSidebar } from "../../../../../../../../src/hooks/codes/editors/sidebar/useDeleteFileInSidebar";
import { useCodeEditorFiles } from "@/src/hooks/codes/editors/useCodeEditorFiles";
import { useCodeEditorSelectedFile } from "@/src/hooks/codes/editors/useCodeEditorSelectedFile";
import { useCodeEditorTargetRenameFile } from "@/src/hooks/codes/editors/useCodeEditorTargetRenameFile";

interface Props {
  className?: string;
}

// TODO リファクタリングする
export const CodeEditorSidebarFileList = ({ className }: Props) => {
  const { isOpen, toggleModal } = useModal();

  const { files, updateFile } = useCodeEditorFiles();
  const { selectedFile, setSelectedFile } = useCodeEditorSelectedFile();
  const { targetRenameFile, setTargetRenameFile } =
    useCodeEditorTargetRenameFile();

  const { onDeleteFile } = useDeleteFileInSidebar();

  const handleClickFile = (file: File) => {
    if (selectedFile?.id === file.id) return;
    if (selectedFile) updateFile(selectedFile);
    setSelectedFile(file);
  };

  const handleRename = (file: File) => {
    setTargetRenameFile(file);
    toggleModal();
  };

  if (!files?.length) return <NoFiles />;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
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
              <FileIcon fileType={getFileExtensionType(file.name)} />
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

      <CodeEditorRenameFileModal
        targetFile={targetRenameFile}
        isOpen={isOpen}
        onClose={toggleModal}
      />
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
