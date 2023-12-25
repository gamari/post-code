"use client";

import React from "react";

import { useSaveEditorCode } from "@/src/hooks/codes/editors/useSaveEditorCode";
import { useAlert } from "@/src/hooks/useAlert";
import { SaveButton } from "../../../../src/components/molecules/buttons/save-button";
import { useModal } from "@/src/hooks/useModal";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { CodeDetailInfoEditor } from "./CodeDetailInfoEditor";
import { Button } from "@/src/components/atoms/buttons/button";

export const CodeEditorSaveModalButton = () => {
  const { isOpen, toggleModal } = useModal();

  const { loading, saveEditor } = useSaveEditorCode();
  const { errorAlert, infoAlert } = useAlert();

  const handleOnSave = async () => {
    try {
      await saveEditor();
      // infoAlert("保存しました");
      toggleModal();
    } catch (error) {
      errorAlert("保存に失敗しました", error);
    }
  };

  return (
    <>
      <SaveButton label="保存" onClick={toggleModal} loading={loading} />

      <Modal isOpen={isOpen} onClose={toggleModal}>
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
