"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Button } from "@/src/components/atoms/buttons/button";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { Modal } from "../../molecules/displays/Modal";
import { useFormCodeFile } from "@/src/hooks/bad-codes-edit/useFormCodeFile";
import { useAlert } from "@/src/hooks/useAlert";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NewFileModal = ({ isOpen, onClose }: Props) => {
  const { errorAlert } = useAlert();
  const { badCode, addFile, setSelectedFile, files } = useCodeEditor();
  const { name, setName, saveFile } = useFormCodeFile();

  const handleAddFile = async () => {
    if (files?.length >= 3) {
      errorAlert("ファイルは3つしか作成できません。");
      return;
    }

    try {
      const retFile = await saveFile(badCode?.id);
      addFile(retFile);
      setSelectedFile(retFile);
      setName("");
      onClose();
    } catch (e) {
      errorAlert("ファイルの作成に失敗しました", e);
    } finally {
      //
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
          />
        </div>

        <div className="flex flex-row mt-3">
          <Button onClick={handleAddFile}>作成</Button>
        </div>
      </div>
    </Modal>
  );
};
