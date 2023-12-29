import React from "react";

import { actionGetMyselfCommentList } from "@/src/actions/comments";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";
import { DateString } from "@/src/components/atoms/texts/date-string";
import { LinkText } from "@/src/components/molecules/displays/link-text";
import { CommentPanel } from "@/src/components/organisms/comments/CommentPanel";

/** 最新コメント一覧 */
export const LatestCommentList = async () => {
  const commentList = await actionGetMyselfCommentList();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {commentList.map((comment) => {
        return <CommentPanel key={comment.id} comment={comment} />
      })}
    </div>
  );
};
