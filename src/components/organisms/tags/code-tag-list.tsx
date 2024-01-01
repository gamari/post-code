import { BaseProps } from "@/src/types/components";
import React from "react";

import { Flex } from "../../atoms/containers/Flex";
import { Tag } from "@/src/types";
import { TagBadge } from "../../molecules/tag-badge";

interface Props extends BaseProps {
  tags: Tag[];
  className?: string;
}

export const CodeTagList = ({ tags, className }: Props) => {
  return (
    <Flex className={className} gap={8}>
      {tags?.map((tag) => (
        <TagBadge key={tag.id} tag={tag} />
      ))}
    </Flex>
  );
};