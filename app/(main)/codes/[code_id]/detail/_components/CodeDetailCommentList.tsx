"use client";

import React from "react";

import { useCodeCommentList } from "../../../../../../src/contexts/CodeCommentListProvider";
import { CommentPanelList } from "../../../../../../src/components/organisms/comments/comment-panel-list";

interface Props {}

export const CodeCommentList = ({}: Props) => {
  const { comments } = useCodeCommentList();

  if (!comments?.length) return <div className="flex items-center justify-center p-6 border-b">コメントがありません</div>;

  return (
    <CommentPanelList comments={comments} />
  );
};
