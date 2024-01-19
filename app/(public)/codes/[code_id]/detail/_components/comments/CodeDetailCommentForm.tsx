"use client";

import React from "react";

import { Button } from "@/src/components/atoms/forms/button";
import { useAlert } from "@/src/hooks/useAlert";
import { useFormComment } from "@/src/hooks/comments/useFormComment";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useCommentList } from "@/src/hooks/comments/useCommentList";
import { useFetchCommentList } from "@/src/hooks/comments/useFetchCommentList";
import { CommentDetail } from "@/src/types";
import { TextareaWithTools } from "@/src/components/organisms/TextareaWithTools";
import { cn } from "@/src/libs/utils";
import { useUploadImage } from "@/src/hooks/useUploadImage";

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
  const { uploadImage, loading } = useUploadImage();

  const handleCreateComment = async () => {
    try {
      let newComments: CommentDetail[] = [];
      if (isNotEmpty()) {
        const latestComment = getLatestComment();
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

  const onPasteImage = async (file: File) => {
    if (file) {
      try {
        const maxFileSize = 5 * 1024 * 1024;
        if (file.size > maxFileSize) {
          errorAlert("ファイルサイズが大きすぎます。5MB以下にしてください。");
          return;
        }

        const imageUrl = await uploadImage(file);
        const markdownImage = `![image](${imageUrl})`;
        return markdownImage;
      } catch (e) {
        errorAlert("画像がアップロードできませんでした。", e);
      } finally {
        //
      }
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <Heading className="mb-3">コメント</Heading>

      <TextareaWithTools
        value={comment}
        setValue={setComment}
        className="mb-3"
        onSubmit={handleCreateComment}
        rows={16}
        placeholder="コメントを入力(...5000)"
        height={400}
        maxLength={5000}
        onPasteImage={onPasteImage}
      />

      <div className="mt-3">
        <Button onClick={handleCreateComment}>コメントする</Button>
      </div>
    </div>
  );
};
