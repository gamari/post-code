"use client";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import {
  fetchCreateFavoriteCode,
  fetchDeleteFavoriteCode,
} from "@/src/libs/externals/supabase/queries/favorites";
import React, { useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { Button } from "../ui/button";

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
