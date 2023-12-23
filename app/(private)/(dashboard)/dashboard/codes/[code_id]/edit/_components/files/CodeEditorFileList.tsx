import React, { useState } from "react";

import { File } from "@/src/types";
import { cn } from "@/src/libs/utils";
import { FileIcon } from "../../../../../../../../../src/components/molecules/displays/file-icon";
import { getFileType } from "@/src/libs/editors";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/src/components/ui/context-menu";
import { Typo } from "@/src/components/atoms/texts/typo";
import { useUpdateEditorFile } from "@/src/hooks/codes/editors/useUpdateEditorFile";
import { useDeleteFileInEditor } from "@/src/hooks/codes/editors/useDeleteFileInEditor";
import { useSelectEditorFile } from "@/src/hooks/codes/editors/useSelectEditorFile";
import { useGetEditorSelectedFile } from "@/src/hooks/codes/editors/getter/useGetEditorSelectedFile";
import { useAlert } from "@/src/hooks/useAlert";
import { sortAscByName } from "@/src/libs/sortes";
import { CodeEditorNewFileModalButton } from "../CodeEditorNewFileModalButton";
import { useGetEditorFiles } from "@/src/hooks/codes/editors/getter/useGetEditorFiles";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { useModal } from "@/src/hooks/useModal";
import { Button } from "@/src/components/atoms/buttons/button";
import { Input } from "@/src/components/atoms/forms/input";
import { Heading } from "@/src/components/atoms/texts/heading";
import { RenameFileModal } from "./RenameFileModal";

interface Props {}

export const CodeEditorFileList = ({}: Props) => {
  const { isOpen, toggleModal } = useModal();

  const { files } = useGetEditorFiles();
  const { selectedFile } = useGetEditorSelectedFile();
  const { deleteFileInEditor } = useDeleteFileInEditor();
  const { selectFile } = useSelectEditorFile();

  const [targetFile, setTargetFile] = useState<File | null>(null);

  const handleDeleteFile = async (file: File) => {
    if (!confirm("本当に削除しますか？")) return;
    deleteFileInEditor(file);
  };

  const handleClickFile = (file: File) => {
    selectFile(file);
  };

  const handleRename = (file: File) => {
    setTargetFile(file);
    toggleModal();
  };

  if (!files?.length) return <NoFiles />;

  return (
    <div className="flex flex-col gap-1">
      {files?.sort(sortAscByName).map((file) => (
        <ContextMenu key={file.id}>
          <ContextMenuTrigger>
            <div
              className={cn(
                "flex flex-row items-center cursor-pointer hover:bg-gray-200 p-2 rounded-lg gap-2",
                selectedFile?.id === file.id && "bg-gray-200"
              )}
              onClick={() => handleClickFile(file)}
            >
              <FileIcon fileType={getFileType(file.name)} />
              {file.name}
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
                handleDeleteFile?.(file);
              }}
              className="mt-3 cursor-pointer"
            >
              <Typo className="text-red-500" text="削除" />
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}

      <RenameFileModal
        targetFile={targetFile}
        isOpen={isOpen}
        onClose={toggleModal}
      />
    </div>
  );
};

const NoFiles = () => {
  return (
    <div className="p-2 text-gray-600 flex items-center gap-3">
      ファイルを追加
      <CodeEditorNewFileModalButton />
    </div>
  );
};
