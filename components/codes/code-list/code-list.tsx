import React from "react";

import { CodeCard } from "../code-card/code-card";
import { Card, CardHeader } from "@/components/ui/card";
import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchBadCodesBySelf } from "@/libs/externals/supabase/admin-queries";

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
    <div>
      {codes?.map((code) => (
        <CodeCard code={code} key={code.id} />
      ))}
    </div>
  );
};
