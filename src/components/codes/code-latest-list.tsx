import React from "react";

import { cn } from "@/src/libs/utils";
import { CodePanelList } from "./code-panel-list";
import { actionGetLatestBadCodeList } from "@/src/actions/bad-codes";

interface Props {
  className?: string;
}

export const CodeLatestList = async ({ className }: Props) => {
  const codes = await actionGetLatestBadCodeList();

  return <CodePanelList codes={codes} className={cn(className)} />;
};
