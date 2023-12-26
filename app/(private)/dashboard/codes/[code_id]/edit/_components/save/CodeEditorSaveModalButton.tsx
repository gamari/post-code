"use client";

import React from "react";

import { useSaveEditorCode } from "@/src/hooks/codes/editors/useSaveEditorCode";
import { useAlert } from "@/src/hooks/useAlert";
import { SaveButton } from "../../../../../../../../src/components/molecules/buttons/save-button";
import { useModal } from "@/src/hooks/useModal";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { CodeDetailInfoEditor } from "./CodeEditorSaveEditor";
import { Button } from "@/src/components/atoms/buttons/button";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";

// TODO save buttonを抜き出す
export const CodeEditorSaveModalButton = () => {
  const { code } = useGetEditorCode();
  const { isOpen, toggleModal } = useModal();
  const { loading, saveEditor } = useSaveEditorCode();
  const { errorAlert } = useAlert();

  const handleOnSave = async () => {
    try {
      await saveEditor();
      toggleModal();
    } catch (error) {
      errorAlert("保存に失敗しました", error);
    }
  };

  return (
    <>
      <SaveButton
        label="保存"
        onClick={() => {
          if (!code?.title) {
            errorAlert("タイトルを入力してください");
            return;
          }
          toggleModal();
        }}
        loading={loading}
      />

      <Modal isOpen={isOpen} onClose={toggleModal} className="w-[500px]">
        <CodeDetailInfoEditor />

        <div className="flex flex-row items-center mt-3 gap-2">
          <SaveButton
            label="保存する"
            onClick={handleOnSave}
            loading={loading}
          />
          <Button variant="outline" onClick={toggleModal}>
            閉じる
          </Button>
        </div>
      </Modal>
    </>
  );
};
