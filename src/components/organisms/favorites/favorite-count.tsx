import React from "react";

import { FavoriteIcon } from "../../atoms/icons/favorite-icon";
import { Typo } from "../../atoms/texts/typo";
import { Flex } from "../../atoms/containers/Flex";

interface Props {
  count?: number;
  size?: "sm" | "md" | "lg";
}

export const FavoriteCount = ({ count, size }: Props) => {
  return (
    <Flex alignItems="center" className="text-xs text-gray-500 " gap={4}>
      <FavoriteIcon size="xs" />
      <Typo text={count || 0} className="" />
    </Flex>
  );
};
