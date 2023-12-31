import React, { FunctionComponent } from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { Badge } from "@/src/components/atoms/badges/badge";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";
import { CodeDetail } from "@/src/types";
import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { DateString } from "@/src/components/atoms/texts/date-string";
import { DateIcon } from "@/src/components/atoms/icons/date-icon";
import { UpdateIcon } from "@/src/components/atoms/icons/update-icon";

interface Props {
  code: CodeDetail;
}

export const CodeDetailInfo: FunctionComponent<Props> = async ({ code }) => {
  return (
    <div className="w-full">
      <div className="p-4 flex flex-col gap-2 bg-white rounded-md w-full">
        <div>
          <Flex alignItems="center" gap={8}>
            {!code?.is_public ? (
              <Badge className="bg-gray-600 text-white">非公開</Badge>
            ) : (
              <CodeIcon size="lg" fileType={code?.language?.name || ""} />
            )}
            <Heading type="h3">{code?.title}</Heading>
          </Flex>

          <Flex className="py-2">
            {code?.tags?.map((tag) => (
              <Badge className="bg-gray-200 text-gray-700" key={tag.id}>
                {tag.name}
              </Badge>
            ))}
          </Flex>

          <Flex gap={12} className="text-xs text-gray-500 mt-2">
            {code?.published_date && (
              <Flex gap={4}>
                <DateIcon size={"xs"} />
                <div>公開日</div>
                <div>
                  <DateString value={code?.published_date || ""} />
                </div>
              </Flex>
            )}
            <Flex gap={4}>
              <UpdateIcon size={"xs"} />
              <div>更新日</div>
              <div>
                <DateString value={code?.created_at || ""} />
              </div>
            </Flex>
          </Flex>
        </div>

        {code?.description && (
          <div className="pt-6 pb-6 px-2">
            <MarkdownPreviewer content={code?.description} />
          </div>
        )}
      </div>
    </div>
  );
};
