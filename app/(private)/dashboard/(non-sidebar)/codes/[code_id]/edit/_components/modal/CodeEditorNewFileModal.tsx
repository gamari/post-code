"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Modal } from "../../../../../../../../../src/components/molecules/displays/Modal";
import { useFormFileOfEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useFormFileOfEditor";
import { useAlert } from "@/src/hooks/useAlert";
import { useLoading } from "@/src/hooks/useLoading";
import { CreateButton } from "@/src/components/molecules/forms/buttons/create-button";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useCodeEditorSelectedFile } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditorSelectedFile";
import { useCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditor";
import { useCodeEditorFiles } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditorFiles";
import { NEW_FILE_LIMIT } from "@/src/libs/constants/limits";
import { useCodeEditorNewFileModal } from "../../_hooks/modal/useCodeEditorNewFileModal";
import { useRouter } from "next/navigation";

interface Props {}

export const CodeEditorNewFileModal = ({}: Props) => {
  const router = useRouter();
  const { loading, startLoading, stopLoading } = useLoading();
  const { errorAlert } = useAlert();

  const { isNewFileOpen, toggleNewFileModal } = useCodeEditorNewFileModal();

  const { code } = useCodeEditor();
  const { selectedFile, setSelectedFile } = useCodeEditorSelectedFile();
  const { files, addFile, updateFile } = useCodeEditorFiles();
  const { name, setName, saveFile } = useFormFileOfEditor();

  const handleAddFile = async () => {
    if (files?.length >= NEW_FILE_LIMIT) {
      errorAlert(`ファイルは${NEW_FILE_LIMIT}個までしか作成できません。`);
      return;
    }

    try {
      startLoading();
      const retFile = await saveFile(code?.id);

      if (selectedFile) updateFile(selectedFile);
      router.refresh();

      setSelectedFile(retFile);
      addFile(retFile);
      setName("");
      toggleNewFileModal();
    } catch (e) {
      errorAlert("ファイルの作成に失敗しました", e);
    } finally {
      stopLoading();
    }
  };

  return (
    <Modal
      isOpen={isNewFileOpen}
      onClose={toggleNewFileModal}
      className="w-[400px]"
    >
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
