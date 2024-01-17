"use client";

import React from "react";

import { Code } from "@/src/types";
import { CodeDetailShareButton } from "./CodeDetailShareButton";
import { actionCheckFavoriteCode } from "@/src/actions/favorites";
import { FavoriteCodeButton } from "@/src/components/organisms/favorites/FavoriteCodeButton";
import { CodeDetailCommentModalButton } from "../comments/CodeDetailCommentModalButton";
import { useCheckFavorite } from "@/src/hooks/favorites/useCheckFavorite";

interface Props {
  badCode: Code;
  isLogin: boolean;
}

export const revalidate = 0;

export const CodeDetailSidebarToolsCard = ({ badCode, isLogin }: Props) => {
  const { is_public } = badCode;
  const { isFavorite } = useCheckFavorite(badCode?.id);

  if (!is_public)
    return (
      <div className="rounded-md bg-white w-full p-5 py-7 font-bold">
        非公開設定です
      </div>
    );

  return (
    <div className="rounded-md bg-white w-full p-5 py-7">
      <div className="flex flex-col gap-2">
        {isLogin && (
          <>
            <FavoriteCodeButton codeId={badCode.id} isFavorite={isFavorite} />
            <CodeDetailCommentModalButton />
          </>
        )}
        <CodeDetailShareButton code={badCode} />
      </div>
    </div>
  );
};
