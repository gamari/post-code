import { cn } from "@/src/libs/utils";
import React from "react";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { Typo } from "../../base/typo";
import { File } from "@/src/types";

interface Props {
  className?: string;
  onClick?: (file: File) => void;
  file: File;
}

export const FileItem = ({ file, className, onClick }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-2 rounded-md hover:bg-gray-100 p-2 cursor-pointer select-none text-sm",
        className
      )}
      onClick={() => onClick && onClick(file)}
    >
      <MdOutlineInsertDriveFile className="h-4 w-4" />
      <Typo text={file.name} />
    </div>
  );
};
