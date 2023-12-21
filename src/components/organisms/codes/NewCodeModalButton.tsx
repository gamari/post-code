"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/src/components/atoms/buttons/button";
import { fetchCreateCode } from "@/src/libs/externals/supabase/queries/codes";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { Input } from "@/src/components/atoms/forms/input";
import { useToast } from "@/src/components/ui/use-toast";
import { Modal } from "../../molecules/displays/Modal";
import { useModal } from "@/src/hooks/useModal";
import { CreateButton } from "../../molecules/buttons/create-button";
import { useLoading } from "@/src/hooks/useLoading";

// TODO SSRで書く
export const NewCodeModalButton = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const router = useRouter();
  const { isOpen, toggleModal } = useModal();
  const { client } = useSupabase();
  const { toast } = useToast();

  const [name, setName] = useState("");

  const handleCreateCode = async () => {
    if (!client) throw new Error("接続できません。");

    if (!name) {
      toast({
        title: "タイトルを入力してください",
      });
      return;
    }

    // TODO fix type
    const newBadCode: any = {
      title: name,
    };

    try {
      startLoading();
      const retBadCode = await fetchCreateCode(newBadCode, client);

      router.refresh();

      if (retBadCode) {
        router.push(`/dashboard/codes/${retBadCode.id}/edit`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      stopLoading();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateCode();
    }
  };

  return (
    <>
      <CreateButton onClick={toggleModal} label="新規作成" />
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <Input
          type="text"
          placeholder="どんな内容を書きますか？"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-3"
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleCreateCode}>作成</Button>
        <CreateButton
          loading={loading}
          label="作成"
          onClick={handleCreateCode}
        />
      </Modal>
    </>
  );
};
