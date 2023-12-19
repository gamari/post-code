import { TableHeader, TableRow, TableHead } from "@/src/components/ui/table";
import React from "react";

export const CodeTableHeader = () => {
  return (
    <TableHeader className="bg-gray-100">
      <TableRow>
        <TableHead></TableHead>
        <TableHead>タイトル</TableHead>
        <TableHead>更新日</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
  );
};
