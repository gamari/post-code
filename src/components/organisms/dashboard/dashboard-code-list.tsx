import React from "react";

import { Card, CardHeader } from "@/src/components/ui/card";
import { actionGetMySelfBadCodeList } from "@/src/actions/bad-codes";
import { CodeTable } from "./CodeTable";
import { unstable_noStore as noStore } from "next/cache";

export const DashboardCodeList = async () => {
  noStore();
  const codes = await actionGetMySelfBadCodeList();

  if (!codes?.length) {
    return (
      <Card>
        <CardHeader>
          <p>作成したコードが存在しません</p>
        </CardHeader>
      </Card>
    );
  }

  return <CodeTable codes={codes} className="max-w-5xl" />;
};
