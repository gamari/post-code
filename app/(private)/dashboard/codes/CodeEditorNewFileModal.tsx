"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Modal } from "../../../../src/components/molecules/displays/Modal";
import { useFormFileOfEditor } from "@/src/hooks/codes/editors/useFormFileOfEditor";
import { useAlert } from "@/src/hooks/useAlert";
import { useLoading } from "@/src/hooks/useLoading";
import { CreateButton } from "@/src/components/molecules/buttons/create-button";
import { useGetEditorFiles } from "@/src/hooks/codes/editors/getter/useGetEditorFiles";
import { useAddFileToEditorFiles } from "@/src/hooks/codes/editors/useAddFileToEditorFiles";
import { useSetEditorSelectedFile } from "@/src/hooks/codes/editors/setter/useSetEditorSelectedFile";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { useSetEditorFile } from "@/src/hooks/codes/editors/setter/useSetEditorFile";
import { useGetEditorSelectedFile } from "@/src/hooks/codes/editors/getter/useGetEditorSelectedFile";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeEditorNewFileModal = ({ isOpen, onClose }: Props) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const { errorAlert } = useAlert();

  const { code } = useGetEditorCode();
  const { files } = useGetEditorFiles();
  const { addFile } = useAddFileToEditorFiles();
  const { selectedFile } = useGetEditorSelectedFile();
  const { setSelectedFile } = useSetEditorSelectedFile();
  const { setFile } = useSetEditorFile();

  const { name, setName, saveFile } = useFormFileOfEditor();

  const handleAddFile = async () => {
    if (files?.length >= 3) {
      errorAlert("ファイルは3つしか作成できません。");
      return;
    }

    try {
      startLoading();
      const retFile = await saveFile(code?.id);
      setFile(selectedFile);
      setSelectedFile(retFile);
      addFile(retFile);
      setName("");
      onClose();
    } catch (e) {
      errorAlert("ファイルの作成に失敗しました", e);
    } finally {
      stopLoading();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="pt-4">
        <div>
          <Input
            type="text"
            placeholder="ファイル名を入力してください"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddFile();
              }
            }}
          />
        </div>

        <div className="flex flex-row mt-3">
          <CreateButton
            loading={loading}
            label="作成"
            onClick={handleAddFile}
          />
        </div>
      </div>
    </Modal>
  );
};
