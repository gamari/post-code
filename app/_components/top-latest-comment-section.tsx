import React from "react";
import { unstable_noStore } from "next/cache";

import { Heading } from "@/src/components/atoms/texts/heading";
import { TopSection } from "./top-section";
import { actionGetLatestCommentList } from "@/src/actions/comments";
import { CommentPanel } from "@/src/components/organisms/comments/CommentPanel";
import { CommentIcon } from "@/src/components/atoms/icons/comment-icon";
import { NoContent } from "@/src/components/molecules/displays/no-content";

export const TopLatestCommentSection = async () => {
  unstable_noStore();
  const commentList = await actionGetLatestCommentList();

  return (
    <TopSection className="bg-sky-100">
      <div className="flex flex-row items-center gap-2 mb-6">
        <CommentIcon />
        <Heading type="h2">最新のコメント</Heading>
      </div>

      {/* TODO コンポーネント化する */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {!commentList?.length ? (
          <NoContent>コメントはまだありません</NoContent>
        ) : (
          <>
            {commentList.map((comment) => (
              <CommentPanel key={comment.id} comment={comment} />
            ))}
          </>
        )}
      </div>
    </TopSection>
  );
};
