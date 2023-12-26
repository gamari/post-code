"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { DateString } from "@/src/components/atoms/texts/date-string";
import { DeleteButton } from "@/src/components/molecules/buttons/delete-button";
import { EditButton } from "@/src/components/molecules/buttons/edit-button";
import { LinkText } from "@/src/components/molecules/displays/link-text";
import { ToggleBudge } from "@/src/components/molecules/displays/toggle-budge";
import { TableRow, TableCell } from "@/src/components/ui/table";
import { CodeDetail } from "@/src/types";

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
        <LinkText
          url={`/codes/${code.id}/detail`}
          className="w-full h-full"
          label={code.title}
        />
      </TableCell>
      <TableCell className="w-fit">{code?.language?.display}</TableCell>
      <TableCell className="w-fit">
        <DateString value={code.updated_at} type="datetime" />
      </TableCell>
      <TableCell className="w-fit">
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
