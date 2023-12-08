import React from "react";

import { CreateCodeButton } from "../../../components/codes/create-code-button/create-code-button";
import { fetchBadCodesBySelf } from "@/libs/supabase/admin-queries";
import { CodeList } from "@/components/codes/code-list/code-list";

const DashboardPage = async () => {
  // TODO Suspense使いたい
  const codes = await fetchBadCodesBySelf();

  console.log(codes);

  return (
    <div>
      <div>
        <CreateCodeButton />
      </div>

      <CodeList codes={codes} />
    </div>
  );
};

export default DashboardPage;
