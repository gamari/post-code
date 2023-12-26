import React from "react";

import { MdOutlineInsertDriveFile } from "react-icons/md";
import { DiPython, DiGo } from "react-icons/di";
import { FileType } from "@/src/libs/editors";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiGoland } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
interface Props {
  fileType: FileType;
}

export const FileIcon = ({ fileType }: Props) => {
  const className = "h-5 w-5";
  if (fileType === "python") {
    return <DiPython className={className} />;
  } else if (fileType === "javascript" || fileType === "jsx") {
    return <SiJavascript className={className} />;
  } else if (fileType === "tsx" || fileType === "typescript") {
    return <SiTypescript className={className} />;
  } else if (fileType === "java") {
    return <FaJava className={className} />;
  } else if (fileType === "go") {
    return <SiGoland className={className} />;
  } else if (fileType === "sql") {
    return <TbFileTypeSql className={className} />;
  }

  return <MdOutlineInsertDriveFile className="h-5 w-5" />;
};
