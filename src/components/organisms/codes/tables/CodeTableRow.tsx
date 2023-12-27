"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { DeleteButton } from "@/src/components/molecules/buttons/delete-button";
import { EditButton } from "@/src/components/molecules/buttons/edit-button";
import { LinkText } from "@/src/components/molecules/displays/link-text";
import { ToggleBudge } from "@/src/components/molecules/displays/toggle-budge";
import { TableRow, TableCell } from "@/src/components/ui/table";
import { CodeDetail } from "@/src/types";
import { TimeAgo } from "@/src/components/molecules/time-ago";
import { FavoriteCount } from "../../favorite-count";

interface Props {
  code: CodeDetail;
  onDelete: (id: number) => void;
}

export const CodeTableRow = ({ code, onDelete }: Props) => {
  const router = useRouter();

  return (
    <TableRow key={code.id}>
      <TableCell className="w-[100px]">
        <ToggleBudge
          is_public={code.is_public || false}
          trueText="公開"
          falseText="非公開"
        />
      </TableCell>
      <TableCell>
        <div className=" flex flex-row items-center">
          <LinkText
            url={`/codes/${code.id}/detail`}
            className="flex-1"
            label={code.title}
          />

          <FavoriteCount count={code?.favorites_count || 0} />
        </div>
      </TableCell>
      <TableCell className="hidden lg:block w-[100px]">
        {code?.language?.display}
      </TableCell>
      <TableCell className="w-[100px]">
        <TimeAgo
          date={code.updated_at || ""}
          className="text-xs text-gray-700"
        />
      </TableCell>
      <TableCell className="w-[100px]">
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
      </TableCell>
    </TableRow>
  );
};
