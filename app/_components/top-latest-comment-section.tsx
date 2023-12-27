import React from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { TopSection } from "./top-section";
import { actionGetLatestCommentList } from "@/src/actions/comments";
import { CommentPanel } from "@/src/components/organisms/comments/CommentPanel";

export const TopLatestCommentSection = async () => {
  const commentList = await actionGetLatestCommentList();

  return (
    <TopSection className="bg-sky-100">
      <Heading type="h2" className="mb-6">最新のコメント</Heading>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {commentList.map((comment) => (
          <CommentPanel key={comment.id} comment={comment} />
        ))}
      </div>
    </TopSection>
  );
};
