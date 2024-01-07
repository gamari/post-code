"use client";

import React, { FunctionComponent } from "react";

import { CodeEditorSidebar } from "./sidebar/CodeEditorSidebar";
import { CodeEditorProvider } from "@/src/contexts/editors/CodeEditorProvider";
import { CodeDetail } from "@/src/types";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeEditorContent } from "./content/CodeEditorContent";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { CodeEditorSelectedFileProvider } from "@/src/contexts/editors/CodeEditorSelectedFileProvider";
import { CodeEditorFilesProvider } from "@/src/contexts/editors/CodeEditorFilesProvider";

interface Props {
  code: CodeDetail;
}

export const CodeEditor: FunctionComponent<Props> = ({ code }: Props) => {
  const { authUser } = useSupabase();

  if (code?.user_id !== authUser?.id) {
    return <NoContent>編集対象がありません</NoContent>;
  }

  return (
    <CodeEditorProvider code={code}>
      <CodeEditorSelectedFileProvider>
        <CodeEditorFilesProvider code={code}>
          <Flex gap={16}>
            <CodeEditorContent className="w-[700px]" />
            <CodeEditorSidebar className="w-[250px]" />
          </Flex>
        </CodeEditorFilesProvider>
      </CodeEditorSelectedFileProvider>
    </CodeEditorProvider>
  );
};
