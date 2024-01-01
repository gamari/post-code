import React, { FunctionComponent } from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { Badge } from "@/src/components/atoms/badges/badge";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";
import { CodeDetail } from "@/src/types";
import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeTagList } from "@/src/components/organisms/tags/code-tag-list";
import { DateInfo } from "@/src/components/organisms/date-info";
import { FavoriteCount } from "@/src/components/organisms/favorites/favorite-count";
import { CommentCount } from "@/src/components/organisms/comments/comment-count";

interface Props {
  code: CodeDetail;
}

export const CodeDetailInfo: FunctionComponent<Props> = async ({ code }) => {
  return (
    <div className="w-full">
      <div className="p-8 flex flex-col gap-2 bg-white rounded-md w-full">
        <div>
          <Flex alignItems="center" gap={8}>
            {!code?.is_public ? (
              <Badge className="bg-gray-600 text-white">非公開</Badge>
            ) : (
              <CodeIcon size="lg" fileType={code?.language?.name || ""} />
            )}
            <Heading type="h3">{code?.title}</Heading>
          </Flex>

          <CodeTagList tags={code?.tags || []} className="mt-2" />

          <Flex alignItems="center" gap={4}>
            <DateInfo
              publishedDate={code?.published_date}
              updatedDate={code?.updated_at}
            />
            <FavoriteCount count={code?.favorites_count || 0} />
            <CommentCount count={code?.comments_count || 0} />
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
