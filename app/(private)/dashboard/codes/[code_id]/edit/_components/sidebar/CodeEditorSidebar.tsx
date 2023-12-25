"use client";

import React from "react";

import { CodeEditorFileList } from "../files/CodeEditorFileList";
import { CodeEditorSaveModalButton } from "../../CodeEditorSaveModalButton";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { CodeEditorNewFileModalButton } from "../../CodeEditorNewFileModalButton";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { CodeEditorSidebarHeader } from "./CodeEditorSidebarHeader";
import { CodeEditorSidebarTools } from "./CodeEditorSidebarTools";

export const CodeEditorSidebar = () => {
  return (
    <div className="w-full h-fit border p-5 rounded-md bg-white">
      <CodeEditorSidebarHeader className="pb-2 border-b" />
      <CodeEditorFileList className="mt-6 mb-4 overflow-auto max-h-[400px]" />
      <CodeEditorSidebarTools />
    </div>
  );
};
