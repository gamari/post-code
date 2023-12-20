import React from "react";

import { Comment } from "@/src/types";
import { CommentPanel } from "./comment-panel";
import { sortDescByCreatedAt } from "@/src/libs/sortes";

interface Props {
  comments: Comment[];
}

export const CommentPanelList = ({ comments }: Props) => {
  const sortedComments = [...comments].sort(sortDescByCreatedAt);

  return (
    <div>
      {sortedComments.map((comment) => (
        <CommentPanel
          comment={comment}
          key={`comment-${comment.id}`}
          className="border-b"
        />
      ))}
    </div>
  );
};
