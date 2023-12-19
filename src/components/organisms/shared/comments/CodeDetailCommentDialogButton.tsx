"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { FaRegComment } from "react-icons/fa6";
import { BadCode } from "@/src/types";
import { useModal } from "@/src/hooks/useModal";
import { CodeDetailCommentModal } from "../../bad-code-detail/comments/code-detail-comment-modal";

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

      <CodeDetailCommentModal
        code={code}
        isOpen={isOpen}
        toggleModal={toggleModal}
      />
    </>
  );
};
