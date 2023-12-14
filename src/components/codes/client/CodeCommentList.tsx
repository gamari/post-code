"use client";

import React from "react";
import { Comment } from "@/src/types/index";
import { useCommentList } from "@/src/hooks/comments/useCommentList";

interface Props {
  comments: Comment[];
}

export const CodeCommentList = ({ comments: initComments }: Props) => {
  const { comments } = useCommentList(initComments);

  if (!comments?.length) return <div>まだコメントはありません</div>;

  return (
    <div>
      {comments.map((comment) => (
        <div key={`comment-${comment.id}`}>
          <div>{comment.comment}</div>
        </div>
      ))}
    </div>
  );
};
