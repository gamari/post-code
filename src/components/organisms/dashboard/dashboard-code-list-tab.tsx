import React from "react";

import { CreateCodeButton } from "../shared/bad-codes/CreateCodeButton";
import { Title } from "../../atoms/texts/title";
import { CodeTable } from "./CodeTable";
import { actionGetMySelfBadCodeList } from "@/src/actions/bad-codes";
import { NoContent } from "../../molecules/displays/no-content";

export const DashboardCodeListTab = async () => {
  const codes = await actionGetMySelfBadCodeList();

  if (!codes?.length) return <NoContent />;

  return (
    <div>
      <div className="flex flex-row justify-between items-center gap-2 mb-6">
        <Title label="コード一覧" />
        <CreateCodeButton />
      </div>

      <CodeTable codes={codes} className="max-w-5xl" />
    </div>
  );
};
