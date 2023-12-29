import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  className?: string;
}

export const CodeTableHeader = ({
  className
}: Props) => {
  return (
    <div className={cn("bg-gray-100 w-full grid", className)}>
      <div></div>
      <div className="flex flex-row p-2 font-bold text-gray-700">タイトル</div>
      <div className=""></div>
      <div className="p-2 font-bold text-gray-700">言語</div>
      <div className="p-2 font-bold text-gray-700">更新</div>
      <div className="col-span-2"></div>
    </div>
  );
};
