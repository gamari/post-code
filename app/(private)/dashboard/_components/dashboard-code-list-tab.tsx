import React from "react";

import { NewCodeModalButton } from "../../../../src/components/organisms/codes/NewCodeModalButton";
import { Title } from "../../../../src/components/atoms/texts/title";
import { DashboardCodeList } from "./DashboardCodeList";
import { actionGetOwnCodeList } from "@/src/actions/codes";
import { Flex } from "@/src/components/atoms/containers/Flex";

export const DashboardCodeListTab = async () => {
  const codes = await actionGetOwnCodeList();

  return (
    <div>
      <Flex
        justifyContent="between"
        alignItems="center"
        gap={16}
        className="mb-6 max-w-3xl"
      >
        <Title label="作成記事" />
        <NewCodeModalButton />
      </Flex>

      <DashboardCodeList codes={codes} className="max-w-3xl" />
    </div>
  );
};
