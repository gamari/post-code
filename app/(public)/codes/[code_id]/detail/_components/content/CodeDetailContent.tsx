import { Flex } from "@/src/components/atoms/containers/Flex";
import React from "react";
import { CodeDetailFileDescription } from "../CodeDetailFileDescription";
import { CodeDetailContentFileViewer } from "./CodeDetailContentFileViewer";
import { CodeDetailContentInfo } from "./code-detail-content-info";
import { CodeDetailCommentList } from "../comments/CodeDetailCommentList";
import { CodeDetail } from "@/src/types";
import BottomToggleContainer from "@/src/components/molecules/animation/BottomToggleContainer";

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

      <BottomToggleContainer className="flex flex-row h-[40vh] gap-4 p-6" label="説明">
        <CodeDetailContentFileViewer className="flex-1" />
        <CodeDetailFileDescription className="flex-1" />
      </BottomToggleContainer>
    </Flex>
  );
};
