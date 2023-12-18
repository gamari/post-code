"use client";

import React from "react";
import Link from "next/link";

import dayjs from "dayjs";

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
import { Typo } from "@/src/components/base/typo";
import { cn } from "@/src/libs/utils";
import { Badge } from "../../ui/badge";

interface Props {
  codes: BadCode[];
  className?: string;
}

export const CodeTable = ({ codes: initCodes, className }: Props) => {
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
          <TableHead>操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">
        {codes?.map((code) => (
          <TableRow key={code.id}>
            <TableCell className="w-[100px]">
              {code.is_public ? (
                <Badge variant="default">公開</Badge>
              ) : (
                <Badge variant="outline">非公開</Badge>
              )}
            </TableCell>
            <TableCell>
              <Link
                href={`/codes/${code.id}/detail`}
                className="w-full h-full "
              >
                <div className="h-full w-full p-6">{code.title}</div>
              </Link>
            </TableCell>
            <TableCell className="w-[200px]">
              <Typo
                text={dayjs(code.updated_at).format("YYYY/MM/DD hh:mm")}
                type="p"
              />
            </TableCell>
            <TableCell className="w-[200px]">
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
