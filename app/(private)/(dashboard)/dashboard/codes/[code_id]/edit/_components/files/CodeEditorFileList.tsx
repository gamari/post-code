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
import { useSelectCodeFile } from "@/src/hooks/codes/useSelectCodeEditorFile";
import { useGetEditorSelectedFile } from "@/src/hooks/codes/editors/useGetEditorSelectedFile";
import { useAlert } from "@/src/hooks/useAlert";
import { sortAscByName, sortDescByName } from "@/src/libs/sortes";

interface Props {
  files: File[];
}

export const CodeEditorFileList = ({ files }: Props) => {
  const { errorAlert } = useAlert();

  const { selectedFile } = useGetEditorSelectedFile();
  const { updateFile } = useUpdateEditorFile();
  const { deleteFileInEditor } = useDeleteFileInEditor();
  const { selectFile } = useSelectCodeFile();

  const [isEditing, setIsEditing] = useState<File | null>(null);
  const [editingName, setEditingName] = useState("");

  const handleDeleteFile = async (file: File) => {
    if (!confirm("本当に削除しますか？")) return;
    deleteFileInEditor(file);
  };

  const onClickFile = (file: File) => {
    selectFile(file);
  };

  const handleRename = (file: File) => {
    setIsEditing(file);
    setEditingName(file.name);
  };

  const saveName = () => {
    if (isEditing) {
      if (!editingName) {
        errorAlert("ファイル名を入力してください");
        setIsEditing(null);
        return;
      }
      setIsEditing(null);
      updateFile({ ...isEditing, name: editingName });
    }
  };

  if (!files?.length)
    return <div className="p-2 text-gray-600">ファイルがありません</div>;

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
              {isEditing?.id === file.id ? (
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  onBlur={saveName}
                  className="w-full focus:border-none outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveName();
                  }}
                  autoFocus
                />
              ) : (
                file.name
              )}
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={() => handleRename(file)}>
              名前変更
            </ContextMenuItem>

            <ContextMenuItem
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteFile?.(file);
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
