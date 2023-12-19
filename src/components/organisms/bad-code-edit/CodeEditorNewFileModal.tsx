"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Button } from "@/src/components/atoms/buttons/button";
import { fetchAuthUser } from "@/src/libs/externals/supabase/queries/users";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { useModal } from "@/src/hooks/useModal";
import { Modal } from "../../molecules/displays/Modal";
import { PlusIcon } from "../../atoms/icons/PlusIcon";
import { useFormCodeFile } from "@/src/hooks/bad-codes-edit/useFormCodeFile";
import { useAlert } from "@/src/hooks/useAlert";

export const CodeEditorNewFileModal = () => {
  const { client } = useSupabase();
  const { infoAlert, errorAlert } = useAlert();
  const { badCode, addFile, setSelectedFile, files } = useCodeEditor();
  const { isOpen, toggleModal } = useModal();
  const { name, setName, saveFile } = useFormCodeFile();

  const handleAddFile = async () => {
    if (!client) return;

    const user = await fetchAuthUser(client);

    // TODO saveFileの中に入れる
    if (files?.length || 0 >= 3) {
      infoAlert("ファイルは3つまでです");
      return;
    }

    if (!name) {
      infoAlert("ファイル名を入力してください");
      return;
    }

    if (!user?.id) return;
    if (!badCode?.id) return;

    try {
      const retFile = await saveFile(badCode?.id, user.id);
      addFile(retFile);
      setSelectedFile(retFile);
      setName("");
      toggleModal();
    } catch (e) {
      errorAlert("ファイルの作成に失敗しました", e);
    } finally {
      //
    }
  };

  return (
    <>
      <div className="p-1 rounded-full border hover:bg-gray-100 cursor-pointer">
        <PlusIcon className="h-5 w-5" onClick={toggleModal} />
      </div>

      <Modal isOpen={isOpen} onClose={toggleModal}>
        <div className="pt-4">
          <div>
            <Input
              type="text"
              placeholder="ファイル名を入力してください"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-row mt-3">
            <Button onClick={handleAddFile}>作成</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
