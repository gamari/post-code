import React from "react";

import { cn } from "@/src/libs/utils";
import { CodePanelList } from "../../../src/components/organisms/codes/panel/code-panel-list";
import { actionGetLatestCodeList } from "@/src/actions/codes";

interface Props {
  className?: string;
}

export const revalidate = 0;

export const TopLatestCodePanelList = async ({ className }: Props) => {
  const codes = await actionGetLatestCodeList();

  return <CodePanelList codes={codes} className={cn(className)} />;
};
