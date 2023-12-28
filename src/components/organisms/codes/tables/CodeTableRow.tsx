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

interface Props {
  code: CodeDetail;
  onDelete: (id: number) => void;
}

export const CodeTableRow = ({ code, onDelete }: Props) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-9 lg:grid-cols-10  border-b py-2">
      <Center>
        <ToggleBudge
          is_public={code.is_public || false}
          trueText="公開"
          falseText="非公開"
        />
      </Center>
      <div className="col-span-4 p-2">
        <LinkText
          url={`/codes/${code.id}/detail`}
          label={code.title}
          className="w-full"
        />
      </div>

      <Center className="hidden lg:flex h-full">
        <FavoriteCount count={code?.favorites_count || 0} />
      </Center>

      <div className="hidden lg:block py-3 text-xs">{code?.language?.display}</div>

      <div className="col-span-2 lg:col-span-1 py-2">
        <TimeAgo
          date={code.updated_at || ""}
          className="text-xs text-gray-700 w-[100px]"
        />
      </div>

      <div className="col-span-2">
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
      </div>
    </div>
  );
};
