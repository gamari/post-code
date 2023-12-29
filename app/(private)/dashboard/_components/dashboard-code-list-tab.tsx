import React from "react";

import { NewCodeModalButton } from "../../../../src/components/organisms/codes/NewCodeModalButton";
import { Title } from "../../../../src/components/atoms/texts/title";
import { CodeTable } from "../../../../src/components/organisms/codes/tables/CodeTable";
import { actionGetOwnBadCodeList } from "@/src/actions/codes";
import { NoContent } from "../../../../src/components/molecules/displays/no-content";

export const DashboardCodeListTab = async () => {
  const codes = await actionGetOwnBadCodeList();

  if (!codes?.length)
    return (
      <div>
        <div className="flex flex-row justify-between items-center gap-2 mb-6">
          <Title label="コード一覧" />
          <NewCodeModalButton />
        </div>

        <NoContent>作成したコードがありません</NoContent>
      </div>
    );

  return (
    <div>
      <div className="flex flex-row justify-between items-center gap-2 mb-6">
        <Title label="コード一覧" />
        <NewCodeModalButton />
      </div>

      <CodeTable codes={codes} className="max-w-5xl" />
    </div>
  );
};
