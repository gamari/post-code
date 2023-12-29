"use client";

import React from "react";

import { CommentDetail } from "@/src/types";
import { BaseProps } from "@/src/types/components";
import { LinkCard } from "../../molecules/cards/LinkCard";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";
import { Typo } from "../../atoms/texts/typo";
import { Avatar } from "../../molecules/avatar";
import { Heading } from "../../atoms/texts/heading";
import { DateIcon } from "../../atoms/icons/date-icon";
import { useGetLanguage } from "@/src/hooks/languages/useGetLanguage";
import { CodeIcon } from "../../atoms/icons/code-icon";
import { MarkdownPreviewer } from "../../molecules/displays/markdown-previewer";
import { TimeAgo } from "../../molecules/time-ago";
import { Flex } from "../../atoms/containers/Flex";

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
      <Flex className="flex flex-row items-center justify-between text-sm text-gray-500 border-b pb-2 mt-2">
        <Flex alignItems="start" gap={12}>
          <CodeIcon
            size="sm"
            fileType={getLanguage(comment?.code?.language_id)}
          />
          <Heading type="h4" className="flex-1">
            【{comment?.code?.title}】
          </Heading>
          <Typo text={"へのコメント"} size="sm" />
        </Flex>
      </Flex>

      <Flex
        gap={4}
        justifyContent="between"
        className=" text-gray-600 mt-4 px-2"
      >
        <Flex alignItems="center" gap={4}>
          <Avatar size="sm" iconType={comment?.user?.icon_type} />
          <Typo text={comment?.user?.username} size="md" />
        </Flex>
        <Flex gap={4}>
          <DateIcon size="sm" />
          <TimeAgo date={comment.created_at || ""} />
        </Flex>
      </Flex>

      <Flex gap={4} alignItems="center" className="pt-2">
        <MarkdownPreviewer content={comment.comment} />
      </Flex>
    </LinkCard>
  );
};
