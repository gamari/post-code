import React from "react";
import { useCodeEditorModalContext } from "../../_contexts/CodeEditorModalProvider";
import { Modal } from "@/src/components/molecules/displays/Modal";

export const CodeEditorAiModal = () => {
  const { isAiOpen, toggleAiModal } = useCodeEditorModalContext();

  return (
    <Modal isOpen={isAiOpen} onClose={toggleAiModal} className="w-[700px]">
      AIモーダル
    </Modal>
  );
};
