import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeDetailContentInfo } from "./code-detail-content-info";
import { CodeDetailCommentList } from "../comments/CodeDetailCommentList";
import { CodeDetail } from "@/src/types";
import { CodeDetailContentBottom } from "./CodeDetailContentBottom";

interface Props {
  code: CodeDetail;
}

export const CodeDetailContent = ({ code }: Props) => {
  return (
    <Flex
      direction="column"
      alignItems="stretch"
      gap={24}
      className="flex-1 pb-80 max-w-4xl w-full border-b"
    >
      <CodeDetailContentInfo code={code} />
      <CodeDetailCommentList code={code} className="w-full mb-6" />
      <CodeDetailContentBottom />
    </Flex>
  );
};
