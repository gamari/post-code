"use client";

import React from "react";

import { useCodeCommentList } from "../../../../contexts/CodeCommentListProvider";
import { CodeCommentPanel } from "./CodeCommentPanel";

interface Props {}

export const CodeCommentList = ({}: Props) => {
  const { comments } = useCodeCommentList();

  if (!comments?.length) return <div>まだコメントはありません</div>;

  return (
    <div>
      {comments.map((comment) => (
        <CodeCommentPanel comment={comment} key={`comment-${comment.id}`} />
      ))}
    </div>
  );
};
