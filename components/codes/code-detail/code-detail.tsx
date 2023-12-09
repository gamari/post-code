import React, { FunctionComponent } from "react";

import { MockBlock } from "@/components/common/mock-block/mock-block";
import { Typo } from "@/components/common/typo/typo";
import { fetchBadCodeById } from "@/libs/externals/supabase/queries/bad-codes";
import { getServerClient } from "@/libs/externals/supabase/admin-client";

interface Props {
  id: number;
}

export const CodeDetail: FunctionComponent<Props> = async ({ id }) => {
  const client = await getServerClient();
  const badCode = await fetchBadCodeById(id, client);

  return (
    <div>
      <Typo text={badCode?.title} type="h1" />

      <Typo text="説明" type="h3" className="mb-4" />
      <div className="mt-6 border-2 border-gray-700 rounded-lgp p-5">
        <Typo text={badCode?.description} />
      </div>

      <div className="mt-6">
        <Typo text="コード" type="h3" className="text-gray-700" />
        <MockBlock height={300} />
      </div>
    </div>
  );
};
