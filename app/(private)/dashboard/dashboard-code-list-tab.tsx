import React from "react";
import { unstable_noStore } from "next/cache";

import { NewCodeModalButton } from "../../../src/components/organisms/codes/NewCodeModalButton";
import { Title } from "../../../src/components/atoms/texts/title";
import { CodeTable } from "../../../src/components/organisms/codes/tables/CodeTable";
import { actionGetMySelfBadCodeList } from "@/src/actions/codes";
import { NoContent } from "../../../src/components/molecules/displays/no-content";

export const DashboardCodeListTab = async () => {
  unstable_noStore();
  const codes = await actionGetMySelfBadCodeList();

  if (!codes?.length)
    return (
      <div>
        <div className="flex flex-row justify-between items-center gap-2 mb-6">
          <Title label="コード一覧" />
          <NewCodeModalButton />
        </div>

        <NoContent />
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