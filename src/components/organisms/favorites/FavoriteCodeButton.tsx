"use client";

import React, { FunctionComponent } from "react";

import { useLikeCode } from "@/src/hooks/favorites/useLikeCode";
import { LikeButton } from "../../molecules/buttons/like-button";
import { UnlikeButton } from "../../molecules/buttons/unlike-button";
import { useFetchFavoriteCount } from "@/src/hooks/favorites/useFetchFavoriteCount";

interface Props {
  codeId: number;
  isFavorite: boolean;
}

export const FavoriteCodeButton: FunctionComponent<Props> = ({
  isFavorite: initIsFavorite,
  codeId,
}) => {
  const { isFavorite, likeCode } = useLikeCode(initIsFavorite);
  const { count, setCount } = useFetchFavoriteCount(codeId);

  const handleClick = async () => {
    await likeCode(codeId);

    if (isFavorite) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  if (isFavorite) return <UnlikeButton onClick={handleClick} count={count} />;

  return <LikeButton onClick={handleClick} />;
};
