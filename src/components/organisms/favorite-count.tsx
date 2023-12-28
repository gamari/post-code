import React from "react";
import { FavoriteIcon } from "../atoms/icons/favorite-icon";
import { Typo } from "../atoms/texts/typo";

interface Props {
  count: number;
}

export const FavoriteCount = ({ count }: Props) => {
  return (
    <div className="text-xs  flex flex-row items-center relative w-fit border rounded-full p-1 pr-6">
      <FavoriteIcon size="xs" />
      <Typo text={count} className="top-[4px] right-3 absolute" />
    </div>
  );
};
