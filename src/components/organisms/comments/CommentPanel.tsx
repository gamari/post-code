"use client";

import React from "react";

import { CommentDetail } from "@/src/types";
import { BaseProps } from "@/src/types/components";
import { LinkCard } from "../../molecules/cards/LinkCard";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";
import { CommentIcon } from "../../atoms/icons/comment-icon";
import { Typo } from "../../atoms/texts/typo";
import { Avatar } from "../../molecules/avatar";
import { DateString } from "../../atoms/texts/date-string";
import { Heading } from "../../atoms/texts/heading";
import { DateIcon } from "../../atoms/icons/date-icon";
import { useGetLanguage } from "@/src/hooks/languages/useGetLanguage";
import { CodeIcon } from "../../atoms/icons/code-icon";
import { MarkdownPreviewer } from "../../molecules/displays/markdown-previewer";

interface Props extends BaseProps {
  comment: CommentDetail;
}

export const CommentPanel = ({ comment }: Props) => {
  const { getLanguage } = useGetLanguage();

  return (
    <LinkCard
      key={comment.id}
      className="col-span-1 h-fit"
      url={CODES_DETAIL_URL(comment?.code_id)}
    >
      <div className="flex flex-row items-center justify-between text-sm text-gray-500 border-b pb-2 mt-2">
        <div className="flex flex-row items-center gap-2">
          <CommentIcon />
          <Heading type="h4">【{comment?.code?.title}】へのコメント</Heading>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center gap-2 text-gray-600 mt-4 px-2">
        <Typo text={comment?.user?.username} size="md" />
        <Avatar size="sm" />
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

        <div className="border-l-2 pl-2">
          <MarkdownPreviewer content={comment.comment} />
        </div>
      </div>
    </LinkCard>
  );
};
