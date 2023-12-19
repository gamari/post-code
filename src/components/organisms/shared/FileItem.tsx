import { cn } from "@/src/libs/utils";
import React from "react";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { Typo } from "../../atoms/texts/typo";
import { File } from "@/src/types";
import { FileIcon } from "../../molecules/displays/file-icon";
import { getFileType } from "@/src/libs/editors";

interface Props {
  className?: string;
  onClick?: (file: File) => void;
  file: File;
}

export const FileItem = ({ file, className, onClick }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-2 rounded-md hover:bg-gray-100 px-2 py-1 cursor-pointer select-none text-sm",
        className
      )}
      onClick={() => onClick && onClick(file)}
    >
      <FileIcon fileType={getFileType(file?.name)} />
      <Typo text={file.name} />
    </div>
  );
};
