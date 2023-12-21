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

// TODO SSRで書く
export const NewCodeModalButton = () => {
  const router = useRouter();
  const { isOpen, toggleModal } = useModal();
  const { client } = useSupabase();
  const { toast } = useToast();

  const [name, setName] = useState("");

  const handleCreateCode = async (e: any) => {
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

    const retBadCode = await fetchCreateCode(newBadCode, client);

    router.refresh();

    if (retBadCode) {
      router.push(`/dashboard/codes/${retBadCode.id}/edit`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateCode(e);
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
      </Modal>
    </>
  );
};