import React from "react";

import { FavoriteIcon } from "../atoms/icons/favorite-icon";
import { Typo } from "../atoms/texts/typo";
import { Flex } from "../atoms/containers/Flex";

interface Props {
  count: number;
}

export const FavoriteCount = ({ count }: Props) => {
  return (
    <Flex alignItems="center" className="text-xs" gap={4}>
      <FavoriteIcon size="xs" />
      <Typo text={count} className="" />
    </Flex>
  );
};
