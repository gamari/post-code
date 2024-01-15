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
import { useDeleteFileInSidebar } from "../../_hooks/sidebar/useDeleteFileInSidebar";
import { useCodeEditorFiles } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditorFiles";
import { useCodeEditorSelectedFile } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditorSelectedFile";
import { useCodeEditorModalContext } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_contexts/CodeEditorModalProvider";
import { useBottomContainer } from "@/src/hooks/useBottomContainer";
import { useCodeEditorRenameModal } from "../../_hooks/modal/useCodeEditorRenameModal";
import { useCodeEditor } from "../../_hooks/useCodeEditor";

interface Props {
  className?: string;
}

export const CodeEditorSidebarFileList = ({ className }: Props) => {
  const { openContainer } = useBottomContainer();
  const { toggleRenameModal, setTargetFile } = useCodeEditorRenameModal();

  const { addDescription } = useCodeEditor();
  const { files, updateFile } = useCodeEditorFiles();
  const { selectedFile, setSelectedFile } = useCodeEditorSelectedFile();

  const { onDeleteFile } = useDeleteFileInSidebar();

  const handleClickFile = (file: File) => {
    if (selectedFile?.id === file.id) {
      updateFile(selectedFile);
      setSelectedFile(undefined);
      return;
    }

    if (selectedFile) updateFile(selectedFile);
    setSelectedFile(file);
    openContainer();
  };

  const handleRename = (file: File) => {
    setTargetFile(file);
    toggleRenameModal();
  };

  const handleQuote = (file: File) => {
    const text = `

!file[${file.name}]`;
    addDescription(text);
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
                handleQuote(file);
              }}
              className="cursor-pointer hover:bg-gray-100"
            >
              引用
            </ContextMenuItem>
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
              className="mt-2 cursor-pointer border-t"
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
