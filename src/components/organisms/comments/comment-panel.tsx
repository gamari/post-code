import React from "react";

import { SlideIn } from "../../molecules/animation/SlideIn";
import { Comment } from "@/src/types";
import { Typo } from "../../atoms/texts/typo";
import { HDotIcon } from "../../atoms/icons/HDotIcon";
import { Avatar } from "../../molecules/avatar";
import { Username } from "../../atoms/texts/username";

interface Props {
  comment?: Comment;
  className?: string;
}

export const CommentPanel = ({ comment, className = "" }: Props) => {
  return (
    <div className={`px-8 py-6 ${className}`}>
      <SlideIn from="left">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            {/* TODO fix url */}
            <Avatar />
            <Username value="ユーザー名" />
          </div>

          <div>
            <HDotIcon className="hover rounded-full hover:bg-gray-100 h-6 w-6 p-1 cursor-pointer" />
          </div>
        </div>

        <div className="mt-3">{comment?.comment}</div>

        <div>
          <div>{/* TODO いいねとか */}</div>
        </div>
      </SlideIn>
    </div>
  );
};
