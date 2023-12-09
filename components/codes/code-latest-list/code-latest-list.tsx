import React from "react";

import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchLatestBadCodes } from "@/libs/externals/supabase/queries/bad-codes";
import { cn } from "@/libs/utils";
import { CodePanelList } from "../code-panel-list/code-panel-list";

interface Props {
  className?: string;
}

export const CodeLatestList = async ({ className }: Props) => {
  const client = await getServerClient();
  const codes = await fetchLatestBadCodes(client);

  return (
    <CodePanelList codes={codes} className={cn(className)} />
  );
};
