import React from "react";

import { actionGetFavoriteCodeList } from "@/src/actions/codes";
import { Heading } from "@/src/components/atoms/texts/heading";

export const DashboardFavoriteCodeListTab = async () => {
  const codes = await actionGetFavoriteCodeList();

  return (
    <div>
      <Heading>お気に入りコード</Heading>

      {codes?.map((code) => (
        <div key={`${code.id}`}>
          <div>{code.title}</div>
        </div>
      ))}
    </div>
  );
};
