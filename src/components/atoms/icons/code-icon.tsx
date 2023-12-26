import React from "react";

import { FileType } from "@/src/libs/editors";
import { DiJava, DiPython } from "react-icons/di";
import { Logo } from "../../molecules/logo";
import { SiGoland, SiJavascript, SiTypescript } from "react-icons/si";
import { cn } from "@/src/libs/utils";
import { TbFileTypeSql } from "react-icons/tb";

interface Props {
  fileType: FileType;
  size?: "sm" | "md" | "lg";
}

export const CodeIcon = ({ fileType, size = "md" }: Props) => {
  const className = cn(
    size === "sm" && "text-md",
    size === "md" && "text-xl",
    size == "lg" && "text-3xl"
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
