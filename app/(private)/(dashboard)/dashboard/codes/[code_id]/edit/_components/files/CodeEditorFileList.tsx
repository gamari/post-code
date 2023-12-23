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

interface Props {}

export const CodeEditorFileList = ({}: Props) => {
  const { errorAlert } = useAlert();
  const { isOpen, toggleModal } = useModal();

  const { files } = useGetEditorFiles();
  const { selectedFile } = useGetEditorSelectedFile();
  const { updateFile } = useUpdateEditorFile();
  const { deleteFileInEditor } = useDeleteFileInEditor();
  const { selectFile } = useSelectEditorFile();

  const [targetFile, setTargetFile] = useState<File | null>(null);
  const [editingName, setEditingName] = useState("");

  const onDeleteFile = async (file: File) => {
    if (!confirm("本当に削除しますか？")) return;
    deleteFileInEditor(file);
  };

  const onClickFile = (file: File) => {
    selectFile(file);
  };

  const onRename = (file: File) => {
    setEditingName(file.name);
  };

  const saveName = () => {
    if (targetFile) {
      if (!editingName) {
        errorAlert("ファイル名を入力してください");
        return;
      }
      updateFile({ ...targetFile, name: editingName });
    }
  };

  const handleRename = () => {
    saveName();
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
              onClick={() => onClickFile(file)}
            >
              <FileIcon fileType={getFileType(file.name)} />
              {file.name}
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem
              onClick={() => {
                toggleModal();
                onRename(file);
                setTargetFile(file);
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

      <Modal isOpen={isOpen} onClose={toggleModal}>
        <Heading className="mb-3">ファイル名変更</Heading>
        <div>
          <Input
            type="text"
            className="p-2 w-full"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
        </div>
        <Button onClick={handleRename} className="mt-2">
          変更する
        </Button>
      </Modal>
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
