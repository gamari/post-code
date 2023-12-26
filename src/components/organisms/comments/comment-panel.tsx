"use client";

import React from "react";

import { CommentDetail } from "@/src/types";
import { BaseProps } from "@/src/types/components";
import { LinkCard } from "../../molecules/cards/LinkCard";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";
import { CommentIcon } from "../../atoms/icons/comment-icon";
import { Typo } from "../../atoms/texts/typo";
import { Description } from "../../atoms/texts/description";
import { Avatar } from "../../molecules/avatar";
import { DateString } from "../../atoms/texts/date-string";
import { Heading } from "../../atoms/texts/heading";
import { DateIcon } from "../../atoms/icons/date-icon";
import { useGetLanguage } from "@/src/hooks/languages/useGetLanguage";
import { CodeIcon } from "../../atoms/icons/code-icon";

interface Props extends BaseProps {
  comment: CommentDetail;
}

export const CommentPanel = ({ comment }: Props) => {
  const { getLanguage } = useGetLanguage();

  return (
    <LinkCard
      key={comment.id}
      className="w-[48%]"
      url={CODES_DETAIL_URL(comment?.code_id)}
    >
      <div className="flex flex-row items-center gap-2 border-b pb-2 mb-3">
        <CommentIcon />
        <Heading type="h4">[{comment?.code?.title}]の議論</Heading>
      </div>

      <div className="flex flex-row items-center justify-between px-2 text-sm text-gray-500">
        <div className="flex flex-row items-center gap-2">
          <Avatar size="sm" />
          <Typo text={comment?.user?.username} size="md" />
        </div>

        <div className="flex items-center flex-row gap-2">
          <DateIcon size="sm" />
          <DateString value={comment.created_at || ""} />
        </div>
      </div>

      <div className=" flex flex-row gap-4 pt-2 items-center">
        <CodeIcon
          size="md"
          fileType={getLanguage(comment?.code?.language_id)}
        />
        <Description size="lg">{comment.comment}</Description>
      </div>
    </LinkCard>
  );
};
