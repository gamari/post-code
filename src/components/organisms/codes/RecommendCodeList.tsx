import { actionGetRecommendedCodeList } from "@/src/actions/codes";
import React from "react";

/** TODO 開発中 */
export const RecommendCodeList = async () => {
  const codes = await actionGetRecommendedCodeList();
  return <div>RecommendCodeList</div>;
};
