import React from "react";

import { CodeCard } from "./client/CodeCard";
import { Card, CardHeader } from "@/components/common/ui/card";
import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchBadCodesBySelf } from "@/libs/externals/supabase/queries/bad-codes";

export const CodeList = async () => {
  const serverClient = await getServerClient();
  const codes = await fetchBadCodesBySelf(serverClient);

  if (!codes?.length) {
    return (
      <Card>
        <CardHeader>
          <p>作成したコードが存在しません</p>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="flex flex-col border-x border-t">
      {codes?.map((code) => (
        <CodeCard code={code} key={code.id} className="border-b" />
      ))}
    </div>
  );
};
