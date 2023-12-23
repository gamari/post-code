"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useAlert } from "@/src/hooks/useAlert";
import { useFormComment } from "@/src/hooks/comments/useFormComment";
import { useAddCommentToList } from "@/src/hooks/comments/useAddCommentToList";

interface Props {
  codeId: number;
  onSubmit: () => void;
}

export const CodeCommentForm = ({ codeId, onSubmit }: Props) => {
  const { client } = useSupabase();

  const { comment, setComment, saveComment } = useFormComment();

  const { addCommentListToList } = useAddCommentToList();
  const { errorAlert, infoAlert } = useAlert();

  const handleCreateComment = async () => {
    if (!client) return;

    try {
      const retComment = await saveComment(codeId);
      addCommentListToList?.([retComment]);
      setComment("");
      infoAlert("コメントを投稿しました");
      onSubmit();
    } catch (e) {
      errorAlert("コメントの投稿に失敗しました", e);
    }
  };

  return (
    <div>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="コメントを入力"
      />

      <div className="flex flex-row-reverse mt-3">
        <Button onClick={handleCreateComment}>コメントする</Button>
      </div>
    </div>
  );
};
