"use client";

import React from "react";

import { useCodeCommentList } from "../../../../../../src/contexts/CodeCommentListProvider";
import { CommentPanelList } from "../../../../../../src/components/organisms/comments/comment-panel-list";

interface Props {}

export const CodeCommentList = ({}: Props) => {
  const { comments } = useCodeCommentList();

  if (!comments?.length) return <div>まだコメントはありません</div>;

  return (
    <CommentPanelList comments={comments} />
  );
};
