import React, { FunctionComponent } from "react";

import { Typo } from "@/components/common/typo";
import { fetchBadCodeById } from "@/libs/externals/supabase/queries/bad-codes";
import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { File } from "@/libs/types";
import { Card, CardHeader } from "@/components/ui/card";
import { SelectedCodeFileViewer } from "./selected-code-file-viewer";

interface Props {
  id: number;
}

export const CodeDetail: FunctionComponent<Props> = async ({ id }) => {
  const client = await getServerClient();
  const badCode = await fetchBadCodeById(id, client);

  return (
    <div>
      <Typo text={badCode?.title} type="h2" className="border-b mb-6" />

      <Card className="mt-6">
        <CardHeader>
          <Typo text={badCode?.description} />
        </CardHeader>
      </Card>

      <div className="mt-6">
        <Typo text="コード" type="h3" className="text-gray-700" />

        <SelectedCodeFileViewer />
      </div>
    </div>
  );
};
