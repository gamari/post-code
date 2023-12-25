import React from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { TopSection } from "./top-section";
import { actionGetLatestCommentList } from "@/src/actions/comments";

export const TopLatestCommentSection = async () => {
  const commentList = await actionGetLatestCommentList();

  return (
    <TopSection className="bg-sky-100">
      <Heading type="h2">議論</Heading>

      <div>
        {commentList.map((comment) => (
          <div key={comment.id}>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </TopSection>
  );
};
