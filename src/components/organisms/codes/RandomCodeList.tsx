"use client";

import React from "react";

import { useFetchRandomCodeList } from "@/src/hooks/codes/useFetchRandomCodeList";
import { CodePanelList } from "./panel/code-panel-list";

export const RandomCodeList = () => {
  const { codes, loading } = useFetchRandomCodeList();

  if (loading) return null;

  return (
    <div>
      <CodePanelList codes={codes} />
    </div>
  );
};
