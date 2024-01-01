"use client";

import React from "react";

import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { useSearchCodeListByTitle } from "@/src/hooks/codes/search/useSearchCodeListByTitle";
import { CodeDetail } from "@/src/types";
import { MoreSearchButton } from "../../more-search-button";

interface Props {
  title: string;
  codes: CodeDetail[];
}

export const SearchTitleResultList = ({ title, codes: initCodes }: Props) => {
  const { codes, loading, isDone, next } = useSearchCodeListByTitle(
    title,
    initCodes
  );

  return (
    <div>
      <CodePanelList codes={codes} />

      <MoreSearchButton
        loading={loading}
        isDone={isDone}
        onClick={() => {
          next();
        }}
      />
    </div>
  );
};
