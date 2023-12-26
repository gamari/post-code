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
import { Heading } from "../../atoms/texts/heading";
import { useFormCode } from "@/src/hooks/codes/useFormCode";

// TODO SSRで書く
export const NewCodeModalButton = () => {
  const { isOpen, toggleModal } = useModal();

  const { register, handleSubmit, loading } = useFormCode();

  return (
    <>
      <CreateButton onClick={toggleModal} label="新規作成" />
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <form onSubmit={handleSubmit}>
          <Heading className="mb-3">コード作成</Heading>
          <div className="mb-2">
            <Input
              {...register("title")}
              autoFocus
              placeholder="どんな内容を書きますか？"
            />
          </div>
          <CreateButton type="submit" label="コードの追加" loading={loading} />
        </form>
      </Modal>
    </>
  );
};
