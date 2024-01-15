import { insertAds } from "@/src/libs/ads";
import { Advertisement, CodeDetail } from "@/src/types";
import React, { useEffect, useState } from "react";
import { CodePanelList } from "./code-panel-list";

interface Props {
  codes: CodeDetail[];
}

/** 広告を差し込むパネル。 */
export const CodePanelListWithAds = ({ codes }: Props) => {
  const [adIncludedCodes, setAdIncludedCodes] = useState<
    (CodeDetail | Advertisement)[]
  >([]);

  useEffect(() => {
    const updatedCodes = insertAds(codes);
    setAdIncludedCodes(updatedCodes);
  }, [codes]);

  return <CodePanelList codes={adIncludedCodes} />;
};
