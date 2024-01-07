"use client";

import React, { useState } from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Modal } from "../../molecules/displays/Modal";
import { useModal } from "@/src/hooks/useModal";
import { CreateButton } from "../../molecules/buttons/create-button";
import { Heading } from "../../atoms/texts/heading";
import { useFormCode } from "@/src/hooks/codes/useFormCode";
import { ErrorText } from "../../atoms/texts/error-text";

export const NewCodeModalButton = () => {
  const { isOpen, toggleModal } = useModal();

  const { register, handleSubmit, loading, errors } = useFormCode();

  return (
    <>
      <CreateButton onClick={toggleModal} label="作成" />
      <Modal isOpen={isOpen} onClose={toggleModal} className="w-[400px]">
        <form
          onSubmit={async (data) => {
            await handleSubmit(data);
            toggleModal();
          }}
        >
          <Heading className="mb-3">記事作成</Heading>
          <div className="mb-2">
            <Input
              {...register("title")}
              autoFocus
              placeholder="どんな内容を書きますか？"
              className="block mb-2"
            />
            <ErrorText text={errors.title?.message} />
          </div>

          <CreateButton type="submit" label="コードの追加" loading={loading} />
        </form>
      </Modal>
    </>
  );
};
