"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Button } from "@/src/components/atoms/buttons/button";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { Modal } from "../../../../../../../../src/components/molecules/displays/Modal";
import { useFormCodeFile } from "@/src/hooks/codes/useFormCodeEditorFile";
import { useAlert } from "@/src/hooks/useAlert";
import { useLoading } from "@/src/hooks/useLoading";
import { CreateButton } from "@/src/components/molecules/buttons/create-button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeEditorNewFileModal = ({ isOpen, onClose }: Props) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const { errorAlert } = useAlert();
  const { code, addFile, setSelectedFile, files } = useCodeEditor();
  const { name, setName, saveFile } = useFormCodeFile();

  const handleAddFile = async () => {
    if (files?.length >= 3) {
      errorAlert("ファイルは3つしか作成できません。");
      return;
    }

    try {
      startLoading();
      const retFile = await saveFile(code?.id);
      addFile(retFile);
      setSelectedFile(retFile);
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
