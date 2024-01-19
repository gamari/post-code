"use client";

import React from "react";

import { useLatestBeginnerCodeList } from "./useLatestBeginnerCodeList";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { CodePanelListWithAds } from "@/src/components/organisms/codes/panel/CodePanelListWithAds";
import { NoContent } from "@/src/components/molecules/displays/no-content";

export const LatestBeginnerCodeList = () => {
  const { codeList, loading } = useLatestBeginnerCodeList();

  if (loading) return <Skeleton rows={3} />;
  if (!codeList?.length) return <NoContent>記事が存在しません</NoContent>;

  return <CodePanelListWithAds codes={codeList} />;
};
