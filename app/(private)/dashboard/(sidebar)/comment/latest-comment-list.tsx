import React from "react";

import { actionGetMyselfCommentList } from "@/src/actions/comments";
import { CommentPanel } from "@/src/components/organisms/comments/CommentPanel";
import { NoContent } from "@/src/components/molecules/displays/no-content";

export const LatestCommentList = async () => {
  const commentList = await actionGetMyselfCommentList();

  if (!commentList?.length) {
    return <NoContent>コメントがありません</NoContent>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {commentList.map((comment) => {
        return <CommentPanel key={comment.id} comment={comment} />
      })}
    </div>
  );
};
