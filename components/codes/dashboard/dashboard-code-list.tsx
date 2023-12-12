import React from "react";

import { Card, CardHeader } from "@/components/common/ui/card";
import { actionGetMySelfBadCodes } from "@/actions/bad-codes";
import { CodeTable } from "../client/CodeTable";

export const DashboardCodeList = async () => {
  const codes = await actionGetMySelfBadCodes();

  if (!codes?.length) {
    return (
      <Card>
        <CardHeader>
          <p>作成したコードが存在しません</p>
        </CardHeader>
      </Card>
    );
  }

  return <CodeTable codes={codes} />;
};
