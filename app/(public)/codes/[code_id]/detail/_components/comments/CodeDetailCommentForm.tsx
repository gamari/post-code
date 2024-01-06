"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useAlert } from "@/src/hooks/useAlert";
import { useFormComment } from "@/src/hooks/comments/useFormComment";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useCommentList } from "@/src/hooks/comments/useCommentList";
import { useFetchCommentList } from "@/src/hooks/comments/useFetchCommentList";

interface Props {
  codeId: number;
  onSubmit: () => void;
}

export const CodeCommentForm = ({ codeId, onSubmit }: Props) => {
  const { client } = useSupabase();
  const { errorAlert, infoAlert } = useAlert();

  const { comment, setComment, saveComment } = useFormComment();
  const { addCommentList, getLatestComment } = useCommentList();
  const { fetchCodeListAfterDate } = useFetchCommentList();

  const handleCreateComment = async () => {
    if (!client) return;

    try {
      const retComment = await saveComment(codeId);
      // TODO その前にコメントを取得して新しいものを追加する
      // TODO 最終時刻以降のものを選択する

      // TODO
      const latestComment = getLatestComment();
      const newComments = await fetchCodeListAfterDate(
        latestComment?.created_at || ""
      );

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
        rows={8}
        onSubmit={handleCreateComment}
      />

      <div className="flex flex-row-reverse mt-3">
        <Button onClick={handleCreateComment}>コメントする</Button>
      </div>
    </div>
  );
};
