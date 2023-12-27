import React from "react";

import { MdOutlineInsertDriveFile } from "react-icons/md";
import { DiPython } from "react-icons/di";
import { FileType } from "@/src/libs/editors";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiGoland } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

interface Props {
  fileType: FileType;
  className?: string;
}

export const FileIcon = ({ fileType, className }: Props) => {
  const addClassName = `h-5 w-5 ${className}`;
  if (fileType === "python") {
    return <DiPython className={addClassName} />;
  } else if (fileType === "javascript" || fileType === "jsx") {
    return <SiJavascript className={addClassName} />;
  } else if (fileType === "tsx" || fileType === "typescript") {
    return <SiTypescript className={addClassName} />;
  } else if (fileType === "java") {
    return <FaJava className={addClassName} />;
  } else if (fileType === "go") {
    return <SiGoland className={addClassName} />;
  } else if (fileType === "sql") {
    return <TbFileTypeSql className={addClassName} />;
  }

  return <MdOutlineInsertDriveFile className={addClassName} />;
};
