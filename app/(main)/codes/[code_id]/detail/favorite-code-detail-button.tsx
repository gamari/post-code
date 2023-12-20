import React from "react";

import { FavoriteBadCodeButton } from "@/src/components/organisms/shared/FavoriteBadCodeButton";
import { actionCheckFavoriteCode } from "@/src/actions/favorites";

interface Props {
  codeId: number;
}

export const FavoriteCodeDetailButton = async ({ codeId }: Props) => {
  const isFavorite = await actionCheckFavoriteCode(codeId);
  return <FavoriteBadCodeButton codeId={codeId} isFavorite={isFavorite} />;
};
