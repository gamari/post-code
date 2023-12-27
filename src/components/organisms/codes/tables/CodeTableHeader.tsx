import { TableHeader, TableRow, TableHead } from "@/src/components/ui/table";
import React from "react";

export const CodeTableHeader = () => {
  return (
    <TableHeader className="bg-gray-100">
      <TableRow>
        <TableHead></TableHead>
        <TableHead>タイトル</TableHead>
        <TableHead className="hidden lg:block">言語</TableHead>
        <TableHead>更新</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
  );
};
