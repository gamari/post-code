import React from "react";

import { actionGetFavoriteCodeList } from "@/src/actions/codes";
import { Heading } from "@/src/components/atoms/texts/heading";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { NoContent } from "@/src/components/molecules/displays/no-content";

export const DashboardFavoriteCodeListTab = async () => {
  const codes = await actionGetFavoriteCodeList();

  return (
    <div>
      <Heading className="mb-4">お気に入り記事</Heading>
      {!codes?.length && <NoContent>お気に入りの記事がありません</NoContent>}
      <CodePanelList codes={codes} />
    </div>
  );
};
