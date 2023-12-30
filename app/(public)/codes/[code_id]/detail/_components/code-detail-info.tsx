import React, { FunctionComponent } from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { Description } from "@/src/components/atoms/texts/description";
import { Badge } from "@/src/components/atoms/badges/badge";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";
import { CodeDetail } from "@/src/types";
import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";

interface Props {
  code: CodeDetail;
}

export const CodeDetailInfo: FunctionComponent<Props> = async ({ code }) => {
  return (
    <div>
      <div className="p-4 flex flex-col gap-2 bg-white rounded-md">
        <div className="flex flex-row items-center gap-2">
          {!code?.is_public ? (
            <Badge className="bg-gray-600 text-white">非公開</Badge>
          ) : (
            <CodeIcon size="lg" fileType={code?.language?.name || ""} />
          )}
          <Heading type="h3">{code?.title}</Heading>
        </div>

        {code?.description && (
          <div className="border-t pt-6 pb-6 px-2">
            <MarkdownPreviewer content={code?.description} />
          </div>
        )}
      </div>
    </div>
  );
};
