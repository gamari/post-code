import React from "react";
import { FavoriteIcon } from "../atoms/icons/favorite-icon";
import { Typo } from "../atoms/texts/typo";

interface Props {
  count: number;
}

export const FavoriteCount = ({ count }: Props) => {
  return (
    <div className="flex flex-row items-center relative">
      <FavoriteIcon size="xs" />
      <Typo text={count} className="-top-[1px] -right-3 absolute" />
    </div>
  );
};
