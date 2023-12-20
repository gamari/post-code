"use client";

import React, { useState } from "react";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import {
  fetchCreateFavoriteCode,
  fetchDeleteFavoriteCode,
} from "@/src/libs/externals/supabase/queries/favorites";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { Button } from "../../atoms/buttons/button";

interface Props {
  codeId: number;
  isFavorite: boolean;
}

export const FavoriteCodeButton = ({
  isFavorite: initIsFavorite,
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

  if (isFavorite) {
    return (
      <Button variant="secondary" onClick={handleClick}>
        <MdOutlineStar className="h-6 w-6 text-yellow-500 cursor-pointer" />
        お気に入り
      </Button>
    );
  }

  return (
    <Button variant="outline" onClick={handleClick}>
      <MdOutlineStarBorder className="h-6 w-6 cursor-pointer" />
      お気に入り
    </Button>
  );
};
