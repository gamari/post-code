import React from "react";
import { CommentIcon } from "../../atoms/icons/comment-icon";
import { Flex } from "../../atoms/containers/Flex";
import { Typo } from "../../atoms/texts/typo";

interface Props {
  count?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const CommentCount = ({ count, size = "md" }: Props) => {
  return (
    <Flex alignItems="center" className="text-xs" gap={4}>
      <CommentIcon size="xs" />
      <Typo text={count} className="" />
    </Flex>
  );
};
