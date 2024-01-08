"use client";

import React, { FunctionComponent } from "react";

import { useLikeCode } from "@/src/hooks/favorites/useLikeCode";
import { LikeButton } from "../../molecules/buttons/like-button";
import { UnlikeButton } from "../../molecules/buttons/unlike-button";

interface Props {
  codeId: number;
  isFavorite: boolean;
}

export const FavoriteCodeButton: FunctionComponent<Props> = ({
  isFavorite: initIsFavorite,
  codeId,
}) => {
  const { isFavorite, likeCode } = useLikeCode(initIsFavorite);

  const handleClick = async () => {
    await likeCode(codeId);
  };

  if (isFavorite) return <UnlikeButton onClick={handleClick} />;

  return <LikeButton onClick={handleClick} />;
};
