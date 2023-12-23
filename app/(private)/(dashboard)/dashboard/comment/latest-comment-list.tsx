import React from "react";

import { actionGetMyselfCommentList } from "@/src/actions/comments";
import { Typo } from "@/src/components/atoms/texts/typo";
import Link from "next/link";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";
import { DateString } from "@/src/components/atoms/texts/date-string";

/** 最新コメント一覧 */
export const LatestCommentList = async () => {
  const commentList = await actionGetMyselfCommentList();

  return (
    <div className="flex flex-col gap-6">
      {commentList.map((comment) => {
        return (
          <div className={"bg-white rounded-lg p-6"} key={comment.id}>
            <div>
              <Link href={CODES_DETAIL_URL(comment?.code?.id)}>
                <Typo text={`【${comment?.code?.title}】`} className="mr-2" />
                へのコメント
              </Link>
            </div>
            <div className="mt-3 border-t pt-2">
              <div>{comment.comment}</div>
              <div>
                コメント日: <DateString value={comment.created_at} />
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};
