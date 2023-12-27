import React from "react";

import { FileType } from "@/src/libs/editors";
import { DiJava, DiPython } from "react-icons/di";
import { Logo } from "../../molecules/logo";
import { SiGoland, SiJavascript, SiTypescript } from "react-icons/si";
import { cn } from "@/src/libs/utils";
import { TbFileTypeSql } from "react-icons/tb";

interface Props {
  fileType: FileType | null | string;
  size?: "sm" | "md" | "lg";
}

export const CodeIcon = ({ fileType, size = "md" }: Props) => {
  if (!fileType) return <Logo className="h-8 w-8" />;

  const className = cn(
    size === "sm" && "h-5 w-5",
    size === "md" && "h-8 w-8",
    size == "lg" && "h-12 w-12"
  );

  if (fileType === "python") {
    return <DiPython className={className} />;
  } else if (fileType === "javascript" || fileType === "jsx") {
    return <SiJavascript className={className} />;
  } else if (fileType === "tsx" || fileType === "typescript") {
    return <SiTypescript className={className} />;
  } else if (fileType === "java") {
    return <DiJava className={className} />;
  } else if (fileType === "go") {
    return <SiGoland className={className} />;
  } else if (fileType === "sql") {
    return <TbFileTypeSql className={className} />;
  }

  return <Logo className={className} />;
};
