"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { useAlert } from "@/src/hooks/useAlert";
import { useFormComment } from "@/src/hooks/comments/useFormComment";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useCommentList } from "@/src/hooks/comments/useCommentList";
import { useFetchCommentList } from "@/src/hooks/comments/useFetchCommentList";
import { CommentDetail } from "@/src/types";

interface Props {
  codeId: number;
  onSubmit: () => void;
}

export const CodeCommentForm = ({ codeId, onSubmit }: Props) => {
  const { errorAlert, infoAlert } = useAlert();

  const { comment, setComment, saveComment } = useFormComment();
  const { addCommentList, getLatestComment, isNotEmpty } = useCommentList();
  const { fetchCodeListAfterDate } = useFetchCommentList();

  const handleCreateComment = async () => {
    try {
      const retComment = await saveComment(codeId);
      let newComments: CommentDetail[] = [];
      if (isNotEmpty()) {
        const latestComment = getLatestComment();
        const retComments = await fetchCodeListAfterDate(
          latestComment?.created_at || ""
        );
        newComments = [...retComments];
      }

      addCommentList?.([...newComments, retComment]);
      setComment("");
      infoAlert("コメントを投稿しました");
      onSubmit();
    } catch (e) {
      errorAlert("コメントの投稿に失敗しました", e);
    }
  };

  return (
    <div className="w-full">
      <Heading className="mb-3">コメント</Heading>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="コメントを入力"
        rows={16}
        onSubmit={handleCreateComment}
      />

      <div className="flex flex-row-reverse mt-3">
        <Button onClick={handleCreateComment}>コメントする</Button>
      </div>
    </div>
  );
};
