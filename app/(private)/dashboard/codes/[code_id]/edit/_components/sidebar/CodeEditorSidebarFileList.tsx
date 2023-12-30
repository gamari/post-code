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
import { useSelectEditorFile } from "@/src/hooks/codes/editors/useSelectEditorFile";
import { useGetEditorSelectedFile } from "@/src/hooks/codes/editors/getter/useGetEditorSelectedFile";
import { sortAscByName } from "@/src/libs/sortes";
import { useGetEditorFiles } from "@/src/hooks/codes/editors/getter/useGetEditorFiles";
import { useModal } from "@/src/hooks/useModal";
import { CodeEditorRenameFileModal } from "../modal/CodeEditorRenameFileModal";
import { limitString } from "@/src/libs/strings";
import { FILE_TEXT_LIMIT } from "@/src/libs/constants/limits";
import { useDeleteFileInSidebar } from "../../../../../../../../src/hooks/codes/editors/sidebar/useDeleteFileInSidebar";
import { useSelectFile } from "@/src/hooks/useSelectFile";

interface Props {
  className?: string;
}

// TODO リファクタリングする
export const CodeEditorSidebarFileList = ({ className }: Props) => {
  const { isOpen, toggleModal } = useModal();

  const { files } = useGetEditorFiles();
  const { selectedFile } = useGetEditorSelectedFile();
  const { selectFile } = useSelectEditorFile();
  const { targetFile, selectFile: selectRenameFile } = useSelectFile();

  const { onDeleteFile } = useDeleteFileInSidebar();

  const handleClickFile = (file: File) => {
    selectFile(file);
  };

  const handleRename = (file: File) => {
    selectRenameFile(file);
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
        targetFile={targetFile}
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
