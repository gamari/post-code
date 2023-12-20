import React from "react";

import { File } from "@/src/types";
import { FileItem } from "./FileItem";
import { cn } from "@/src/libs/utils";
import { SlideIn } from "../../molecules/animation/SlideIn";
import { sortAscByName, sortDescByName } from "@/src/libs/sortes";

interface Props {
  files: File[];
  className?: string;
  onClick?: (file: File) => void;
  selectedFile?: File | null;
}

export const FileItemList = ({
  className,
  files,
  onClick,
  selectedFile,
}: Props) => {
  const sortedFiles = files.sort(sortAscByName);

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {sortedFiles.map((file, index) => (
        <SlideIn delay={index * 0.1} from="right" key={file.name}>
          <FileItem
            key={file.id}
            className={cn(
              "",
              selectedFile?.id === file.id ? "bg-slate-200" : ""
            )}
            file={file}
            onClick={onClick}
          />
        </SlideIn>
      ))}
    </div>
  );
};
