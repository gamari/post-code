import React from "react";

import { cn } from "@/src/libs/utils";
import { CodePanelList } from "../../../src/components/organisms/codes/panel/code-panel-list";
import { actionGetLatestBadCodeList } from "@/src/actions/codes";

interface Props {
  className?: string;
}

export const TopLatestCodePanelList = async ({ className }: Props) => {
  const codes = await actionGetLatestBadCodeList();

  return <CodePanelList codes={codes} className={cn(className)} />;
};
