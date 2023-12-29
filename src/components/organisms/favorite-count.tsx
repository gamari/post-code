import React from "react";

import { FavoriteIcon } from "../atoms/icons/favorite-icon";
import { Typo } from "../atoms/texts/typo";
import { Flex } from "../atoms/containers/Flex";

interface Props {
  count: number;
}

export const FavoriteCount = ({ count }: Props) => {
  return (
    <Flex alignItems="center" className="text-xs relative w-fit p-1 pr-6">
      <FavoriteIcon size="xs" />
      <Typo text={count} className="top-[4px] right-3 absolute" />
    </Flex>
  );
};
