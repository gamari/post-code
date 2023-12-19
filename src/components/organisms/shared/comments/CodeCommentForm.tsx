"use client";

import { Button } from "@/src/components/atoms/buttons/button";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCreateComment } from "@/src/libs/externals/supabase/queries/comments";
import React from "react";
import { useCodeCommentList } from "../../../../contexts/CodeCommentListProvider";
import { useAlert } from "@/src/hooks/useAlert";
import { useFormComment } from "@/src/hooks/bad-codes-detail/useFormComment";

interface Props {
  codeId: number;
  onSubmit: () => void;
}

export const CodeCommentForm = ({ codeId, onSubmit }: Props) => {
  const { client } = useSupabase();

  const { comment, setComment, saveComment } = useFormComment();
  const { addComments } = useCodeCommentList();
  const { errorAlert, infoAlert } = useAlert();


  const handleCreateComment = async () => {
    if (!client) return;

    try {
      const retComment = await saveComment(codeId);
      addComments([retComment]);
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
