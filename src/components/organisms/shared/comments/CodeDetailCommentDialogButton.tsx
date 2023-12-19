"use client";

import React, { useState } from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { FaRegComment } from "react-icons/fa6";
import { CodeCommentForm } from "./CodeCommentForm";
import { BadCode } from "@/src/types";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { useModal } from "@/src/hooks/useModal";

interface Props {
  code: BadCode;
}

export const CodeDetailCommentDialogButton = ({ code }: Props) => {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <Button variant="secondary" onClick={toggleModal}>
        <FaRegComment className="h-4 w-4 mr-2" />
        コメントする
      </Button>

      <Modal isOpen={isOpen} onClose={toggleModal}>
        <div>
          <Button onClick={toggleModal}>閉じる</Button>
        </div>
      </Modal>
    </>
  );
};
