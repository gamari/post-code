import { Typo } from "@/components/common/typo/typo";
import { Button } from "@/components/ui/button";
import React from "react";

export const CodeSidebar = () => {
  return (
    <div className="border rounded-lg w-[240px] p-5 h-fit">
      <Typo text="サイドバー" type="h3" className="text-gray-700 mb-4" />

      <div className="flex flex-col gap-4">
        <Button>コメントする</Button>
      </div>
    </div>
  );
};
