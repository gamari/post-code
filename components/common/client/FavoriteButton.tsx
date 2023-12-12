"use client";

import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import {
  fetchCreateFavoriteCode,
  fetchDeleteFavoriteCode,
} from "@/libs/externals/supabase/queries/favorites";
import React, { useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

interface Props {
  codeId: number;
  isFavorite: boolean;
  onClick?: () => void;
}

export const FavoriteButton = ({
  isFavorite: initIsFavorite,
  onClick,
  codeId,
}: Props) => {
  const { client } = useSupabase();
  const [isFavorite, setIsFavorite] = useState(initIsFavorite);

  const handleClick = async () => {
    if (!client) return;

    if (isFavorite) {
      await fetchDeleteFavoriteCode(codeId, client);
    } else {
      await fetchCreateFavoriteCode(codeId, client);
    }

    setIsFavorite(!isFavorite);
  };

  if (isFavorite)
    return (
      <MdOutlineStar
        className="h-6 w-6 text-yellow-500 cursor-pointer"
        onClick={handleClick}
      />
    );
  return (
    <MdOutlineStarBorder
      className="h-6 w-6 cursor-pointer"
      onClick={handleClick}
    />
  );
};
