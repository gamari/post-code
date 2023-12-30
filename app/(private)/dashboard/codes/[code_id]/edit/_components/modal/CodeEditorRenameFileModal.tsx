import React, { useEffect, useState } from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { Input } from "@/src/components/atoms/forms/input";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { useUpdateEditorFile } from "@/src/hooks/codes/editors/useUpdateEditorFile";
import { useAlert } from "@/src/hooks/useAlert";
import { File } from "@/src/types";
import { useGetEditorSelectedFile } from "@/src/hooks/codes/editors/getter/useGetEditorSelectedFile";
import { useSetEditorSelectedFile } from "@/src/hooks/codes/editors/setter/useSetEditorSelectedFile";

interface Props {
  targetFile: File | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CodeEditorRenameFileModal = ({ targetFile, isOpen, onClose }: Props) => {
  const [editingName, setEditingName] = useState("");

  const { errorAlert } = useAlert();
  const { updateFile } = useUpdateEditorFile();
  const { selectedFile } = useGetEditorSelectedFile();
  const { setSelectedFile } = useSetEditorSelectedFile();

  useEffect(() => {
    setEditingName(targetFile?.name || "");
  }, [targetFile]);

  const saveName = () => {
    if (targetFile) {
      if (!editingName) {
        errorAlert("ファイル名を入力してください");
        return;
      }

      if (selectedFile?.id === targetFile.id) {
        updateFile({ ...selectedFile, name: editingName });
        setSelectedFile({ ...selectedFile, name: editingName });
      } else {
        updateFile({ ...targetFile, name: editingName });
      }
    }
  };

  const handleRename = () => {
    saveName();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-[400px]">
      <Heading className="mb-3">ファイル名の変更</Heading>
      <div>
        <Input
          type="text"
          className="p-2 w-full"
          value={editingName}
          onChange={(e) => setEditingName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleRename();
            }
          }}
        />
      </div>
      <Button onClick={handleRename} className="mt-2">
        変更する
      </Button>
    </Modal>
  );
};