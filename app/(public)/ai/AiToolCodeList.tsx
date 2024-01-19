"use client";

import React from "react";
import { useAiToolCodeList } from "./useAiToolCodeList";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { NoContent } from "@/src/components/molecules/displays/no-content";

export const AiToolCodeList = () => {
  const { codeList } = useAiToolCodeList();

  if (!codeList?.length) return <NoContent>記事が存在しません</NoContent>;

  return <CodePanelList codes={codeList} />;
};
