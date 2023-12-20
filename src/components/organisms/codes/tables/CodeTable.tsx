"use client";

import React from "react";
import Link from "next/link";

import { Table, TableBody } from "@/src/components/ui/table";

import { Code } from "@/src/types";
import { useBadCodeList } from "@/src/hooks/codes/useCodeList";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteBadCode } from "@/src/libs/externals/supabase/queries/codes";
import { cn } from "@/src/libs/utils";
import { CodeTableHeader } from "./CodeTableHeader";
import { CodeTableRow } from "./CodeTableRow";

interface CodeTableProps {
  codes: Code[];
  className?: string;
}

export const CodeTable = ({ codes: initCodes, className }: CodeTableProps) => {
  const { codes, removeBadCode } = useBadCodeList(initCodes);
  const { client } = useSupabase();

  const handleDelete = async (id: number) => {
    if (!client) return;

    if (!confirm("削除しますか？")) return;

    await fetchDeleteBadCode(id, client);
    removeBadCode(id);
  };

  return (
    <Table className={cn("border-y", className)}>
      <CodeTableHeader />

      <TableBody className="bg-white">
        {codes?.map((code) => (
          <CodeTableRow key={code.id} code={code} onDelete={handleDelete} />
        ))}
      </TableBody>
    </Table>
  );
};
