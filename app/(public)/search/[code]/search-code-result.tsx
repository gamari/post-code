import React from "react";
import { unstable_noStore } from "next/cache";

import { actionGetCodeListByFileCode } from "@/src/actions/codes";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";

interface Props {
  code: string;
}

export const SearchCodeResult = async ({ code }: Props) => {
  unstable_noStore();
  const codeList = await actionGetCodeListByFileCode(code);

  return (
    <div>
      {/* TODO Detail用にする */}
      <CodePanelList codes={codeList} />
    </div>
  );
};
