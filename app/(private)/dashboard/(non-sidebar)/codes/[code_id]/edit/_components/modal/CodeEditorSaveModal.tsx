"use client";

import React from "react";
import Link from "next/link";

import { length } from "@/src/libs/strings";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { SaveButton } from "@/src/components/molecules/buttons/save-button";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";
import { CodeEditorSaveEditor } from "../save/CodeEditorSaveEditor";
import { useRouter } from "next/navigation";
import { useAlert } from "@/src/hooks/useAlert";
import { useCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditor";
import { useSaveCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useSaveCodeEditor";
import { Button } from "@/src/components/atoms/buttons/button";
import { useCodeEditorSaveModal } from "../../_hooks/modal/useCodeEditorSaveModal";

export const CodeEditorSaveModal = () => {
  const router = useRouter();
  const { errorAlert } = useAlert();

  const { code } = useCodeEditor();
  const { isSaveOpen, toggleSaveModal } = useCodeEditorSaveModal();
  const { loading, saveEditor } = useSaveCodeEditor();

  const handleOnSave = async () => {
    try {
      const retCode = await saveEditor();

      if (retCode?.id) {
        toggleSaveModal();
        router.refresh();

        // FIX 上手く効かないので仕方なくlocationを使う
        window.location.href = `/codes/${retCode?.id}/detail`;
      }
    } catch (error) {
      errorAlert("保存に失敗しました", error);
    }
  };

  return (
    <Modal isOpen={isSaveOpen} onClose={toggleSaveModal} className="w-[700px]">
      <CodeEditorSaveEditor />

      <Flex justifyContent="between" gap={8} className="mt-3">
        <Flex gap={8}>
          <SaveButton label="保存" onClick={handleOnSave} loading={loading} />
          <Button variant="outline" onClick={toggleSaveModal}>
            コードに戻る
          </Button>
        </Flex>

        <Button variant="outline" onClick={toggleSaveModal}>
          <Link href={CODES_DETAIL_URL(code?.id)} target={"_blank"}>
            詳細画面へ
          </Link>
        </Button>
      </Flex>
    </Modal>
  );
};
