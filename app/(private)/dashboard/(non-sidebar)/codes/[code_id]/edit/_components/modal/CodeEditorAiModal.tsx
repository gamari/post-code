import React from "react";
import { useCodeEditorModalContext } from "../../_contexts/CodeEditorModalProvider";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { Button } from "@/src/components/atoms/forms/button";
import { useAi } from "@/src/hooks/ai/useAi";
import { useCodeEditor } from "../../_hooks/useCodeEditor";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { useAlert } from "@/src/hooks/useAlert";

export const CodeEditorAiModal = () => {
  const { errorAlert } = useAlert();
  const { createConcrete, loading } = useAi();
  const { code, addDescription } = useCodeEditor();
  const { isAiOpen, toggleAiModal } = useCodeEditorModalContext();

  const handleOnConcrete = async () => {
    try {
        const retText = await createConcrete(code?.description || "");
        // TODO ファイルで作成するように変更する
        addDescription(`


`)
        addDescription(retText);
        toggleAiModal();
    } catch (e) {
        errorAlert("エラーが発生しました。", e);
    }
  };

  return (
    <Modal isOpen={isAiOpen} onClose={toggleAiModal} className="w-[700px]">
      <Flex direction="column" alignItems="center">
        <Button onClick={handleOnConcrete} disabled={loading}>
          AIに具体例を作成してもらう
        </Button>
      </Flex>
    </Modal>
  );
};
