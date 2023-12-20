import React from "react";

import { Comment } from "@/src/types";
import { CommentPanel } from "./comment-panel";

interface Props {
  comments: Comment[];
}

export const CommentPanelList = ({ comments }: Props) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentPanel comment={comment} key={`comment-${comment.id}`} />
      ))}
    </div>
  );
};
