import React from "react";

import { CreateCodeButton } from "../../../components/codes/create-code-button/create-code-button";
import { CodeList } from "@/components/codes/code-list/code-list";
import { fetchBadCodesBySelf } from "@/libs/externals/supabase/admin-queries";
import { getServerClient } from "@/libs/externals/supabase/admin-client";

const DashboardPage = async () => {
  const serverClient = await getServerClient();
  const codes = await fetchBadCodesBySelf(serverClient);

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
