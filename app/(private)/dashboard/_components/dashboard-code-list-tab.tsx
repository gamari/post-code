import React from "react";

import { NewCodeModalButton } from "../../../../src/components/organisms/codes/NewCodeModalButton";
import { Title } from "../../../../src/components/atoms/texts/title";
import { CodeTable } from "../../../../src/components/organisms/codes/tables/CodeTable";
import { actionGetOwnBadCodeList } from "@/src/actions/codes";
import { NoContent } from "../../../../src/components/molecules/displays/no-content";
import { Flex } from "@/src/components/atoms/containers/Flex";

export const DashboardCodeListTab = async () => {
  const codes = await actionGetOwnBadCodeList();

  return (
    <div>
      <Flex justifyContent="between" alignItems="center" gap={16} className="mb-6">
        <Title label="コード一覧" />
        <NewCodeModalButton />
      </Flex>

      {codes?.length ? (
        <CodeTable codes={codes} className="max-w-5xl" />
      ) : (
        <NoContent>作成したコードがありません</NoContent>
      )}
    </div>
  );
};
