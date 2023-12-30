"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { DeleteButton } from "@/src/components/molecules/buttons/delete-button";
import { EditButton } from "@/src/components/molecules/buttons/edit-button";
import { LinkText } from "@/src/components/molecules/displays/link-text";
import { ToggleBudge } from "@/src/components/molecules/displays/toggle-budge";
import { CodeDetail } from "@/src/types";
import { TimeAgo } from "@/src/components/molecules/time-ago";
import { FavoriteCount } from "../../favorite-count";
import { Center } from "@/src/components/atoms/containers/Center";
import { cn } from "@/src/libs/utils";

interface Props {
  code: CodeDetail;
  onDelete: (id: number) => void;
  className?: string;
}

export const CodeTableRow = ({ code, onDelete, className }: Props) => {
  const router = useRouter();

  return (
    <div className={cn("grid border-b py-2", className)}>
      <Center>
        <ToggleBudge
          is_public={code.is_public || false}
          trueText="公開"
          falseText="非公開"
        />
      </Center>
      
      <div className="p-2">
        <LinkText
          url={`/codes/${code.id}/detail`}
          label={code.title}
          className="w-full"
        />
      </div>

      <Center className="h-full ">
        <FavoriteCount count={code?.favorites_count || 0} />
      </Center>

      <Center className="text-xs text-gray-500">
        {code?.language?.display}
      </Center>

      <Center>
        <TimeAgo
          date={code.updated_at || ""}
          className="text-xs text-gray-700"
        />
      </Center>

      <Center>
        <div className="flex flex-row items-center gap-3">
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
        </div>
      </Center>
    </div>
  );
};
