import React from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { TopSection } from "./top-section";
import { actionGetLatestCommentList } from "@/src/actions/comments";
import { LinkCard } from "@/src/components/molecules/cards/LinkCard";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";

export const TopLatestCommentSection = async () => {
  const commentList = await actionGetLatestCommentList();

  return (
    <TopSection className="bg-sky-100">
      <Heading type="h2">議論</Heading>

      <div className="flex flex-row flex-wrap gap-10">
        {commentList.map((comment) => (
          <LinkCard key={comment.id} className="w-[48%]" url={CODES_DETAIL_URL(comment?.code_id)}>
            <div>[{comment?.code?.title}]の議論</div>
            <p>{comment.comment}</p>
          </LinkCard>
        ))}
      </div>
    </TopSection>
  );
};
