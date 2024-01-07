import React from "react";
import { unstable_noStore } from "next/cache";

import { actionGetFavoriteCodeList } from "@/src/actions/codes";
import { Heading } from "@/src/components/atoms/texts/heading";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";

export const DashboardFavoriteCodeListTab = async () => {
  unstable_noStore();
  const codes = await actionGetFavoriteCodeList();

  return (
    <div>
      <Heading className="mb-4">お気に入り記事</Heading>
      <CodePanelList codes={codes} />
    </div>
  );
};
