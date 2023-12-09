import React from "react";
import Link from "next/link";

import { CodeCard } from "../code-card/code-card";
import { Card, CardHeader } from "@/components/ui/card";
import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchBadCodesBySelf } from "@/libs/externals/supabase/queries";

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
        <Link href={`/codes/${code.id}/detail`} key={code.id}>
          <div className="border-b">
            <CodeCard code={code} />
          </div>
        </Link>
      ))}
    </div>
  );
};
