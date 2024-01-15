"use client";

import React, { FunctionComponent } from "react";

import { useLikeCode } from "@/src/hooks/favorites/useLikeCode";
import { LikeButton } from "../../molecules/forms/buttons/like-button";
import { UnlikeButton } from "../../molecules/forms/buttons/unlike-button";
import { useRouter } from "next/navigation";

interface Props {
  codeId: number;
  isFavorite: boolean;
}

export const FavoriteCodeButton: FunctionComponent<Props> = ({
  isFavorite: initIsFavorite,
  codeId,
}) => {
  const router = useRouter();
  const { isFavorite, likeCode } = useLikeCode(initIsFavorite);

  const handleClick = async () => {
    await likeCode(codeId);
    router.refresh();
  };

  if (isFavorite) return <UnlikeButton onClick={handleClick} />;

  return <LikeButton onClick={handleClick} />;
};
