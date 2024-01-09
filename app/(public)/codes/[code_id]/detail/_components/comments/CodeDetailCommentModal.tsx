"use client";

import React from "react";

import { CommentModal } from "@/src/components/organisms/comments/comment-modal";
import { useCodeDetailCommentModalContext } from "@/src/contexts/CodeDetailCommentModalProvider";
import { Code } from "@/src/types";

interface Props {
  code: Code;
}

export const CodeDetailCommentModal = ({ code }: Props) => {
  const { isOpen, toggleModal } = useCodeDetailCommentModalContext();
  return <CommentModal code={code} isOpen={isOpen} toggleModal={toggleModal} />;
};
