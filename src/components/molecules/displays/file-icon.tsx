import React from "react";

import { MdOutlineInsertDriveFile } from "react-icons/md";
import { DiPython, DiJavascript1, DiJava, DiGo } from "react-icons/di";
import { FileType } from "@/src/libs/editors";

interface Props {
  fileType: FileType;
}

export const FileIcon = ({ fileType }: Props) => {
  if (fileType === "python") {
    return <DiPython className="h-5 w-5" />;
  } else if (fileType === "javascript" || fileType === "jsx") {
    return <DiJavascript1 className="h-5 w-5" />;
  } else if (fileType === "tsx" || fileType === "typescript") {
    return <DiJavascript1 className="h-5 w-5" />;
  } else if (fileType === "java") {
    return <DiJava className="h-5 w-5" />;
  } else if (fileType === "go") {
    return <DiGo className="h-5 w-5" />;
  }

  return <MdOutlineInsertDriveFile className="h-5 w-5" />;
};
