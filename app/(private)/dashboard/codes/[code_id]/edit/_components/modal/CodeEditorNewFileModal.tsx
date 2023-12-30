"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Modal } from "../../../../../../../../src/components/molecules/displays/Modal";
import { useFormFileOfEditor } from "@/src/hooks/codes/editors/useFormFileOfEditor";
import { useAlert } from "@/src/hooks/useAlert";
import { useLoading } from "@/src/hooks/useLoading";
import { CreateButton } from "@/src/components/molecules/buttons/create-button";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useCodeEditorSelectedFile } from "@/src/hooks/codes/editors/useCodeEditorSelectedFile";
import { useCodeEditor } from "@/src/hooks/codes/editors/useCodeEditor";
import { useCodeEditorFiles } from "@/src/hooks/codes/editors/useCodeEditorFiles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeEditorNewFileModal = ({ isOpen, onClose }: Props) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const { errorAlert } = useAlert();

  const { code } = useCodeEditor();
  const { selectedFile, setSelectedFile } = useCodeEditorSelectedFile();
  const { files, addFile, updateFile } = useCodeEditorFiles();

  const { name, setName, saveFile } = useFormFileOfEditor();

  const handleAddFile = async () => {
    if (files?.length >= 3) {
      errorAlert("ファイルは3つしか作成できません。");
      return;
    }

    try {
      startLoading();
      const retFile = await saveFile(code?.id);

      if (selectedFile) updateFile(selectedFile);

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
    <Modal isOpen={isOpen} onClose={onClose} className="w-[400px]">
      <Heading className="mb-3">ファイル追加</Heading>

      <div>
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
            maxLength={80}
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
