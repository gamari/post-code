"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { useAlert } from "@/src/hooks/useAlert";
import { useFormComment } from "@/src/hooks/comments/useFormComment";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useCommentList } from "@/src/hooks/comments/useCommentList";
import { useFetchCommentList } from "@/src/hooks/comments/useFetchCommentList";
import { CommentDetail } from "@/src/types";
import { TextareaWithPreview } from "@/src/components/organisms/TextareaWithPreview";
import { cn } from "@/src/libs/utils";

interface Props {
  codeId: number;
  onSubmit: () => void;
  className?: string;
}

export const CodeCommentForm = ({ codeId, onSubmit, className }: Props) => {
  const { errorAlert, infoAlert } = useAlert();

  const { comment, setComment, saveComment } = useFormComment();
  const { addCommentList, getLatestComment, isNotEmpty } = useCommentList();
  const { fetchCodeListAfterDate } = useFetchCommentList();

  const handleCreateComment = async () => {
    try {
      let newComments: CommentDetail[] = [];
      if (isNotEmpty()) {
        const latestComment = getLatestComment();
        console.log(latestComment);
        const retComments = await fetchCodeListAfterDate(
          latestComment?.created_at || ""
        );
        newComments = [...retComments];
      }

      const retComment = await saveComment(codeId);

      addCommentList?.([...newComments, retComment]);
      setComment("");
      infoAlert("コメントを投稿しました");
      onSubmit();
    } catch (e) {
      errorAlert("コメントの投稿に失敗しました", e);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <Heading className="mb-3">コメント</Heading>

      <TextareaWithPreview
        value={comment}
        setValue={setComment}
        className="mb-3"
        onSubmit={handleCreateComment}
        rows={16}
        placeholder="コメントを入力"
      />

      <div className="mt-3">
        <Button onClick={handleCreateComment}>コメントする</Button>
      </div>
    </div>
  );
};
