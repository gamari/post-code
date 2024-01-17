import React from "react";

import { MdOutlineInsertDriveFile } from "react-icons/md";
import { DiPython } from "react-icons/di";
import { FileType } from "@/src/libs/editors";
import {
  SiHaskell,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiPerl,
  SiPhp,
  SiRust,
  SiScala,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiGoland } from "react-icons/si";
import { TbBrandCpp, TbFileTypeSql } from "react-icons/tb";
import { GoRuby } from "react-icons/go";
import { cn } from "@/src/libs/utils";
import { IconSize, getIconSizeClassName } from "@/src/libs/components";

interface Props {
  fileType: FileType;
  className?: string;
  size?: IconSize;
}

export const FileIcon = ({ fileType, className, size = "md" }: Props) => {
  const addClassName = cn(getIconSizeClassName(size), className);
  if (fileType === "python") {
    return <DiPython className={addClassName} />;
  } else if (fileType === "javascript" || fileType === "jsx") {
    return <SiJavascript className={addClassName} />;
  } else if (fileType === "tsx" || fileType === "typescript") {
    return <SiTypescript className={addClassName} />;
  } else if (fileType === "java") {
    return <FaJava className={addClassName} />;
  } else if (fileType === "golang") {
    return <SiGoland className={addClassName} />;
  } else if (fileType === "sql") {
    return <TbFileTypeSql className={addClassName} />;
  } else if (fileType === "c" || fileType === "c_cpp") {
    return <TbBrandCpp className={addClassName} />;
  } else if (fileType === "php") {
    return <SiPhp className={addClassName} />;
  } else if (fileType === "ruby") {
    return <GoRuby className={addClassName} />;
  } else if (fileType === "perl") {
    return <SiPerl className={addClassName} />;
  } else if (fileType === "kotlin") {
    return <SiKotlin className={addClassName} />;
  } else if (fileType === "scala") {
    return <SiScala className={addClassName} />;
  } else if (fileType === "rust") {
    return <SiRust className={addClassName} />;
  } else if (fileType === "haskell") {
    return <SiHaskell className={addClassName} />;
  } else if (fileType === "html") {
    return <SiHtml5 className={addClassName} />;
  }

  return <MdOutlineInsertDriveFile className={addClassName} />;
};
