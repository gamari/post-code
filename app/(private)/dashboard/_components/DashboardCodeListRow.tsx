"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { DeleteButton } from "@/src/components/molecules/forms/buttons/delete-button";
import { EditButton } from "@/src/components/molecules/forms/buttons/edit-button";
import { LinkText } from "@/src/components/molecules/displays/link-text";
import { ToggleBudge } from "@/src/components/molecules/displays/toggle-budge";
import { CodeDetail } from "@/src/types";
import { TimeAgo } from "@/src/components/molecules/time-ago";
import { Center } from "@/src/components/atoms/containers/Center";
import { cn } from "@/src/libs/utils";
import { CommentCount } from "../../../../src/components/organisms/comments/comment-count";
import { FavoriteCount } from "../../../../src/components/organisms/favorites/favorite-count";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";
import { CodeTagList } from "@/src/components/organisms/tags/code-tag-list";

interface Props {
  code: CodeDetail;
  onDelete: (id: number) => void;
  className?: string;
}

export const DashboardCodeListRow = ({ code, onDelete, className }: Props) => {
  const router = useRouter();

  return (
    <Flex alignItems="center" className={cn("px-6 py-8", className)}>
      <Flex direction="column" className="flex-1" gap={8}>
        <Flex direction="column">
          <Flex alignItems="center" gap={12} className="my-1">
            {code?.language && (
              <Flex alignItems="center" gap={8} className="text-xs">
                <CodeIcon fileType={code?.language?.name} size="sm" />
                {code?.language?.display}
              </Flex>
            )}
            <CodeTagList tags={code?.tags} />
          </Flex>
          <div>
            <LinkText
              url={`/codes/${code.id}/detail`}
              label={code.title}
              className="w-full text-lg font-bold"
            />
          </div>
        </Flex>

        <Flex alignItems="center" gap={12}>
          <Center>
            <ToggleBudge
              is_public={code.is_public || false}
              trueText="公開"
              falseText="非公開"
            />
          </Center>
          <Center>
            <TimeAgo
              date={code.updated_at || ""}
              className="text-xs text-gray-700"
            />
          </Center>
          <Flex alignItems="center" gap={8}>
            <FavoriteCount count={code?.favorites_count || 0} />
            <CommentCount count={code?.comments_count || 0} />
          </Flex>
        </Flex>
      </Flex>

      <Center className="w-[100px] h-full gap-2">
        <EditButton
          onClick={() => {
            router.push(`/dashboard/codes/${code.id}/edit`);
          }}
        />
        <DeleteButton
          onClick={() => {
            onDelete(code.id);
          }}
        />
      </Center>
    </Flex>
  );
};
