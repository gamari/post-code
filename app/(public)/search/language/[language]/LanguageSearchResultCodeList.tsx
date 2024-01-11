import { NoContent } from "@/src/components/molecules/displays/no-content";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { CodeDetail } from "@/src/types";
import React from "react";

interface Props {
  codes: CodeDetail[];
}

export const LanguageSearchResultCodeList = ({ codes }: Props) => {
  if (!codes?.length) {
    return <NoContent>対象言語による記事が存在しません</NoContent>;
  }
  return (
    <div>
      <CodePanelList codes={codes} />
    </div>
  );
};
