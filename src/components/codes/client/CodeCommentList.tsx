"use client";

import React from "react";
import { Comment } from "@/src/types/index";
import { useCodeCommentList } from "../../../contexts/CodeCommentListProvider";

interface Props {}

export const CodeCommentList = ({}: Props) => {
  const { comments } = useCodeCommentList();

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
