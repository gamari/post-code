"use client";

import React from "react";

import { CodeEditorFileList } from "../files/CodeEditorFileList";
import { CodeEditorSidebarHeader } from "./CodeEditorSidebarHeader";
import { CodeEditorSidebarTools } from "./CodeEditorSidebarTools";

export const CodeEditorSidebar = () => {
  return (
    <div className="w-full h-fit border p-5 rounded-md bg-white z-[200]">
      <CodeEditorSidebarHeader className="pb-2 border-b" />
      <CodeEditorFileList className="mt-6 mb-4 overflow-auto max-h-[400px]" />
      <CodeEditorSidebarTools />
    </div>
  );
};
