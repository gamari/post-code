"use client";

import React from "react";

import { length } from "@/src/libs/strings";
import { useSaveCodeEditor } from "@/src/hooks/codes/editors/useSaveCodeEditor";
import { useAlert } from "@/src/hooks/useAlert";
import { SaveButton } from "../../../../../../../../../src/components/molecules/buttons/save-button";
import { useModal } from "@/src/hooks/useModal";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { CodeEditorSaveEditor } from "./CodeEditorSaveEditor";
import { Button } from "@/src/components/atoms/buttons/button";
import { useRouter } from "next/navigation";
import { useCodeEditor } from "@/src/hooks/codes/editors/useCodeEditor";
import { Flex } from "@/src/components/atoms/containers/Flex";
import Link from "next/link";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";

// TODO save buttonを抜き出す
export const CodeEditorSaveModalButton = () => {
  const router = useRouter();
  const { errorAlert } = useAlert();

  const { code } = useCodeEditor();
  const { isOpen, toggleModal } = useModal();
  const { loading, saveEditor } = useSaveCodeEditor();

  const handleOnSave = async () => {
    try {
      if (length(code?.description) > 2000) {
        errorAlert("説明文は2000文字以内で入力してください");
        return;
      }

      const retCode = await saveEditor();

      if (retCode?.id) {
        toggleModal();
        router.refresh();

        // FIX 上手く効かないので仕方なくlocationを使う
        window.location.href = `/codes/${retCode?.id}/detail`;
      }
    } catch (error) {
      errorAlert("保存に失敗しました", error);
    }
  };

  const onClick = () => {
    if (!code?.title) {
      errorAlert("タイトルを入力してください");
      return;
    }

    if (code?.title.length > 60) {
      errorAlert("タイトルは60文字以内で入力してください");
      return;
    }

    toggleModal();
  };

  return (
    <>
      <SaveButton label="保存" onClick={onClick} loading={loading} />

      {/* TODO コンポーネント化する */}
      <Modal isOpen={isOpen} onClose={toggleModal} className="w-[700px]">
        <CodeEditorSaveEditor />

        <Flex justifyContent="between" gap={8} className="mt-3">
          <Flex gap={8}>
            <SaveButton label="保存" onClick={handleOnSave} loading={loading} />
            <Button variant="outline" onClick={toggleModal}>
              コードに戻る
            </Button>
          </Flex>

          <Button variant="outline" onClick={toggleModal}>
            <Link href={CODES_DETAIL_URL(code?.id)} target={"_blank"}>詳細画面へ</Link>
          </Button>
        </Flex>
      </Modal>
    </>
  );
};
