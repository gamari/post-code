"use client";

import React from "react";

import { Comment } from "@/src/types";
import { CommentPanel } from "../../../../../../../src/components/organisms/comments/comment-panel";
import { useGetCommentList } from "@/src/hooks/comments/useGetCommentList";
import { sortDescByCreatedAt } from "@/src/libs/sortes";
import { useDeleteComment } from "@/src/hooks/comments/useDeleteComment";
import { useSetCommentList } from "@/src/hooks/comments/useSetCommentList";

interface Props {}

export const CodeDetailCommentPanelList = ({}: Props) => {
  const { commentList } = useGetCommentList();
  const { setCommentList } = useSetCommentList();
  const { deleteComment } = useDeleteComment();
  const sortedComments = commentList?.sort(sortDescByCreatedAt);

  if (!commentList?.length)
    return (
      <div className="p-6 border-b">
        <p className="text-gray-500">まだコメントはありません</p>
      </div>
    );

  const handleDeleteComment = async (comment: Comment) => {
    await deleteComment(comment);
    setCommentList(commentList.filter((c) => c.id !== comment.id));
  };

  return (
    <div>
      {sortedComments?.map((comment) => (
        <CommentPanel
          comment={comment}
          key={`comment-${comment.id}`}
          className="border-b"
          onDelete={handleDeleteComment}
        />
      ))}
    </div>
  );
};
