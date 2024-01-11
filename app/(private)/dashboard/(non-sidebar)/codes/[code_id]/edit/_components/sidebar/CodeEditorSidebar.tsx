"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { BaseProps } from "@/src/types/components";
import { CodeEditorSidebarFileList } from "./CodeEditorSidebarFileList";
import { CodeEditorSidebarHeader } from "./CodeEditorSidebarHeader";
import { CodeEditorSidebarTools } from "./CodeEditorSidebarTools";

interface Props extends BaseProps {}

export const CodeEditorSidebar = ({
  className
}: Props) => {
  return (
    <div className={cn("h-fit border p-5 rounded-md bg-white z-[110]", className)}>
      <CodeEditorSidebarHeader className="pb-2 border-b" />
      <CodeEditorSidebarFileList className="mt-6 mb-4 overflow-auto max-h-[350px]" />
      <CodeEditorSidebarTools />
    </div>
  );
};
