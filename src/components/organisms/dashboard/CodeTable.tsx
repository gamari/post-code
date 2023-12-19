"use client";

import React from "react";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";

import { BadCode } from "@/src/types";
import { Button } from "@/src/components/ui/button";
import { useBadCodeList } from "@/src/hooks/bad-codes/useBadCodeList";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteBadCode } from "@/src/libs/externals/supabase/queries/bad-codes";
import { cn } from "@/src/libs/utils";
import { Badge } from "../../ui/badge";
import { DateString } from "../../atoms/texts/date-string";
import { EditButton } from "../../molecules/buttons/edit-button";
import { useRouter } from "next/navigation";
import { ToggleBudge } from "../../molecules/displays/toggle-budge";
import { LinkText } from "../../molecules/displays/link-text";
import { DeleteButton } from "../../molecules/buttons/delete-button";

interface CodeTableProps {
  codes: BadCode[];
  className?: string;
}

export const CodeTable = ({ codes: initCodes, className }: CodeTableProps) => {
  const router = useRouter();

  const { codes, removeBadCode } = useBadCodeList(initCodes);
  const { client } = useSupabase();

  const handleDelete = async (id: number) => {
    if (!client) return;

    if (!confirm("削除しますか？")) return;

    await fetchDeleteBadCode(id, client);
    removeBadCode(id);
  };

  return (
    <Table className={cn("border", className)}>
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead></TableHead>
          <TableHead>タイトル</TableHead>
          <TableHead>更新日</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-white">
        {codes?.map((code) => (
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
                className="w-full h-full "
                label={code.title}
              />
            </TableCell>
            <TableCell className="w-[200px]">
              <DateString value={code.updated_at} />
            </TableCell>
            <TableCell className="w-[200px]">
              <div className="flex flex-row items-center gap-2">
                <EditButton
                  onClick={() => {
                    router.push(`/dashboard/codes/${code.id}/edit`);
                  }}
                />
                <DeleteButton
                  onClick={() => {
                    handleDelete(code.id);
                  }}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
