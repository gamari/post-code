import React from "react";

import { FavoriteButton } from "@/src/components/organisms/FavoriteButton";
import { actionCheckFavoriteCode } from "@/src/actions/favorites";

interface Props {
  codeId: number;
}

export const FavoriteCodeDetailButton = async ({ codeId }: Props) => {
  const isFavorite = await actionCheckFavoriteCode(codeId);
  return <FavoriteButton codeId={codeId} isFavorite={isFavorite} />;
};
