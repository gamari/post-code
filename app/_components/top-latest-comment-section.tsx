import React from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { TopSection } from "./top-section";
import { actionGetLatestCommentList } from "@/src/actions/comments";
import { CommentPanel } from "@/src/components/organisms/comments/comment-panel";

export const TopLatestCommentSection = async () => {
  const commentList = await actionGetLatestCommentList();

  return (
    <TopSection className="bg-sky-100">
      <Heading type="h2" className="mb-6">コメント</Heading>

      <div className="flex flex-row flex-wrap gap-10">
        {commentList.map((comment) => (
          <CommentPanel key={comment.id} comment={comment} />
        ))}
      </div>
    </TopSection>
  );
};
