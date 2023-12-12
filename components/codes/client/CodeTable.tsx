"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { BadCode } from "@/libs/types";
import { Button } from "@/components/common/ui/button";
import Link from "next/link";
import { useBadCodeList } from "@/hooks/bad-codes/useBadCodeList";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import { fetchDeleteBadCode } from "@/libs/externals/supabase/queries/bad-codes";

interface Props {
  codes: BadCode[];
}

export const CodeTable = ({ codes: initCodes }: Props) => {
  const { codes, removeBadCode } = useBadCodeList(initCodes);
  const { client } = useSupabase();

  const handleDelete = async (id: number) => {
    if (!client) return;

    if (!confirm("削除しますか？")) return;

    await fetchDeleteBadCode(id, client);
    removeBadCode(id);
  };

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead>タイトル</TableHead>
          <TableHead>操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {codes?.map((code) => (
          <TableRow key={code.id}>
            <TableCell>
              <Link href={`/codes/${code.id}`}>{code.title}</Link>
            </TableCell>
            <TableCell>
              <div className="flex flex-row items-center gap-2">
                <Button asChild>
                  <Link href={`/dashboard/codes/${code.id}/edit`}>編集</Link>
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleDelete(code.id);
                  }}
                >
                  削除
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
