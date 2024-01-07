"use client";

import React from "react";

import { CodeDetail } from "@/src/types";
import { useCodeList } from "@/src/hooks/codes/useCodeList";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteBadCode } from "@/src/libs/externals/supabase/queries/codes";
import { cn } from "@/src/libs/utils";
import { DashboardCodeListRow } from "./DashboardCodeListRow";
import { NoContent } from "@/src/components/molecules/displays/no-content";

interface CodeTableProps {
  codes: CodeDetail[];
  className?: string;
}

export const TABLE_GRID_CSS = "grid-cols-[70px_1fr_80px_80px_80px_100px]";

export const DashboardCodeList = ({
  codes: initCodes,
  className,
}: CodeTableProps) => {
  const { codes, deleteCode } = useCodeList(initCodes);
  const { client } = useSupabase();

  const handleDelete = async (id: number) => {
    if (!client) return;
    if (!confirm("削除しますか？")) return;

    await fetchDeleteBadCode(id, client);
    deleteCode(id);
  };

  if (!codes?.length) {
    return <NoContent>作成したコードがありません</NoContent>;
  }

  return (
    <div className={cn("border-y", className)}>
      <div className="bg-white w-full border-t">
        {codes?.map((code) => (
          <DashboardCodeListRow
            key={code.id}
            code={code}
            onDelete={handleDelete}
            className="border-b"
          />
        ))}
      </div>
    </div>
  );
};
