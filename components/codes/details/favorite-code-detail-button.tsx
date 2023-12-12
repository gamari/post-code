import React from "react";

import { FavoriteButton } from "@/components/common/client/FavoriteButton";
import { actionCheckFavoriteCode } from "@/actions/favorites";

interface Props {
  codeId: number;
}

export const FavoriteCodeDetailButton = async ({ codeId }: Props) => {
  const isFavorite = await actionCheckFavoriteCode(codeId);
  return <FavoriteButton codeId={codeId} isFavorite={isFavorite} />;
};
