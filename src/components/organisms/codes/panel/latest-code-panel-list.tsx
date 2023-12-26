import React from "react";

import { cn } from "@/src/libs/utils";
import { CodePanelList } from "./code-panel-list";
import { actionGetLatestBadCodeList } from "@/src/actions/codes";

interface Props {
  className?: string;
}

export const LatestCodePanelList = async ({ className }: Props) => {
  const codes = await actionGetLatestBadCodeList();

  return <CodePanelList codes={codes} className={cn(className)} />;
};
