"use client";

import React from "react";

import { CodeDetail } from "@/src/types";
import { useBadCodeList } from "@/src/hooks/codes/useCodeList";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteBadCode } from "@/src/libs/externals/supabase/queries/codes";
import { cn } from "@/src/libs/utils";
import { CodeTableHeader } from "./CodeTableHeader";
import { CodeTableRow } from "./CodeTableRow";

interface CodeTableProps {
  codes: CodeDetail[];
  className?: string;
}

export const TABLE_GRID_CSS = "grid-cols-[70px_1fr_80px_80px_80px_100px]";

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
    <div className={cn("border-y", className)}>
      <CodeTableHeader className={TABLE_GRID_CSS} />

      <div className="bg-white w-full border-t">
        {codes?.map((code) => (
          <CodeTableRow
            key={code.id}
            code={code}
            onDelete={handleDelete}
            className={TABLE_GRID_CSS}
          />
        ))}
      </div>
    </div>
  );
};
