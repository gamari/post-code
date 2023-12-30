import { Center } from "@/src/components/atoms/containers/Center";
import { cn } from "@/src/libs/utils";
import React from "react";

interface Props {
  className?: string;
}

export const CodeTableHeader = ({ className }: Props) => {
  return (
    <div className={cn("bg-gray-100 w-full grid", className)}>
      <div></div>
      <div className="flex flex-row p-2 font-bold text-gray-700">タイトル</div>
      <div className=""></div>
      <Center className="p-2 font-bold text-gray-700">言語</Center>
      <Center className="p-2 font-bold text-gray-700">更新</Center>
      <div className="col-span-2"></div>
    </div>
  );
};
